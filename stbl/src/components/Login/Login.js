import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            senha: "",

            alerta3: false,
        }

        this.Submit = this.Submit.bind(this);
    }
    Submit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    CliqueCriarConta = () => {

        console.log(this.state.email)
        console.log(this.state.senha)


        if (this.state.email === "" || this.state.senha === "") {
            this.setState({
                alerta3: true
            })
        }

        //if(senha ou email errado)
    }

    fecharAlerta3 = () => {
        this.setState({
            alerta3: false
        })
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
                        <h1 className>Login</h1>
                    </header>
                    <p className="title">Entre na sua conta 7 Tons de Beleza.</p>
                    <form>

                        <label>Email</label><em>*&nbsp;&nbsp;</em>
                        <div >
                            <input className="inputt" type="email" aria-describedby="emailHelp" name="email" onChange={this.Submit}></input>
                        </div>

                        <label>Senha</label><em>*&nbsp;&nbsp;</em>
                        <div>
                            <input className="inputt" type="password" name="senha" onChange={this.Submit}></input>
                        </div>

                        <p className="btn-secundaryy">
                            <Link to="#" onClick={this.CliqueCriarConta.bind(this)}>Entrar</Link>
                            <em className="obrigatorio">(* obrigatório)</em>
                        </p>

                        {/*<div>
              {this.state.teste1? <div className="alertacadastro">Por favor, confira seu email!<a className="fecharalerta" onClick={this.fecharAlerta1.bind(this)} href="#">X</a></div>: ""}
            </div>
            <div>
              {this.state.teste2? <div className="alertacadastro">Por favor, confira sua senha!<a className="fecharalerta" onClick={this.fecharAlerta2.bind(this)} href="#">X</a></div>: ""}
            </div>
            */}
                        <div>
                            {this.state.alerta3 ? <div className="alertacadastro">Por favor, preencha todos os campos!<Link className="fecharalerta" onClick={this.fecharAlerta3.bind(this)} to="#">X</Link></div> : ""}
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default Login