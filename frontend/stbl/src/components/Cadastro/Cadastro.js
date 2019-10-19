import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Info from "../Images/information.svg";
import api from "../API/api";

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
      informationemail: false,
      informationsenha: false,
      
      redirect: "#"
    }

    this.Submit = this.Submit.bind(this);
    this.fecharAlerta = this.fecharAlerta.bind(this);
    this.Information = this.Information.bind(this);
    this.CliqueCriarConta = this.CliqueCriarConta.bind(this);
  }

  async cadastrar() {
    const response = await api.post('/criarusuario', {
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      email: this.state.email,
      password: this.state.senha
    })

    console.log(response.data)

    alert("Cadastro realizado!");

    this.setState({
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      confirmaremail: "",
      confirmarsenha: "",

      alerta1: false,
      alerta2: false,
      alerta3: false,
      alerta4: false,
      informationemail: false,
      informationsenha: false,
    });

  }

  //função que atualiza o state dos dados
  Submit = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  CliqueCriarConta = () => {
    let verificador = true;

    console.log(this.state.nome)
    console.log(this.state.sobrenome)
    console.log(this.state.email)
    console.log(this.state.senha)
    console.log(this.state.confirmaremail)
    console.log(this.state.confirmarsenha)


    //verificando e exibindo alertas
    if (this.state.email !== this.state.confirmaremail) {
      verificador = false
      this.setState({
        alerta1: true
      })
    }
    if (this.state.senha !== this.state.confirmarsenha) {
      verificador = false
      this.setState({
        alerta2: true
      })
    }

    if (this.state.nome === "" || this.state.sobrenome === "" || this.state.email === "" || this.state.senha === "") {
      verificador = false
      this.setState({
        alerta3: true
      })
    }

    if (verificador === true) {
      this.cadastrar()
    }
  }

  //função para fechar alertas
  fecharAlerta = (e) => {
    this.setState({
      [e.target.name]: false
    })
  }


  //função para exibir e ocultar informações sobre como email e senha devem ser
  Information = (e) => {
    this.setState({
      [e.target.name]: this.state[e.target.name] ? false : true
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
            <h1>Crie uma conta</h1>
          </header>
          <p className="title">Faça uma conta grátis na 7 Tons de Beleza.</p>

          <form>

            <label>Nome</label><em>*</em>
            <div>
              <input className="inputt" type="text" name="nome" onChange={this.Submit}></input>
            </div>

            <label>Sobrenome</label><em>*</em>
            <div>
              <input className="inputt" type="text" name="sobrenome" onChange={this.Submit}></input>
            </div>

            <label>Email</label><em>*&nbsp;&nbsp;</em><img name="informationemail" onMouseOver={this.Information} onMouseOut={this.Information} className="information" id="info" width='12' height='12' src={Info} alt='info' />
            {this.state.informationemail ? <p>Insira um email válido! </p> : ""}
            <div >
              <input className="inputt" type="email" aria-describedby="emailHelp" name="email" onChange={this.Submit}></input>
            </div>

            <label>Confirmar Email</label><em>*</em>
            <div >
              <input className="inputt" type="email" name="confirmaremail" onChange={this.Submit}></input>
            </div>

            <label>Senha</label><em>*&nbsp;&nbsp;</em><img name="informationsenha" onMouseOver={this.Information} onMouseOut={this.Information} className="information" id="info" width='12' height='12' src={Info} alt='info' />
            {this.state.informationsenha ? <p>A senha deve conter no mínimo 6 caracteres! </p> : ""}
            <div>
              <input className="inputt" type="password" name="senha" onChange={this.Submit}></input>
            </div>

            <label>Confirmar Senha</label><em>*</em>
            <div>
              <input className="inputt" type="password" name="confirmarsenha" onChange={this.Submit}></input>
            </div>

            <p className="btn-secundaryy">
              <Link to="#" onClick={this.CliqueCriarConta}>Criar conta</Link>
              <em className="obrigatorio">(* obrigatório)</em>
            </p>

          </form>

          {/*Alertas de senha ou email incorretos */}
          <div>
              {this.state.alerta1 ?
                <div className="alertacadastro">Por favor, confira seu email!
                  <Link className="fecharalerta" name="alerta1" onClick={this.fecharAlerta} to="#">X</Link>
                </div> : ""}
            </div>
            <div>
              {this.state.alerta2 ?
                <div className="alertacadastro">Por favor, confira sua senha!
              <Link className="fecharalerta" name="alerta2" onClick={this.fecharAlerta} to="#">X</Link>
                </div> : ""}
            </div>
            <div>
              {this.state.alerta3 ?
                <div className="alertacadastro">Por favor, preencha todos os campos!
              <Link className="fecharalerta" name="alerta3" onClick={this.fecharAlerta} to="#">X</Link>
                </div> : ""}
            </div>
            
        </div>
      </div>
    )
  }
}

export default Cadastro