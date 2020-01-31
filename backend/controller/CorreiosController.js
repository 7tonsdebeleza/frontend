const axios = require("axios");
const Correios = require("node-correios");
const config = require("../globalconfig");

/*
 - AdressGeter: get em um cep (/:cep), e retorna um objeto com dados do endereço
 retorno:
 {
    district: "", //bairroc
    city: "", //cidade
    state: "", //estado
    country: "BR",             
 }
*/

module.exports = {
  AdressGeter(req, res){
    const valor = req.params.cep;
    const cep = valor.replace(/\D/g, '');

    const validaCep = /^[0-9]{8}$/;

    if(validaCep.test(cep)){
      const url = "http://viacep.com.br/ws/"+cep+"/json/";
    
      axios({
        method: 'get',
        url: url,

      }).then(response => {
        if(response.data.erro) {
          res.send("Not found!");
        }

        else res.send(response.data);
        
      }).catch(e => {
        res.send({error: e});
    
      })
    } else {
      res.send("Formato invalido");

    }
    
  },

  getShippingPrice(req, res){

    let correios = new Correios();

    let args = {
      nCdEmpresa: config.CorreiosConfig.nCdEmpresa,
      sDsSenha: config.CorreiosConfig.sDsSenha,
      nCdServico: config.CorreiosConfig.nCdServico,
      sCepOrigem: config.CorreiosConfig.sCepOrigem,

      sCepDestino: req.body.cep,
      nVlPeso: req.body.peso,
      nCdFormato: req.body.formato,
      nVlComprimento: req.body.comprimento,
      nVlAltura: req.body.altura,
      nVlLargura: req.body.largura,
      nVlDiametro: req.body.diametro,
    }

    correios.calcPrecoPrazo(args).then(result => {
      console.log("Consulta realizada com sucesso");
      res.send(result);

    }).catch(error => {
      console.log("Erro inesperado...");
      console.log(error);
      res.sendStatus(500);
      
    });

  }
}