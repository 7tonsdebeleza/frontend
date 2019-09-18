import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AdminInterface from './AdminInterface';
import ListarConsultas from './ListarConsultas';
import FormNovoProduto from './FormNovoProduto';
import ListaProdutoEditavel from './ListaProdutoEditavel';
import BlogEditor from './BlogEditor';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

import './Admin.css';

class Admin extends Component {

    /*
        State:
            - login: booleano indicando se há usuário logado
            - interface: inteiro para alterar qual tela será mostrada
                - 1: tela principal com todas as opções
                - 2: tela com histórico de compras
                - 3: tela para adição de novo produto
                - 4: tela para edição e pesquisa de produtos
                - 5: tela para edição na página do blog
    */
    state = {
        adminLogin: false,
        interface: 1
    }
    
    //Função que será herdada pela coponente login, login para admin diferenciado
    login = (user) => {
        // ################# Executar API aqui e passar função abaixo como callback
        this.changeLogin();
        console.log(user);
    }

    logout = () =>{
        // ################# Executar API aqui e passar função abaixo como callback
        this.changeLogin();
    }

    //Função para mudanças internas de login e logout
    changeLogin = () =>{
        this.setState({
            adminLogin: this.adminLogin ? false : true
        })
    }

    //Função para mudar componentes da tela, será herdada por outros componentes
    changeInterface = (screen) =>{
        this.setState({
            interface: screen
        })
    }


    render(){
        if(!this.state.adminLogin){
            return(
                <div className="login container">
                    <AdminHeader/>
                    <Login login={this.login}/>
                    {/* ######## Butão abaixo para testes sem o backend */}
                    <button onClick={() => this.changeLogin()}>Testes</button>
                </div>
            )
            
        }
        //Caso da interface princial:
        else if(this.state.interface === 1){
            return(
                <div className="login container">
                    <AdminHeader/>
                    <AdminInterface callback={this.changeInterface}/>
                </div>
            )
        }

        //Caso da interface com lista de compras de usuário
        else if(this.state.interface === 2){
            return(
                <div className="login container">
                    <AdminHeader/>
                    <ListarConsultas compras={this.props.consultas} />
                    <p className="btn-secundaryy">
                        <Link to="#" onClick={() => this.changeInterface(1)}> &larr; Retornar</Link>
                    </p>
                </div>
            )
        }

        //Caso da interface de adição de um novo produto
        else if(this.state.interface === 3){
            return(
                <div className="login container">
                    <AdminHeader/>
                    <FormNovoProduto />
                    <p className="btn-secundaryy">
                        <Link to="#" onClick={() => this.changeInterface(1)}> &larr; Retornar</Link>
                    </p>
                </div>
            )
        }

        //Caso da interface de adição de um novo produto
        else if(this.state.interface === 4){
            return(
                <div className="login container">
                    <AdminHeader/>
                    <ListaProdutoEditavel list={this.props.produtos} />
                    <p className="btn-secundaryy">
                        <Link to="#" onClick={() => this.changeInterface(1)}> &larr; Retornar</Link>
                    </p>
                </div>
            )
        }

        //Caso da interface de administração do blog
        else if(this.state.interface === 5){
            return(
                <div className="login container">
                    <AdminHeader/>
                    <BlogEditor public={this.props.publics} />
                    <p className="btn-secundaryy">
                        <Link to="#" onClick={() => this.changeInterface(1)}> &larr; Retornar</Link>
                    </p>
                </div>
            )
        }

        //Caso ocorra algum erro:
        else {
            return(
                <div className="login container">
                    <AdminHeader/>
                    <NotFound/>
                </div>
            )
        }
    }
}

export default Admin

const AdminHeader = () =>{
    return(
        <div className="login container">
            <div className="bread">
                <Link to="/home" >Home</Link>
                <span className="arrow">/</span>
                <span>Área Administrativa</span>
            </div>

            <div className="criar-conta login">
                <header className="page-header">
                    <h1>Área Administrativa</h1>
                </header>
                <p className="title">Área exclusiva para administração da loja virtual 7 Tons de Beleza.</p>
            </div>
        </div>
    )
}