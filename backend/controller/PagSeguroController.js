const convert = require('xml-js');
const config = require('../globalconfig');
const axios = require('axios');
const qs = require('qs');

/*
  Métodos exportados:
  - sendCheckout: recebe dados de uma compra e retorna chave para redirecionamento de checkout
  - receiveStatus: recebe cógido de notificação da PagSeguro, o código é usado para consultar uma nova transação cadastrada ou alterada
*/

module.exports = {
  async sendCheckout(req, res){
    /* Estrutura da requisição
    {
      carrinho: [{ id: 'X', description: 'abc', amount: '00.00', quantity: 0, weight: '00' }],
      comprador: { name: 'abc', email: 'abc@dominio.com', phoneAreaCode: '00', phoneNumber: '00000000', ref: 'XX' },
      frete = { type: 1, street: 'abc', number: 'abc', complement: 'abc', district: 'abc', postalCode: '00000000', city: 'abc', state: 'abc', country: BR, }
    }

    - id, description: formato livre com até 100 carectres
    - quantity: inteiro entre 1 e 999
    - amount: deve ser um valor decimal entre 0.00 e 9999999.00
    - weight: valor do peso do item em gramas, a soma dos pesos não pode ultrapssar  30000g (30 kg).

    */

    let { carrinho, comprador, frete } = req.body;
  
    // Verificando formatação do CEP
    const cepRaw = frete.postalCode;
    // Removendo não numéricos do CEP
    const cep = cepRaw.replace(/\D/g, '');
    // Teste de formatação para CEP
    const validaCep = /^[0-9]{8}$/;

    if(!validaCep.test(cep)){
      return res.status(400).send("Formato de CEP inválido");
    } else {
      frete.postalCode = cep;
    }

    // POST para obtenção de código para redirecionamento de checkout
    const url = config.PagSeguroConfig.mode === 'sandbox' ? 'https://ws.sandbox.pagseguro.uol.com.br/v2/checkout/' : 'https://ws.pagseguro.uol.com.br/v2/checkout/';

    let body = {};

    // Moeda da transação (Apenas 'BRL');
    body.currency = 'BRL';

    // Endereço de redirecionamento após fim de checkout na PagSeguro
    body.redirectURL = 'http://7tonsdebeleza.com.br/';

    // Endereço para envio de notificação ########## deve ser alterado em produção
    body.notificationURL = 'http://localhost:3333/pagseguro/status';

    // Email visível para cliente após fim da compra
    body.receiverEmail = config.PagSeguroConfig.email; 

    // Guardando referência para comprador (ID)
    body.reference = comprador.ref;
    // Outros dados
    body.senderName = comprador.name;
    body.senderAreaCode = comprador.phoneAreaCode;
    body.senderPhone = comprador.phoneNumber;
    body.senderEmail = comprador.email;

    // Configurando dados do frete
    body.shippingAddressRequired = true;
    body.shippingType = 3; // Tipo de frete não especificado (PAC ou SEDEX)
    body.shippingCost = parseFloat(frete.shippingCost).toFixed(2);

    body.shippingAddressStreet = frete.street;
    body.shippingAddressNumber = frete.number;
    body.shippingAddressComplement = frete.complement;
    body.shippingAddressDistrict = frete.district;
    body.shippingAddressCity = frete.city;
    body.shippingAddressState = frete.state;
    body.shippingAddressCountry = 'BRA';
    body.shippingAddressPostalCode = frete.postalCode;

    let countId = 1;
    let totalWeight = 0;
    let isValid = true;
    carrinho.forEach(produto => {
      // Verificando formatação dos campos dos produtoss
      if(isNaN(produto.amount) || isNaN(produto.weight) || !produto.weight || !produto.amount
        || !produto.amount.toString().trim() || !produto.weight.toString().trim() || produto.id.length > 100 
        || produto.description.length > 100 || produto.quantity > 999 || produto.quantity < 1 
        || produto.amount > 9999999){
        console.log("Item com formatação incorreta detectado em uma requisição de compra!");
        console.table(produto);
        isValid = false;
      }

      // Calculando peso total
      totalWeight =+ produto.weight;

      // Formatando preço
      let amountVal = parseFloat(produto.amount).toFixed(2);

      // Modando requisição de items
      body[`itemId${countId}`] = produto.id;
      body[`itemDescription${countId}`] = produto.description;
      body[`itemAmount${countId}`] = amountVal;
      body[`itemQuantity${countId}`] = produto.quantity;
      body[`itemWeight${countId}`] = produto.weight;

      countId ++;
    });

    if(!isValid) return res.sendStatus(500);

    // Vrificação do valor do peso total
    if(totalWeight > 30000) {
      console.log("Peso máximo de 30kg excedido! Peso (g):" + totalWeight);
      return res.sendStatus(500);

    }

    await axios({
      method: 'post',
      url: url,
      params: {
        email: config.PagSeguroConfig.email,
        token: config.PagSeguroConfig.token,
      },
      data: qs.stringify(body),
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
    }).then(retorno => {
      // Convertendo retorno XML para JSON
      const retornoObj = JSON.parse(convert.xml2json(retorno.data, {compact: true, spaces: 4}));
      return res.send(retornoObj);

    }).catch(e => {
      console.log("Erro na requisição de chave de redirecionamento!");
      console.log(e.response.data);
      return res.sendStatus(500);

    });

  },

  receiveStatus(req, res, next){

    // A PagSeguro usará esse método para fazer POST de um códio de notificação
    // A rota deste método deve ser configurada junto ao método de chekout na linha 113 deste arquivo
    // O POST da PagSeguro é insistente, caso não funcione na primeira tentativa, tentará novamente em alguns segundos (sandbox é manual)
    /*
      Um primeiro código é enviado quando uma compra é finalizada, e outros códigos são enviados
      sempre que o status de uma transação muda. A partir desse código de notificação, um GET pode
      ser feito no endereço da PagSeguro https://ws.pagseguro.uol.com.br/v3/transactions/notifications/
      que retornará todos os dados da transação correspondente.

      Na implementação inicial, após o GET, é verificado, pelo código da transação, se ele já existe no banco de dados
      Caso exista, apenas o status da transação é atualizado, caso não exista, os dados da transação são salvos na tabela
      Transactions, e os dados de seus itens, no campo items:[...] são guardados em instâncias de uma tabea auxiliar 
      TrasactionRegister

      Analisar abaixo o que precisa ser alterado
    */

    const code = req.body.notificationCode; 
    const url = 'https://ws.sandbox.pagseguro.uol.com.br/v3/transactions/notifications/'+code+'?email='+config.PagSeguroConfig.email+'&token='+config.PagSeguroConfig.token;

    //Buscando dados da transação realizada a partir do código de notificação recebido da PagSeguros
    axios({
      method: 'get',
      url: url,
      
    }).then(ret => {
      // Convertendo o retorno de XML para JSON
      const resjson = convert.xml2json(ret.data, {compact: true, spaces: 4});
      // Convertendo o JSON para um objeto
      const resObj = JSON.parse(resjson);

      // Use abaixo, se precisar, para visualizar todos os dados do retorno
      //console.log(resObj)
      
      // Separando informações da transação que serão guardadas no banco de dados, na tabela Transaction
      // Caso necessário, todos os campos abaixo estarão listados no final do arquivo

      const transData = {
        code: resObj.transaction.code._text,
        date: resObj.transaction.date._text,
        reference: resObj.transaction.reference._text,
        status: resObj.transaction.status._text,
        /*
          1 = Aguardando pagamento
          2 = Em Análise
          3 = Paga
          4 = Disponível (saque pode ser feito)
          5 = Em disputa (comprador reinvidicou reembolso ou devolução com a PagSeguro)
          6 = Devolvida
          7 = Cancelada
          8 = Debitada
          9 = Retenção temporária
        */
        paymentMethod: resObj.transaction.paymentMethod.type._text,
        /*
          1 = Cartão de Crédito
          2 = Boleto
          3 = Débito online
        */
        paymentCode: resObj.transaction.paymentMethod.code._text, // código para tipo específico de pagamento (bandeira, etc)
        paymentLink: resObj.transaction.paymentLink._text, // link para imprimir boleto
        
        grossAmount: resObj.transaction.grossAmount._text,
        discountAmount: resObj.transaction.discountAmount._text,
        intermediationRateAmount: resObj.transaction.creditorFees.intermediationRateAmount._text,
        intermediationFeeAmount: resObj.transaction.creditorFees.intermediationFeeAmount._text,
        netAmount: resObj.transaction.netAmount._text,
        installmentCount: resObj.transaction.installmentCount._text,

        itemCount: resObj.transaction.itemCount._text,
        senderName: resObj.transaction.sender.name._text,
        senderEmail: resObj.transaction.sender.email._text,
        senderPhoneAreaCode: resObj.transaction.sender.phone.areaCode._text,
        senderPhoneNumber: resObj.transaction.sender.phone.number._text,
        shippingStreet: resObj.transaction.shipping.address.street._text,
        shippingNumber: resObj.transaction.shipping.address.number._text,
        shippingComplement: resObj.transaction.shipping.address.complement._text,
        shippingDistrict: resObj.transaction.shipping.address.district._text,
        shippingCity: resObj.transaction.shipping.address.city._text,
        shippingState: resObj.transaction.shipping.address.state._text,
        shippingCountry: resObj.transaction.shipping.address.country._text,
        shippingPostalCode: resObj.transaction.shipping.address.postalCode._text,
        shippingCost: resObj.transaction.shipping.cost._text,
      }

      // Separando lista de itens da transação, para guardar em instâncias da tabela TransactionRegister
      const items = resObj.transaction.items.item;

      // Use abaixo para visualizar os itens se precisar
      // console.table(items)

      // Repassando dados para controller de histórico
      req.body = { transData, items };
      next();

    }).catch(e => {
      console.log("Erro inesperado ao tentar buscar dados de uma transação na api PagSeguro");
      console.log(e);
      return res.sendStatus(500);

    })
      
  },

  async estornar(req, res){
    // POST para estornar uma trasação (feito pelo admin, ou em caso de estoque vazio)
    const url = config.PagSeguroConfig.mode === 'sandbox' ? `https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/refunds?email=${config.PagSeguroConfig.email}&token=${config.PagSeguroConfig.token}` : `https://ws.pagseguro.uol.com.br/v2/transactions/refunds`;

    const { code } = req.body.transData;
    
    await axios({
      method: 'post',
      url: url,
      data: {
        transactionCode: code,
      }
    }).then(response => {
      // Convertendo o retorno de XML para JSON
      const resjson = convert.xml2json(response.data, {compact: true, spaces: 4});
      // Convertendo o JSON para um objeto
      const resObj = JSON.parse(resjson);

      return res.send({ message: `A transação de código ${code} foi estornada!`, respostaPagSeguro: resObj});

    }).catch(error => {
      return res.status(400).send(error);

    });

  }
}


// Lista de campos da transação e da lista de itens

/*
  code: 
  date: 
  reference: 
  status:
  paymentMethod: 
  grossAmount: 
  discountAmount: 
  intermediationRateAmount: 
  intermediationFeeAmount: 
  netAmount: 
  extraAmount: 
  installmentCount: 
  itemCount: 
  senderName: 
  senderEmail: 
  senderPhoneAreaCode: 
  senderPhoneNumber: 
  shippingStreet: 
  shippingNumber: 
  shippingComplement: 
  shippingDistrict: 
  shippingCity: 
  shippingState: 
  shippingCountry: 
  shippingPostalCode: 
  shippingCost:

  // Campos do produto
  id:
  description:
  quatity:
  amount:

*/