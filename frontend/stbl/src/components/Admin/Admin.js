import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Search from '../Images/iconsearch2.png';
import Plus from '../Images/plus.svg';
import SettingIcon from '../Images/settings.svg';
import Pencil from '../Images/pencil.svg';
import ListarConsultas from './ListarConsultas';
import FormNovoProduto from './FormNovoProduto';
import ListaProdutoEditavel from './ListaProdutoEditavel';
import BlogEditor from './BlogEditor';
import Login from '../Login/Login';

import './Admin.css';


class Admin extends Component {
    state = {
        divConsultas: false,
        divNovoProduto: false,
        divEditarProduto: false,
        divBlog: false,

        AdmLogado: false
    }

    //State determina se divs com forms ficaram visíveis
    //Função mudar estados das divs de forms:

    expandirDiv = (target) => {
        this.setState({
            [target]: this.state[target] ? false : true
        })
    }

    render() {

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
                    </header>
                    <p className="title">Área exclusiva para administração da loja virtual 7 Tons de Beleza.</p>
                </div>

                {this.state.AdmLogado ?

                    <div>

                        <div className='itens-container'>
                            <div className='admin-item' onClick={() => { this.expandirDiv('divConsultas') }}>
                                <img src={Search} width='40' height='40' alt='seach icon' />
                                <span>CONSULTAR COMPRAS</span>
                            </div>

                            <div style={{
                                display: this.state.divConsultas ? 'block' : 'none'
                            }}>
                                <ListarConsultas compras={this.props.consultas} />
                            </div>

                            <div className='admin-item' onClick={() => { this.expandirDiv('divNovoProduto') }}>
                                <img src={Plus} width='40' height='40' alt='seach icon' />
                                <span>ADICIONAR NOVO PRODUTO</span>
                            </div>

                            <div style={{
                                display: this.state.divNovoProduto ? 'block' : 'none'
                            }}>
                                <FormNovoProduto />
                            </div>

                            <div className='admin-item' onClick={() => { this.expandirDiv('divEditarProduto') }}>
                                <img src={SettingIcon} width='40' height='40' alt='seach icon' />
                                <span>EDITAR PRODUTOS</span>
                            </div>

                            <div style={{
                                display: this.state.divEditarProduto ? 'block' : 'none'
                            }}>
                                <ListaProdutoEditavel list={this.props.produtos} />
                            </div>

                            <div className='admin-item' onClick={() => { this.expandirDiv('divBlog') }}>
                                <img src={Pencil} width='40' height='40' alt='seach icon' />
                                <span>BLOG</span>
                            </div>

                            <div style={{
                                display: this.state.divBlog ? 'block' : 'none'
                            }}>

                                <BlogEditor public={this.props.publics} />

                            </div>
                        </div>

                    </div>

                    :

                    <Login />

                }


            </div>
        )
    }
}

export default Admin;