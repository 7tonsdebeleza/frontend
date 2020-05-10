import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Info from "../Images/information.svg";
import Modal from "../Modal/Modal";
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
    modal: false,

    carregando: false,
  }

  cadastrar = async () => {
    this.setState({ carregando: true });

    await api.post('/criarusuario', {
      nome: this.state.nome,
      sobrenome: this.state.sobrenome,
      email: this.state.email,
      password: this.state.senha
    }).then(res => {

      if (res.data.status === 200) {
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
          modal: true,
        });
      } 

    }).catch(e => {
      console.log(e);
      if(e.response.data.message === 'usuário já está cadastrado')
        return this.chamarAlerta("Este email já foi cadastrado!");
      else return this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");

    });

    this.setState({ carregando: false });

  }

  //função que atualiza o state dos dados
  Submit = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  CliqueCriarConta = () => {

    //verificando e exibindo alertas
    if (!this.state.nome || !this.state.sobrenome || !this.state.email || !this.state.senha
      || !this.state.nome.toString().trim() || !this.state.sobrenome.toString().trim()
      || !this.state.email.toString().trim() || !this.state.senha.toString().trim())
      return this.chamarAlerta("Preencha todos os dados");
    if (!this.verifyEmail(this.state.email))
      return this.chamarAlerta("Formato de email inválido!");
    if (this.state.senha.length < 6)
      return this.chamarAlerta("Sua senha deve ter no mínimo 6 caracteres!");
    if (this.state.email !== this.state.confirmaremail)
      return this.chamarAlerta("Emails não coincidem!");
    if (this.state.senha !== this.state.confirmarsenha)
      return this.chamarAlerta("Senhas não coincidem!");

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
    }, () => {
      let alertDiv = document.getElementById("alert-div");
      if (alertDiv) alertDiv.scrollIntoView();
    })
  }

  //Função para verificar validade de email
  verifyEmail = (emailString) => {
    const userString = emailString.substring(0, emailString.indexOf("@"));
    const dom = emailString.substring(emailString.indexOf("@") + 1, emailString.length);

    if ((userString.length >= 1) && (dom.length >= 3) && (userString.search("@") === -1) && (dom.search("@") === -1) && (userString.search(" ") === -1) && (dom.search(" ") === -1) && (dom.search(".") !== -1) && (dom.indexOf(".") >= 1) && (dom.lastIndexOf(".") < dom.length - 1)) {
      return true;
    } else return false;
  }

  //função para exibir e ocultar informações sobre como email e senha devem ser
  Information = (e) => {
    this.setState({
      [e.target.name]: this.state[e.target.name] ? false : true
    })
  }

  // função para controle do modal
  modalControl = () => {
    this.setState({ modal: this.state.modal ? false : true });
    return this.state.modal
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
              <input className="inputt" type="text" name="nome" onChange={this.Submit} value={this.state.nome} />
            </div>

            <label>Sobrenome</label><em>*</em>
            <div>
              <input className="inputt" type="text" name="sobrenome" onChange={this.Submit} value={this.state.sobrenome} />
            </div>

            <label>Email</label><em>*&nbsp;&nbsp;</em><img name="informationemail" onMouseOver={this.Information} onMouseOut={this.Information} className="information" id="info" width='12' height='12' src={Info} alt='info' />
            {this.state.informationemail ? <p>Insira um email válido! Enviaremos uma mensagem de confirmação para seu email. </p> : ""}
            <div >
              <input className="inputt" type="email" name="email" onChange={this.Submit} value={this.state.email} />
            </div>

            <label>Confirmar Email</label><em>*</em>
            <div >
              <input className="inputt" type="email" name="confirmaremail" onChange={this.Submit} value={this.state.confirmaremail} />
            </div>

            <label>Senha</label><em>*&nbsp;&nbsp;</em><img name="informationsenha" onMouseOver={this.Information} onMouseOut={this.Information} className="information" id="info" width='12' height='12' src={Info} alt='info' />
            {this.state.informationsenha ? <p>A senha deve conter no mínimo 6 caracteres! </p> : ""}
            <div>
              <input className="inputt" type="password" name="senha" onChange={this.Submit} value={this.state.senha} />
            </div>

            <label>Confirmar Senha</label><em>*</em>
            <div>
              <input className="inputt" type="password" name="confirmarsenha" onChange={this.Submit} value={this.state.confirmarsenha} />
            </div>

            <p className="btn-secundaryy">
              <Link to="#" onClick={() => this.CliqueCriarConta()} > {this.state.carregando ? "Cadastrando..." : "Criar conta"} </Link>
              <em className="obrigatorio">(* obrigatório)</em>
            </p>

          </form>

          {/*Alertas de senha ou email incorretos */}
          <div>
            {this.state.alert ?
              <div id="alert-div" className="alertacadastro">{this.state.alert}
                <Link className="fecharalerta" name="alerta1" onClick={() => this.fecharAlerta()} to="#">X</Link>
              </div> : null}
          </div>

          <Modal actived={this.state.modal} controller={this.modalControl} >
            <h1> Cadastro realizado com sucesso!</h1>
            <p> Para continuar, verifique sua caixa de entrada e <strong>confirme seu email</strong> pelo link que enviamos! Depois disso,  você poderá realizar o login e aproveitar nossos incríveis produtos!</p>
            <p className="btn-secundaryy">
              <Link to="/Login" onClick={this.CliqueCriarConta}>Login</Link>
            </p>
          </Modal>

        </div>
      </div>
    )
  }
}

export default Cadastro