import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Info from "../Images/information.svg";
import api from "../API/api";

class Cadastro extends Component {

  state = {
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmaremail: "",
    confirmarsenha: "",

    alert: false,
    alertMsg: "",
    informationemail: false,
    informationsenha: false,
  }

  async cadastrar() {
    api.post('/criarusuario', {
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      email: this.state.email,
      password: this.state.senha
    }).then(res => {
      console.log(res)
      alert("Cadastro realizado!"); //Melhorar UX

      this.setState({
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        confirmaremail: "",
        confirmarsenha: "",

        alertMsg: "",
        informationemail: false,
        informationsenha: false,
      });

    }).catch(e => {
      console.log(e);
      this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!")

    })

  }

  //função que atualiza o state dos dados
  Submit = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  CliqueCriarConta = () => {

    //verificando e exibindo alertas
    if (this.state.nome === "" || this.state.sobrenome === "" || this.state.email === "" || this.state.senha === "") return this.chamarAlerta("Preencha todos os dados")
    if(!this.verifyEmail(this.state.email)) return this.chamarAlerta("Formato de email inválido!")
    if(this.state.senha.length < 6) return this.chamarAlerta("Sua senha deve ter no mínimo 6 caracteres!")
    if (this.state.email !== this.state.confirmaremail) return this.chamarAlerta("Emails não coincidem!")
    if (this.state.senha !== this.state.confirmarsenha) return this.chamarAlerta("Senhas não coincidem!")

    return this.cadastrar();
  }

  //função para fechar alertas
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

  //Função para verificar validade de email
  verifyEmail = (emailString) => {
    const userString = emailString.substring(0, emailString.indexOf("@"));
    const dom = emailString.substring(emailString.indexOf("@")+ 1, emailString.length);

    if ((userString.length >=1) && (dom.length >=3) && (userString.search("@")===-1) && (dom.search("@")===-1) && (userString.search(" ")===-1) && (dom.search(" ")===-1) && (dom.search(".")!==-1) &&(dom.indexOf(".") >=1) && (dom.lastIndexOf(".") < dom.length - 1)) {
      return true;
    } else return false;
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
          <p className="title">Cadastre uma conta grátis na 7 Tons de Beleza.</p>

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

export default Cadastro