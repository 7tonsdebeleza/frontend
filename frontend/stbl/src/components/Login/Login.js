import React, { Component } from 'react'
import { Link } from "react-router-dom";
import api from "../API/api";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            senha: "",
            alerta1: false,
            alerta2: false,
            alerta3: false
        }

        this.Submit = this.Submit.bind(this);
        this.CliqueLogin = this.CliqueLogin.bind(this);
        this.fecharAlerta = this.fecharAlerta.bind(this);
    }

    //função que atualiza o state do email e senha
    Submit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async Login(){
        const response = await api.get('/logar',{
            email: this.state.email,
            password: this.state.senha
        })
    }

    //função chamada clicando no botao Login
    CliqueLogin = () => {

        console.log(this.state.email)
        console.log(this.state.senha)


        /* Caso em que o email está errado, exibir alerta
        if(this.state.email === errado){
            this.setState({
                alerta1: true
            })
        }
        */

        /* Caso em que a senha está errada, exibir alerta
        if(this.state.senha === errada){
            this.setState({
                alerta2: true
            })
        }
        */


        //teste para saber se existe algum campo vazio, se existir exibir um alerta
        if (this.state.email === "" || this.state.senha === "") {
            this.setState({
                alerta3: true
            })
        }

        this.Login()
    }


    //função para fechar um alerta
    fecharAlerta = (e) => {
        this.setState({
            [e.target.name]: false
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
                        <h1>Login</h1>
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
                            <Link to="#" onClick={this.CliqueLogin}>Entrar</Link>
                            <em className="obrigatorio">(* obrigatório)</em>
                        </p>

                        {
                        /*
                        <div>
                            {this.state.teste1? 
                            <div className="alertacadastro">Por favor, confira seu email!
                                <a className="fecharalerta" name="alerta2" onClick={this.fecharAlerta} to="#">X</a>
                            </div> : ""}
                        </div>

                        <div>
                            {this.state.teste2?
                            <div className="alertacadastro">Por favor, confira sua senha!
                                <Link className="fecharalerta" name="alerta2" onClick={this.fecharAlerta} to="#">X</a>
                            </div> : ""}
                        </div>
                        */
                        }

                        <div>
                            {this.state.alerta3 ? 
                            <div className="alertacadastro">Por favor, preencha todos os campos!
                                <Link className="fecharalerta" name="alerta3" onClick={this.fecharAlerta} to="#">X</Link>
                            </div> : ""}
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default Login