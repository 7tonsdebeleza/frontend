import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Info from "../Images/information.svg";
import Search2 from '../Images/iconsearch2.png';

class Checkout extends Component {
  state ={
    alert: null, // Guardará string caso ocorra erro de submissão

    informationcep: false, // Indica se informativo sobre o cep deve aparecer

    // Dados do frete
    street: "",
    number: "",
    complement: "",
    district: "",
    postalCode: "",
    city: "",
    state: "",
    country: "",

    freteValor: "120"
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

  searchCep = () => {
    // Buscar cep na api
    // Pegar retorno de estado, cidade, bairro e rua e por no state    
  }

  getTrippin = () =>{
    // Calcular frete
  }

  Submit = () =>{
   // Enviar dados para PagSeguro e receber link de redirecionamento
  }

  componentDidMount(){
    // Setar dados do usuário para o state
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
                <input className="inputt" type="email" aria-describedby="emailHelp" name="postalCode" onChange={this.handleInput}/>
                <img className="information" id="img-pesquisa" width='20' height='20' style={{marginLeft: '4px', marginTop: '4px'}} src={Search2} alt='pesquisa' />
              </div>
            </div>

            
            <label>Estado (UF)</label><em>*</em>
            <div >
              <input className="inputt" type="email" name="state" onChange={this.handleInput}></input>
            </div>

            <label>Cidade</label><em>*</em>
            <div >
              <input className="inputt" type="email" name="city" onChange={this.handleInput}></input>
            </div>

            <label>Bairro</label><em>*</em>
            <div >
              <input className="inputt" type="email" name="district" onChange={this.handleInput}></input>
            </div>

            <label>Rua</label><em>*</em>
            <div >
              <input className="inputt" type="email" name="city" onChange={this.handleInput}></input>
            </div>

            <label>Número</label><em>*</em>
            <div >
              <input className="inputt" type="email" name="number" onChange={this.handleInput}></input>
            </div>

            <label>Complemento</label>
            <div >
              <input className="inputt" type="email" name="complement" onChange={this.handleInput}></input>
            </div>

            <p style={{color: 'black'}}> Valor da Compra: </p>
            
            <p className="btn-secundaryy">
              <Link to="#">Calcular frete</Link>
              <em className="obrigatorio" style={{color: 'black'}}>{this.state.freteValor ? "Frete: " + this.state.freteValor : null}</em>
            </p>

            <p style={{color: 'black'}}> Total: </p>

            <p className="btn-secundaryy">
              <Link to="#">Confirmar</Link>
              <em className="obrigatorio">(* obrigatório)</em>
            </p>

          </form>

          {/*Alertas de senha ou email incorretos */}
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