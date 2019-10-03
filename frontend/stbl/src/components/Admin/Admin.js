import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AdminInterface from './AdminInterface';
import ListarConsultas from './ListarConsultas';
import FormNovoProduto from './FormNovoProduto';
import ListaProdutoEditavel from './ListaProdutoEditavel';
import BlogEditor from './BlogEditor';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { Compras } from '../Produto/Dados'; //###### Dados provisórios

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
            - adminData: guardará dados que podem ser acessados pelo admin quando estiver logado
    */
    state = {
        adminLogin: false,
        interface: 1,
        adminData: null
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

    //Função para recuperação do estado de login no servidor
    checkServerLogin = () =>{
        // ################# Executar API aqui e chamar função após a renderização deste componente
        // ################# Essa função deve ter como callback a mudança do state admin login
        // ################# Função abaixo para tetes
        this.setState({
            adminLogin: false,
        })
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

    //######### Deve buscar dados de compras no servidor
    getAdminData = () =>{
        this.setState({
            adminData: Compras,
        })
    }

    componentDidMount(){
        this.checkServerLogin();
        this.getAdminData();
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
                    <AdminHeader logout={this.logout}/>
                    <AdminInterface callback={this.changeInterface}/>
                </div>
            )
        }

        //Caso da interface com lista de compras de usuário
        else if(this.state.interface === 2){
            return(
                <div className="login container">
                    <AdminHeader logout={this.logout}/>
                    <ListarConsultas compras={this.state.adminData}/>
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
                    <AdminHeader logout={this.logout}/>
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
                    <AdminHeader logout={this.logout}/>
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
                    <AdminHeader logout={this.logout}/>
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
                    <AdminHeader logout={this.logout}/>
                    <NotFound/>
                </div>
            )
        }
    }
}

export default Admin

const AdminHeader = (props) =>{
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
                    {
                        props.logout ?
                        <p className="btn-secundaryy" style={{float: "right", marginTop: "10px"}}>
                            <Link to="#" onClick={() => this.props.logout()}> &larr; Desconectar</Link>
                        </p> : null
                    }
                </header>
                <p className="title">Área exclusiva para administração da loja virtual 7 Tons de Beleza.</p>
                
            </div>
        </div>
    )
}