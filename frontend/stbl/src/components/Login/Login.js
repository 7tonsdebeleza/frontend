import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Login extends Component {

  state = {
    email: null,
    senha: null,
    alert: null,
  }

  chamarAlerta = (msg) => {
    this.setState({
      alert: msg,
    }, () => 
    {
      let alertDiv = document.getElementById("alert-div");
      if (alertDiv) alertDiv.scrollIntoView();
    });
  }

  // função que atualiza o state do email e senha
  Submit = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  //função chamada clicando no botao Login
  CliqueLogin = () => {
    
    //teste para saber se existe algum campo vazio, se existir exibir um alerta
    if (this.state.email === "" || this.state.senha === ""
      || !this.state.email.toString().trim() || !this.state.senha.toString().trim())
      return this.chamarAlerta("Preencha todos os campos!");

    if (!this.verifyEmail(this.state.email)) return this.chamarAlerta("Formato de email inválido!");

    //Criando objeto de usuário a ser logado
    let user = {
      email: this.state.email,
      senha: this.state.senha
    }

    //Executando uma função herdada com os dados passados, res recebe retorno da função;
    this.props.login(user).then((res) => {
      console.log(res)
      if(res.error) return this.chamarAlerta("Erro inesperado... Tente novamento mais tarde!");
      if(res === "Email inválido!" || res === "Senha inválida!") return this.chamarAlerta(res);
    }).catch(e => {
      console.log(e);
      return this.chamarAlerta("Erro inesperado... Tente novamento mais tarde!");
    });
    
  }

  //função para fechar um alerta
  fecharAlerta = () => {
    this.setState({
      alert: null,
    });
  }

  //Função para verificar validade de email
  verifyEmail = (emailString) => {
    const userString = emailString.substring(0, emailString.indexOf("@"));
    const dom = emailString.substring(emailString.indexOf("@")+ 1, emailString.length);

    if ((userString.length >=1) && (dom.length >=3) && (userString.search("@")===-1) && (dom.search("@")===-1) && (userString.search(" ")===-1) && (dom.search(" ")===-1) && (dom.search(".")!==-1) &&(dom.indexOf(".") >=1) && (dom.lastIndexOf(".") < dom.length - 1)) {
      return true;
    } else return false;
  }


  render() {
    return (
      <div className="login container">
        <div className="bread">
          <Link to="/home" >Home</Link>
          <span className="arrow">/</span>
          <span>Login</span>
        </div>
        <div className="criar-conta login">
          <header className="page-header">
            <h1>Login</h1>
          </header>
          <p className="title">Entre na sua conta 7 Tons de Beleza.</p>
          <form>
            <label>Email</label><em>*&nbsp;&nbsp;</em>
            <div>
              <input className="inputt" type="email" aria-describedby="emailHelp" name="email" onChange={this.Submit}></input>
            </div>

            <label>Senha</label><em>*&nbsp;&nbsp;</em>
            <div>
              <input className="inputt" type="password" name="senha" onChange={this.Submit}></input>
            </div>

            <p className="btn-secundaryy">
              <Link to="#" onClick={this.CliqueLogin}>Entrar</Link>
              <em className="obrigatorio">(* obrigatório)</em>
            </p>

            <div>
              {this.state.alert? 
                <div id="alert-div" className="alertacadastro">{this.state.alert}
                  <Link className="fecharalerta" name="alerta2" onClick={()=>this.fecharAlerta()} to="#">X</Link>
                </div> : null}
            </div>
          </form>

        </div>
      </div>
    )
  }
}

export default Login