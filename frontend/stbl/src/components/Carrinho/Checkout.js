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
  }

  getTrip = () =>{
    // Calcular frete
  }

  Submit = async () =>{
   // Enviar dados para PagSeguro e receber link de redirecionamento para transação

   const st = this.state;

   // ####### Fazer checagem do cep com rota correios;
   await this.searchCep();

   if(st.phoneAreaCode && st.phoneNumber && st.street && st.number && st.district && st.postalCode && st.city && st.state && st.country && !st.phoneAreaCode.trim() && !st.phoneNumber.trim() && !st.street.trim() && !st.number.trim() && !st.district.trim() && !st.postalCode.trim() && !st.city.trim() && !st.state.trim() && !st.country.trim()){
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

    let carrinho = []

    let req = {carrinho, comprador, frete};

    api.post("/pagseguro", req).then((res) => {
      console.log("Redirecionando...");
      let redirectKey = res.data.checkout.code._text;
      console.log(redirectKey);

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
        street: this.props.user.street.trim(),
        number: this.props.user.number.trim(),
        complement: this.props.user.complement.trim(),
        district: this.props.user.district.trim(),
        postalCode: this.props.user.postalCode.trim(),
        city: this.props.user.city.trim(),
        state: this.props.user.state.trim(),
        country: this.props.user.country.trim()
      })
    }
  }

  render(){
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

            <label>CEP</label><em>*&nbsp;&nbsp;</em>
            
            <img name="informationcep" onClick={this.Information} className="information" id="info" width='12' height='12' src={Info} alt='info' />
            
            {this.state.informationcep ? <p>Insira seu CEP e click na lupa para preenchimento rápido. Caso não saiba seu CEP <a target='_blank'  rel="noopener noreferrer" href='http://www.buscacep.correios.com.br/sistemas/buscacep/'> click aqui. </a> </p> : null}

            <div>
              <div style={{display: 'flex', flexDirection: 'row' }}>
                <input className="inputt" type="number" aria-describedby="emailHelp" name="postalCode" onChange={this.handleInput}/>
                <img className="information" id="img-pesquisa" width='20' height='20' style={{marginLeft: '4px', marginTop: '4px'}} src={Search2} alt='pesquisa' />
              </div>
            </div>

            
            <label>Estado (UF)</label><em>*</em>
            <div >
              <input className="inputt" type="text" name="state" onChange={this.handleInput}></input>
            </div>

            <label>Cidade</label><em>*</em>
            <div >
              <input className="inputt" type="text" name="city" onChange={this.handleInput}></input>
            </div>

            <label>Bairro</label><em>*</em>
            <div >
              <input className="inputt" type="text" name="district" onChange={this.handleInput}></input>
            </div>

            <label>Rua</label><em>*</em>
            <div >
              <input className="inputt" type="text" name="city" onChange={this.handleInput}></input>
            </div>

            <label>Número</label><em>*</em>
            <div >
              <input className="inputt" type="text" name="number" onChange={this.handleInput}></input>
            </div>

            <label>Complemento</label>
            <div >
              <input className="inputt" type="text" name="complement" onChange={this.handleInput}></input>
            </div>

            <p> <b>SUBTOTAL: </b> <em className="obrigatorio" style={{color: 'black'}}> R${parseFloat((this.state.subtotal).toFixed(2))} </em></p>
            
            <p className="btn-secundaryy">
              <Link to="#">Calcular frete</Link>
              <em>{this.state.freteValor ? "FRETE: " + this.state.freteValor : null}</em>
            </p>

            <p> <b>TOTAL: </b> </p>

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