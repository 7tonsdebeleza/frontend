import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import { Link } from "react-router-dom";
import api from "../API/api";

class Login extends Component {

  state = {
    email: null,
    senha: null,
    alert: null,

    novaSenha: null,
    confirmarNovaSenha: null,
    modal: false,
    alertModal: null,
    modalSucess: false,
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

  // Função para verificar validade de email
  verifyEmail = (emailString) => {
    const userString = emailString.substring(0, emailString.indexOf("@"));
    const dom = emailString.substring(emailString.indexOf("@")+ 1, emailString.length);

    if ((userString.length >=1) && (dom.length >=3) && (userString.search("@")===-1) && (dom.search("@")===-1) && (userString.search(" ")===-1) && (dom.search(" ")===-1) && (dom.search(".")!==-1) &&(dom.indexOf(".") >=1) && (dom.lastIndexOf(".") < dom.length - 1)) {
      return true;
    } else return false;
  }

  chamarEsqueceSenha = () => {
    const { email } = this.state;

    if(!this.state.email || !this.state.email.toString().trim())
      return this.chamarAlerta("Preecha o campo de email!");

    if(!this.verifyEmail(email))
      return this.chamarAlerta("Formato de email inválido!");
    else {
      this.setState({ modal: true });
    }
    
  }

  recuperarSenha = () =>{
    const { novaSenha, confirmarNovaSenha } = this.state;

    if(!novaSenha || !confirmarNovaSenha || !novaSenha.toString().trim()
      || !confirmarNovaSenha.toString().trim())
      return this.chamarAlertaModal("Preencha todos os campos!");

    if(novaSenha.length < 6)
      return this.chamarAlertaModal("Sua senha deve possuir no mínimo 6 caracteres");

    if(novaSenha !== confirmarNovaSenha)
      return this.chamarAlertaModal("A confirmação de senha não coincide!");

    const req = { email: this.state.email, newPass: novaSenha };
    api.post('/updatePassword', req).then(res => {
      console.log("carregando...")
      if(res.data.email) return this.setState({ modal: false, modalSucess: true });

      else if(res.data === "Email não cadastrado!") return this.chamarAlertaModal("Email não cadastrado!");

      else this.chamarAlertaModal("Erro inesperado... Tente novament mais tarde!");

    }).catch(e => {
      console.log(e);
      return this.chamarAlertaModal("Erro inesperado... Tente mais tarde!");

    })

  }

  fecharAlertaModal = () => {
    this.setState({
      alertModal: null,
    });

  }

  chamarAlertaModal = (msg) => {
    this.setState({
      alertModal: msg,
    }, () => 
    {
      let alertDiv = document.getElementById("alert-div-modal");
      if (alertDiv) alertDiv.scrollIntoView();
    });

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
              <input className="inputt" type="email" name="email" onChange={this.Submit} value={this.state.email} ></input>
            </div>

            <label>Senha</label><em>*&nbsp;&nbsp;</em>
            <div>
              <input className="inputt" type="password" name="senha" onChange={this.Submit} value={this.state.senha}></input>
            </div>

            {!this.props.admin ? <p onClick={()=> this.chamarEsqueceSenha()}> <Link to="#"> Esqueceu sua senha? </Link></p> : null}
            
            <p className="btn-secundaryy">
              <Link to="#" onClick={this.CliqueLogin}>Entrar</Link>
              <em className="obrigatorio">(* obrigatório)</em>
            </p>

            <div>
              { this.state.alert? 
                <div id="alert-div" className="alertacadastro">{this.state.alert}
                  <Link className="fecharalerta" name="alerta2" onClick={()=>this.fecharAlerta()} to="#">X</Link>
                </div> : null
              }
            </div>
          </form>

          <Modal actived={this.state.modal} controller={()=>{ return false}}>
            <h1>Deseja recuperar a senha do email abaixo?</h1>
            <p> <em> {this.state.email} </em> </p>
            <p> Te enviaremos um email automático para recuperação de senha! </p>

            <label>Nova senha</label>
            <div>
              <input className="inputt" type="password" name="novaSenha" onChange={this.Submit} value={this.state.novaSenha}></input>
            </div>

            <label>Confirmar nova senha</label>
            <div>
              <input className="inputt" type="password" name="confirmarNovaSenha" onChange={this.Submit} value={this.state.confirmarNovaSenha}></input>
            </div>

            <p className="btn-secundaryy">
              <Link to="#" onClick={() => this.recuperarSenha()} >Confirmar</Link>
            </p>

            { this.state.alertModal ? 
              <div id="alert-div-modal" className="alertacadastro">{this.state.alertModal}
                <Link className="fecharalerta" name="alerta2" onClick={()=>this.fecharAlertaModal()} to="#">X</Link>
              </div> : null
            }

          </Modal>

          <Modal actived={this.state.modalSucess} controller={()=>{ return false}}>
            <h1> Te enviamos um email de confirmação! </h1>
            <p> Acesse seu email para finalizar o processo de recuperação de senha! </p>
          </Modal>

        </div>
      </div>
    )
  }
}

export default Login