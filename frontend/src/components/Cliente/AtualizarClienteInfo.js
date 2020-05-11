import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Info from "../Images/information.svg";
import Modal from "../Modal/Modal";
import api from '../API/api';

class AtualizarClienteInfo extends Component {

  state = {
    nome: this.props.user.nome,
    sobrenome: "",
    email: this.props.user.email,
    senha: "",
    confirmaremail: "",
    confirmarsenha: "",
    alert: false,
    alertEmail: false,
    alertPassword: false,
    alertMsg: "",
    prosseguir: false,
    alertConfirm: false,
    loginEmail: "",
    loginSenha: "",
    carregando: false,
  }

  //função que atualiza o state dos dados
  Submit = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  enviar = () => {
    if (this.state.email !== this.state.confirmaremail) return this.setState({ alert: true, alertMsg: "Emails não coincidem...", prosseguir: false })

    if (this.state.senha !== this.state.confirmarsenha) return this.setState({ alert: true, alertMsg: "Senhas não coincidem...", prosseguir: false })

    return this.setState({ prosseguir: true });
  }

  confirmar = async () => {
    if (this.state.loginEmail && this.state.loginSenha) {
      let data = {
        email: this.state.loginEmail,
        senha: this.state.loginSenha
      }

      this.setState({ carregando: true });

      await api.post('/Sign', data).then(async res => {
        if (res.data.error) return this.setState({ alertConfirm: true, alertMsg: res.data.error });

        if (res.data === "Email inválido!" || res.data === "Senha inválida!" || res.data === "Confirme seu email!") {
          return this.setState({ alertConfirm: true, alertMsg: res.data });

        } else {
          const token = localStorage.getItem("@stbl/client/user");


          try {
            if (this.props.user.nome !== this.state.nome) {
              await api.post('/updateName', { name: this.state.nome }, { headers: { authorization: token } }).then(res => {
                if (res.data.error) {
                  return this.setState({ alertConfirm: true, alertMsg: 'Erro inesperado... Tente novamente mais tarde' });

                }
              }).catch(error => {
                throw error;
              });

            }

            if (this.props.user.email !== this.state.email) {
              await api.post('/updateEmail', { newEmail: this.state.email }, { headers: { authorization: token } }).then(res => {
                if (res.data.error) {
                  return this.setState({ alertConfirm: true, alertMsg: 'Erro inesperado... Tente novamente mais tarde' });

                }
              }).catch(error => {
                throw error;
              });;
            }

            if(this.state.senha){
              await api.post('/trocarsenha', { email: this.props.user.email, newPass: this.state.senha }).then(res => {
                if (res.data.error) {
                  return this.setState({ alertConfirm: true, alertMsg: 'Erro inesperado... Tente novamente mais tarde' });
                }

                alert(`Enviamos uma mensagem para o email ${this.props.user.email}. Acesse o link para efetuar a alteração de senha`);
              }).catch(error => {
                throw error;
              });
            }

            alert('Alterações efetuadas com sucesso!');

          } catch (error) {
            console.log(error);
            return this.setState({ alertConfirm: true, alertMsg: 'Erro inesperado... Tente novamente mais tarde' });

          }


        }
      }).catch(error => {
        console.log(error);
        return this.setState({ alertConfirm: true, alertMsg: 'Erro inesperado... Tente novamente mais tarde' });

      });

      this.setState({ carregando: false });

    }

    else this.setState({ alert: false, alertConfirm: true, alertMsg: "Preencha todos os dados!" })
  }

  render() {
    return (
      <div className="cadastro container">
        <div className="bread">
          <Link to="/home" >Home</Link>
          <span className="arrow">/</span>
          <Link to="/cliente" >Minha conta</Link>
          <span className="arrow">/</span>
          <span>Atualizar</span>
        </div>

        <div className="criar-conta">
          <header className="page-header">
            <h1>Atualizar suas informações</h1>
          </header>
          <form>

            <label>Nome</label><em>*</em>
            <div>
              <input className="inputt" type="text" name="nome" value={this.state.nome} onChange={this.Submit}></input>
            </div>

            <label>Email</label>
            <em>*&nbsp;&nbsp;</em>
            <img name="informationemail"
              onMouseOver={() => this.setState({ alertConfirm: false, alert: false, alertPassword: false, alertEmail: true, alertMsg: "Insira um email válido!" })}
              onMouseOut={() => this.setState({ alertEmail: false })}
              className="information"
              id="info" width='12'
              height='12'
              src={Info}
              alt='info' />

            {this.state.alertEmail ? <p>{this.state.alertMsg}</p> : null}
            <div >
              <input className="inputt" type="email" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.Submit}></input>
            </div>

            <label>Confirmar Email</label><em>*</em>
            <div >
              <input className="inputt" type="email" name="confirmaremail" onChange={this.Submit}></input>
            </div>

            <label>Senha</label>
            <em>*&nbsp;&nbsp;</em>
            <img name="informationemail"
              onMouseOver={() => this.setState({ alertConfirm: false, alert: false, alertPassword: true, alertEmail: false, alertMsg: "A senha deve ter no mínimo 6 caracteres!" })}
              onMouseOut={() => this.setState({ alertPassword: false })}
              className="information"
              id="info" width='12'
              height='12'
              src={Info}
              alt='info' />

            {this.state.alertPassword ? <p>{this.state.alertMsg}</p> : null}
            <div>
              <input className="inputt" type="password" name="senha" onChange={this.Submit}></input>
            </div>

            <label>Confirmar Senha</label><em>*</em>
            <div>
              <input className="inputt" type="password" name="confirmarsenha" onChange={this.Submit}></input>
            </div>

            <p className="btn-secundaryy">
              <Link to="#" id="submit" onClick={() => this.enviar()} >Enviar</Link>
              <em className="obrigatorio">(* obrigatório)</em>
            </p>

            <Modal listenersId={["submit"]} actived={this.state.prosseguir}>
              <p>Os seguintes dados serão atualizados:</p>
              <ul>
                {this.state.nome !== this.props.user.nome ? <li>Nome</li> : null}
                {this.state.email !== this.props.user.email ? <li>Email</li> : null}
                {this.state.senha !== "" ? <li>Senha</li> : null}
              </ul>

              <p>Realize login com seus dados <b>atuais</b> para confirmar esta ação</p>

              <label>Email:</label>
              <div>
                <input className="inputt" type="email" name="loginEmail" onChange={this.Submit}></input>
              </div>

              <label>Senha:</label>
              <div>
                <input className="inputt" type="password" name="loginSenha" onChange={this.Submit}></input>
              </div>

              <p className="btn-secundaryy">
                <Link to="#" id="sumit" onClick={() => this.confirmar()}> {this.state.carregando ? "Enviando..." : "Confirmar"}</Link>
              </p>

              <div>
                {this.state.alertConfirm ?
                  <div className="alertacadastro">{this.state.alertMsg}
                    <Link className="fecharalerta" name="alerta2" onClick={() => this.setState({ alertConfirm: false })} to="#">X</Link>
                  </div> : null}
              </div>
            </Modal>

          </form>

          <div>
            {this.state.alert ?
              <div className="alertacadastro">{this.state.alertMsg}
                <Link className="fecharalerta" name="alerta2" onClick={() => this.setState({ alert: false })} to="#">X</Link>
              </div> : ""}
          </div>

        </div>
      </div>
    )
  }
}

export default AtualizarClienteInfo;