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
            - adminlogin: guarda objeto de usuário logado
            - interface: inteiro para alterar qual tela será mostrada
                - 1: tela principal com todas as opções
                - 2: tela com histórico de compras
                - 3: tela para adição de novo produto
                - 4: tela para edição e pesquisa de produtos
                - 5: tela para edição na página do blog
            - adminData: guardará dados do bd que podem ser acessados pelo admin quando estiver logado
    */
    state = {
        adminLogin: null,
        interface: 1,
        adminData: null
    }
    
    //Função que será herdada pela coponente login, login para admin diferenciado
    login = (user) => {
        // ################# Executar API aqui para conectar no bd e passar função abaixo como callback
        this.setState({adminLogin: user});
        localStorage.setItem("@stbl/userNome", user.nome);
        localStorage.setItem("@stbl/userEmail", user.email);
    }

    logout = () =>{
        // ################# Executar API aqui para conectar no bd e passar função abaixo como callback
        this.setState({adminLogin: null});
        localStorage.removeItem("@stbl/userNome");
        localStorage.removeItem("@stbl/userEmail");
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

    componentDidMount = () =>{
        let user = {
            nome: localStorage.getItem("@stbl/userNome"),
            email: localStorage.getItem("@stbl/userEmail"),
        };
        if(user.nome !== null) this.setState({adminLogin: user})
    }

    render(){
        if(this.state.adminLogin === null){
            return(
                <div className="login container">
                    <AdminHeader/>
                    <Login login={this.login}/>

                    {/* ######## Butão abaixo para testes sem o backend */}
                    <button onClick={() => this.login({
                        email:"teste@teste.com",
                        nome: "testes",
                    })}>Testes</button>
                </div>
            )
            
        }
        //Caso da interface princial:
        else if(this.state.interface === 1){
            return(
                <div className="login container">
                    <AdminHeader user={this.state.adminLogin} logout={this.logout}/>
                    <AdminInterface callback={this.changeInterface}/>
                </div>
            )
        }

        //Caso da interface com lista de compras de usuário
        else if(this.state.interface === 2){
            return(
                <div className="login container">
                    <AdminHeader user={this.state.adminLogin} logout={this.logout}/>
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
                    <AdminHeader user={this.state.adminLogin} logout={this.logout}/>
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
                    <AdminHeader user={this.state.adminLogin} logout={this.logout}/>
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
                    <AdminHeader user={this.state.adminLogin} logout={this.logout}/>
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
                    <AdminHeader user={this.state.adminLogin} logout={this.logout}/>
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
                            <button onClick={() => props.logout()}> &larr; Desconectar</button>
                        </p> : null
                    }
                </header>
                <p className="title">
                    {props.user ? ("Bem vindo " + props.user.nome + "! ") : null}
                    Área exclusiva para administração da loja virtual 7 Tons de Beleza.
                </p>
                
            </div>
        </div>
    )
}