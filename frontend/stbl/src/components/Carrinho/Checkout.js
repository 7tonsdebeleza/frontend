import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Info from "../Images/information.svg";
import Search2 from '../Images/iconsearch2.png';
import api from "../API/api";

class Checkout extends Component {
  state ={
    alert: null, // Guardará string caso ocorra erro de submissão

    informationcep: false, // Indica se informativo sobre o cep deve aparecer

    // Dados do usuário e do carrinho estarão em props user e carrrinho
    // Dados do frete
    phoneAreaCode: "",
    phoneNumber: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",

    // Dados dos valores da compra
    freteValor: "",
    subtotal: 0,
  }

  handleInput = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  

  //função para fechar alertas ao clicar no X
  fecharAlerta = () => {
    this.setState({
      alert: "",
    })
  }

  chamarAlerta = (msg) => {
    this.setState({
      alert: msg,
    })
  }

  // funçao para uso de informação com hover
  Information = (e) => {
    this.setState({
      [e.target.name]: this.state[e.target.name] ? false : true
    })
  }

  searchCep = async () => {
    // Buscar cep na api
    // Pegar retorno de estado, cidade, bairro e rua e por no state
    const res  = await api.get(`/getAdress/${this.state.postalCode}`);

    if(res.data === "Formalo invalido!") return this.chamarAlerta("Formato de cep inválido!")

    else return this.setState({
      street:res.data.logradouro,
      district: res.data.bairro,
      city: res.data.localidade,
      state: res.data.uf,
      country: 'BR'
    })

  }

  getShipping = () =>{
    // ####### Temporário até implementação real
    this.setState({ freteValor: 100.00 })

  }

  Submit = async () =>{
    // Enviar dados para PagSeguro e receber link de redirecionamento para transação
    const st = this.state;

    if(st.phoneNumber.length < 8 || st.phoneNumber.length > 10){
      return this.chamarAlerta("Insira um número de celular válido");
    }

   if(st.phoneAreaCode && st.phoneNumber && st.street && st.number && st.district && st.postalCode && st.city && st.state && st.country && st.phoneAreaCode.trim() && st.phoneNumber.trim() && st.street.trim() && st.number.trim() && st.district.trim() && st.postalCode.trim() && st.city.trim() && st.state.trim() && st.country.trim()){
    
    if(!st.freteValor) return this.chamarAlerta("Calcule o frete antes de efetuar esta ação!");

    const comprador = {
      name: st.name,
      email: st.email,
      phoneAreaCode: st.phoneAreaCode,
      phoneNumber: st.phoneNumber,
      ref: st.ref,
    }

    const frete = {
      type: 1,
      street: st.street,
      number: st.number,
      complement: st.complement,
      district: st.district,
      postalCode: st.postalCode,
      city: st.city,
      state: st.state,
      country: st.country,
    }

    let carrinho = [];

    this.props.carrinho.forEach(produto => {
      let item = {
        id: produto._id,
        description: produto.titulo,
        amount: produto.preco,
        quantity: produto.qtd,
        weight: produto.peso,
      }

      carrinho.push(item);
    });

    let req = {carrinho, comprador, frete};

    api.post("/pagseguro/checkout", req).then((res) => {
      console.log("Redirecionando...");
      let redirectKey = res.data.checkout.code._text;
      window.location = `https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=${redirectKey}`
      
      }).catch((e) => {
        console.log(e);
        this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");

      });

   } else {
     return this.chamarAlerta("Preencha todos os dados!");
   }

  }

  componentDidMount(){
    // Esta página não poderá ser acessada caso o usuário esteja logado, ou o carrinho vazio
    if(!this.props.user) {
      console.log('Acesso não autorizado...');
      window.location = '/login';
    }

    else if(this.props.carrinho.length === 0){
      console.log('Carrinho vazio, essa ação não pode ser concluída')
      window.location = '/lojavirtual';
    } 

    // Calculando subtotal da compra
    if(this.props.carrinho.length > 0){
      let subtotal = 0;
      this.props.carrinho.forEach(produto => {
        subtotal = subtotal + (produto.preco * produto.qtd);
      });
      this.setState({subtotal: subtotal});
    }

    // Carregando dados de frete que já foram salvos pelo usuário
    if(this.props.user){
      this.setState({
        street: this.props.user.frete.street.trim(),
        number: this.props.user.frete.number.trim(),
        complement: this.props.user.frete.complement.trim(),
        district: this.props.user.frete.district.trim(),
        postalCode: this.props.user.frete.postalCode.trim(),
        city: this.props.user.frete.city.trim(),
        state: this.props.user.frete.state.trim(),
        country: this.props.user.frete.country.trim()
      })
    }

  }

  render(){
    const dddList = [11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];

    return(
        <div className="cadastro container">

        <div className="bread">
          <Link to="/home" >Home</Link>
          <span className="arrow">/</span>
          <span>Checkout</span>
        </div>
        <div className="criar-conta">
          <header className="page-header">
            <h1>Realize Checkout</h1>
          </header>
          <p className="title">Sua compra está quase finalizada! Confirme os dados de frete para lhe redirecionarmos para o portal da PagSeguro. </p>

          <form>

            <label>DDD e Celular</label><em>*&nbsp;&nbsp;</em>

            <div>
              <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <select style={{minWidth: '60px', maxWidth: '60px'}} className="inputt" type="text" name="phoneAreaCode" onChange={this.handleInput} defaultValue="" >
                  {
                    dddList.map(ddd => {
                      return(<option key={ddd} style={{maxWidth: '5px'}} value={ddd}> {ddd} </option>)
                    })
                  }
                </select>
                <input style={{width: '320px'}} className="inputt" type="number" aria-describedby="emailHelp" name="phoneNumber" onChange={this.handleInput}/>

              </div>
            </div>

            <label>CEP</label><em>*&nbsp;&nbsp;</em>
            
            <img name="informationcep" onClick={this.Information} className="information" id="info" width='12' height='12' src={Info} alt='info' />
            
            {this.state.informationcep ? <p>Insira seu CEP e click na lupa para preenchimento rápido. Caso não saiba seu CEP <a target='_blank'  rel="noopener noreferrer" href='http://www.buscacep.correios.com.br/sistemas/buscacep/'> click aqui. </a> </p> : null}

            <div>
              <div style={{display: 'flex', flexDirection: 'row' }}>
                <input className="inputt" type="text" aria-describedby="emailHelp" name="postalCode" onChange={this.handleInput}/>
                <img onClick={()=>this.searchCep()} className="information" id="img-pesquisa" width='20' height='20' style={{marginLeft: '4px', marginTop: '4px'}} src={Search2} alt='pesquisa' />
              </div>
            </div>

            
            <label>Estado (UF)</label><em>*</em>
            <div >
              <select className="inputt" defaultValue={this.state.state || "CE"} type="text" name="state" onChange={this.handleInput}>
                <option value="AC">Acre (AC)</option>
                <option value="AL">Alagoas (AL)</option>
                <option value="AP">Amapá (AP)</option>
                <option value="AM">Amazonas (AM)</option>
                <option value="BH">Bahia (BH)</option>
                <option value="CE">Ceará (CE)</option>
                <option value="DF">Distrito Federal (DF)</option>
                <option value="ES">Espírito Santo (ES)</option>
                <option value="GO">Goiás (GO)</option>
                <option value="MA">Maranhão (MA)</option>
                <option value="MT">Mato Grosso (MT)</option>
                <option value="MS">Mato Grosso do Sul (MS)</option>
                <option value="MG">Minas Gerais (MG)</option>
                <option value="PA">Pará (PA)</option>
                <option value="PB">Paraíba (PB)</option>
                <option value="PR">Parana (PR)</option>
                <option value="PE">Pernambuco (PE)</option>
                <option value="PI">Piauí (PI)</option>
                <option value="RR">Roraima (RR)</option>
                <option value="RO">Rondônia (RO)</option>
                <option value="RJ">Rio de Janeiro (RJ)</option>
                <option value="RN">Rio Grande do Norte (RN)</option>
                <option value="RS">Rio Grande do Sul (RS)</option>
                <option value="SC">Santa Catarina (SC)</option>
                <option value="SP">São Paulo (SP)</option>
                <option value="SE">Sergipe (SE)</option>
                <option value="TO">Tocantins (TO)</option>
              </select>
            </div>

            <label>Cidade</label><em>*</em>
            <div >
              <input className="inputt" value={this.state.city} type="text" name="city" onChange={this.handleInput}></input>
            </div>

            <label>Bairro</label><em>*</em>
            <div >
              <input className="inputt" value={this.state.district} type="text" name="district" onChange={this.handleInput}></input>
            </div>

            <label>Rua</label><em>*</em>
            <div >
              <input className="inputt" value={this.state.street} type="text" name="city" onChange={this.handleInput}></input>
            </div>

            <label>Número</label><em>*</em>
            <div >
              <input className="inputt" value={this.state.number} type="text" name="number" onChange={this.handleInput}></input>
            </div>

            <label>Complemento</label>
            <div >
              <input className="inputt" value={this.state.complement} type="text" name="complement" onChange={this.handleInput}></input>
            </div>

            <p> <b>SUBTOTAL: </b> <em className="obrigatorio" style={{color: 'black'}}> R${parseFloat((this.state.subtotal).toFixed(2))} </em></p>
            
            <p className="btn-secundaryy">
              <Link to="#" onClick={() => this.getShipping() } >Calcular frete</Link>
              <em className="obrigatorio" style={{color: 'black'}}>{this.state.freteValor ? "FRETE: R$" + this.state.freteValor : null}</em>
            </p>
            


            <p> <b>TOTAL: </b> <em className="obrigatorio" style={{color: 'black'}}>{this.state.freteValor ? "R$" + (parseFloat((this.state.subtotal).toFixed(2)) + parseFloat((this.state.freteValor).toFixed(2))) : null}</em>
            </p>

            
            <p className="btn-secundaryy">
              <Link to="#" onClick={() => this.Submit()}>Confirmar</Link>
              <em className="obrigatorio">(* obrigatório)</em>
            </p>

          </form>

          {/*Alertas de erro no formulário */}
          <div>
              {this.state.alert ?
                <div className="alertacadastro">{this.state.alert}
                  <Link className="fecharalerta" name="alerta1" onClick={() => this.fecharAlerta()} to="#">X</Link>
                </div> : null}
          </div>
      </div>
    </div>
    )
  }
}

export default Checkout;