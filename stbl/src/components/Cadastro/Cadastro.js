import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Info from "../Images/information.svg"

class Cadastro extends Component {
  constructor() {
    super();
    
    this.state = {
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      confirmaremail: "",
      confirmarsenha: "",

      alerta1: false,
      alerta2: false,
      alerta3: false,
      alerta4:false,
      informationemail: false,
      informationsenha: false
    }

    this.Submit = this.Submit.bind(this);
  }

  Submit = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }

  CliqueCriarConta = () =>{
    console.log(this.state.nome)
    console.log(this.state.sobrenome)
    console.log(this.state.email)
    console.log(this.state.senha)
    console.log(this.state.confirmaremail)
    console.log(this.state.confirmarsenha)

    if(this.state.email !== this.state.confirmaremail){
      this.setState({
        alerta1: true
      })
    }
    if(this.state.senha !== this.state.confirmarsenha){
      this.setState({
        alerta2: true
      })
    }
    if(this.state.nome === "" || this.state.sobrenome === "" || this.state.email === "" || this.state.senha === ""){
      this.setState({
        alerta3: true
      })
    }

    /*ta dando ruim, undefined
    console.log(this.state.senha.lenght)
    if(this.state.senha.lenght < 6){

      this.setState({
        alerta4: true
      })
    }*/

    //if(email ja cadastrado)
  }

  fecharAlerta1 = () =>{
    this.setState({
      alerta1: false
    })
  }
  fecharAlerta2 = () =>{
    this.setState({
      alerta2: false
    })
  }
  fecharAlerta3 = () =>{
    this.setState({
      alerta3: false
    })
  }
  fecharAlerta4 = () =>{
    this.setState({
      alerta4: false
    })
  }

  InformationEmail = () =>{
    this.setState({
      informationemail: true
    })
  }
  InformationEmailOut = () =>{
    this.setState({
      informationemail: false
    })
  }

  InformationSenha = () =>{
    this.setState({
      informationsenha: true
    })
  }
  InformationSenhaOut = () =>{
    this.setState({
      informationsenha: false
    })
  }

  render() {
    return (
      <div className="cadastro container">

        <div className="bread">
          <Link to="/home" >Home</Link>
          <span className="arrow">/</span>
          <span>Criar conta</span>
        </div>
        <div className="criar-conta">
          <header className="page-header">
            <h1 className>Crie uma conta</h1>
          </header>
          <p className="title">Faça uma conta grátis na 7 Tons de Beleza.</p>
          <form>
            <label>Nome</label><em>*</em>
            <div>
              <input className="inputt" type="text" name="nome" onChange={this.Submit}></input>
            </div>

            <label>Sobrenome</label><em>*</em>
            <div>
              <input className="inputt" type="text" name="sobrenome" onChange={this.Submit} onChange={this.Submit}></input>
            </div>

            <label>Email</label><em>*&nbsp;&nbsp;</em><img onMouseOver={this.InformationEmail.bind(this)} onMouseOut={this.InformationEmailOut.bind(this)}  className="information" id="info" width='12' height='12' src={Info} alt='info' />
            {this.state.informationemail? <p>Insira um email válido! </p>: ""}
            <div >
              <input className="inputt" type="email" aria-describedby="emailHelp" name="email" onChange={this.Submit}></input>
            </div>

            <label>Confirmar Email</label><em>*</em>
            <div >
              <input className="inputt" type="email" name="confirmaremail" onChange={this.Submit}></input>
            </div>

            <label>Senha</label><em>*&nbsp;&nbsp;</em><img onMouseOver={this.InformationSenha.bind(this)} onMouseOut={this.InformationSenhaOut.bind(this)}  className="information" id="info" width='12' height='12' src={Info} alt='info' />
            {this.state.informationsenha? <p>A senha deve conter no mínimo 6 caracteres! </p>: ""}
            <div>
              <input className="inputt" type="password" name="senha" onChange={this.Submit}></input>
            </div>

            <label>Confirmar Senha</label><em>*</em>
            <div>
              <input className="inputt" type="password" name="confirmarsenha" onChange={this.Submit}></input>
            </div>

            <p className="btn-secundaryy">
              <a href="#" onClick={this.CliqueCriarConta.bind(this)}>Criar conta</a>
              <em className="obrigatorio">(* obrigatório)</em>
            </p>
            
            <div>
              {this.state.alerta1? <div className="alertacadastro">Por favor, confira seu email!<a className="fecharalerta" onClick={this.fecharAlerta1.bind(this)} href="#">X</a></div>: ""}
            </div>
            <div>
              {this.state.alerta2? <div className="alertacadastro">Por favor, confira sua senha!<a className="fecharalerta" onClick={this.fecharAlerta2.bind(this)} href="#">X</a></div>: ""}
            </div>
            <div>
              {this.state.alerta3? <div className="alertacadastro">Por favor, preencha todos os campos!<a className="fecharalerta" onClick={this.fecharAlerta3.bind(this)} href="#">X</a></div>: ""}
            </div>
            <div>
              {this.state.alerta4? <div className="alertacadastro">teste<a className="fecharalerta" onClick={this.fecharAlerta4.bind(this)} href="#">X</a></div>: ""}
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default Cadastro