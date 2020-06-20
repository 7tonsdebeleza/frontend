import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import AdminInterface from './AdminInterface';
import ListarConsultas from './ListarConsultas';
import FormNovoProduto from './FormNovoProduto';
import ListaProdutoEditavel from './ListaProdutoEditavel';
import BlogEditor from './Blog/BlogEditor';
import Login from '../Login/Login';
import { Compras } from '../Produto/Dados'; //###### Dados provisórios
import api from "../API/api";

import './Admin.css';

class Admin extends Component {

    /*
        State:
            - adminlogin: guarda objeto de usuário logado
            - adminData: guardará dados do bd que podem ser acessados pelo admin quando estiver logado
    */
    state = {
        adminLogin: null,
        adminData: null
    }

    //Função que será herdada pela coponente login, login para admin diferenciado
    login = async (user) => {
        //Fazendo login do banco de dados
        return await api.post("/Signadmin", user).then(res => {
            //Caso login não funcione
            console.log(res)
            if (res.data.error) return res.data.error
            if (res.data === "Email inválido!" || res.data === "Senha inválida!") {
                return res.data;
            } else {
                //Caso funcione, salvando para permanencia do login
                localStorage.setItem('@stbl/admin/user', res.data.token);

                //Autenticando token
                //this.auth(res.data.token)
                //Salvando dados do usuário
                this.setState({ adminLogin: res.data.user })

                return true;
            }
        }).catch(error => {
            console.log(error);
            return 'erro inespereado... tente novamente mais tarde!';
        })


    }

    //Função de autenticação de token
    auth = (token) => {
        console.log("Autenticando...")
        api.post('/Authadmin', null, { headers: { authorization: token } }).then(res => {
            if (res.data.error) {
                //Caso autenticação falhe, usuário será deslogado para gerar novo token
                console.log('erro aqui');
                console.log(res.data.error)
                this.logout();
                return 'Erro inesperado... tente mais tarde';
            } else {
                //Salvando dados do usuário
                this.setState({ adminLogin: res.data.user })
            }
        }).catch(error => {
            console.log(error);
            return 'Erro inesperado... tente mais tarde';
        })
    }


    logout = () => {
        // Removendo objeto do state e permanência do navegador
        this.setState({ adminLogin: null });
        localStorage.removeItem("@stbl/admin/user");
    }


    //######### Deve buscar dados de compras no servidor
    getAdminData = () => {
        this.setState({
            adminData: Compras,
        })
    }

    componentWillMount = () => {
        //Verificando se há usuário para ser recuperado no login permanete
        let user = localStorage.getItem("@stbl/admin/user");
        if (user !== null) {
            //auteticando token guardada
            this.auth(user)

            //########### Buscando dados acessíveis apenas pelo admin
            this.getAdminData();
        }

        window.scrollTo(0, 0);

    }

    render() {
        let admin = this.state.adminLogin;

        return (
            <BrowserRouter>
                <div className="login container">

                    <AdminHeader user={admin} logout={admin ? this.logout : null} />
                    {!admin ? <Redirect onUpdate={() => window.scrollTo(0, 0)} to="/admin7tons" /> : null}
                    <Switch>
                        <Route exact onUpdate={() => window.scrollTo(0, 0)} path="/admin7tons" render={() => !admin ? <Login login={this.login} admin /> : <AdminInterface />} />

                        <Route exact path="/admin7tons/consulta" render={() => <ListarConsultas compras={this.state.adminData} />} />

                        <Route exact path="/admin7tons/novoproduto" component={FormNovoProduto} />

                        <Route exact path="/admin7tons/editarprodutos" render={() => <ListaProdutoEditavel list={this.props.produtos} />} />

                        <Route exact path="/admin7tons/blog" render={() => <BlogEditor public={this.props.publics} />} />
                    </Switch>

                </div>
            </BrowserRouter>
        )

    }
}

export default Admin

const AdminHeader = (props) => {
    return (
        <div className="login container">
            <div className="bread">
                <Link to="/home" >Home</Link>
                <span className="arrow">/</span>
                <span>Área Administrativa</span>
            </div>
            <div className="criar-conta login">
                <header className="page-header">
                    <h1>Área Administrativa</h1>
                    {
                        props.logout ?
                            <p className="btn-secundaryy" style={{ float: "right", marginTop: "10px" }}>
                                <button onClick={() => props.logout()}> &larr; Desconectar</button>
                            </p> : null
                    }
                </header>
                <p className="title">
                    {props.user ? (<div>Bem vindo(a) <b>{props.user.nome}</b>! </div>) : null}
                    Área exclusiva para administração da loja virtual 7 Tons de Beleza.
                </p>

            </div>
        </div>
    )
}