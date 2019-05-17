import React, { Component } from 'react'
import Logo from '../Images/logo.png';
import Search from '../Images/iconsearch.png';
import Search2 from '../Images/iconsearch2.png';
import Cart from '../Images/carrinho.png';
import Login from '../Images/user.png';
import Carrinho from '../Carrinho/Carrinho'

import { Link } from "react-router-dom";

class NavBarMobile extends Component {

    state = {
        pesquisa: '',
    }

    ClickMenuMobile = () => {
        const modal = document.getElementById("menumobile");
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id === "menumobile" || e.target.className === 'fechar-menu') {
                modal.classList.remove('mostrar'); //toggle
            }
        })

    }

    ClickLoginMobile = () => {
        const modal = document.getElementById("menuusermobile");
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id === "menuusermobile" || e.target.className === 'fechar-menu') {
                modal.classList.remove('mostrar'); //toggle
            }
        })
    }

    CliqueLink = () => {
        const modal = document.getElementById("menumobile");
        modal.classList.remove('mostrar');
    }

    CliqueLinkUser = () => {
        const modal = document.getElementById("menuusermobile");
        modal.classList.remove('mostrar');
    }

    PesquisaNavEsc = () => {
        const pesq = document.getElementById("searchh");
        pesq.classList.toggle('mostrarpesq');
        const imgpesq = document.getElementById("img-pesquisa3");
        imgpesq.classList.toggle('mostrar');
    }

    aparecerCarrinho = () => {
        const carrinho = document.getElementById("divmodalcarrinho");
        carrinho.classList.add('mostrar');
        carrinho.addEventListener('click', (e) => {
            if (e.target.id === "divmodalcarrinho") {
                carrinho.classList.remove('mostrar'); //toggle
            }


        })

    }

    pesquisa = (e) => {
        this.setState({
            pesquisa: e.target.value
        })
    }


    componentDidMount() {
        //Chamar pesquisa após 'enter'
        let input = document.getElementById("pesqMobile");

        input.addEventListener("keyup", (event) => {
            // codigo 13 para enter
            if (event.keyCode === 13) {
              // Clicando no icone de lupa de pesquisa
              this.props.pesquisar(this.state.pesquisa);
            }
        });

        //Navbar fixada com scroll
        window.addEventListener("scroll", () => {
            let navbarPrinc = document.getElementById("mobile-show");
            let posicaoy = window.pageYOffset;
            if (posicaoy > 0) {
                navbarPrinc.classList.add("mobile-show-fixed");
            }
            if (posicaoy === 0) {
                navbarPrinc.classList.remove("mobile-show-fixed");
            }
        });
    }

    render() {
        
        return (
            <div className="mobile-show" id="mobile-show">

                <nav className='navbar navbar-dark bg-dark'>

                    <div className='nav-item'>
                        <div className='nav-link1'>
                            <button className="menuhamburguer navbar-toggler" onClick={this.ClickMenuMobile.bind(this)} type="button">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>


                    <div className='nav-item'>
                        <div className='nav-link1'>
                            <Link to="/home"><img className='d-inline-block align-top' width='30' height='30' src={Logo} alt='logo' /></Link>
                        </div>
                    </div>


                    <div className='nav-item'>
                        <div className='nav-link1'>
                            <ul className="nav">
                                <li>
                                    <div className="imgpesquisa imguser nav-link1"><img onClick={this.ClickLoginMobile.bind(this)} className="imguser" id="imguser" width='20' height='20' src={Login} alt='userlogin' /></div>
                                </li>
                                <li>
                                    <div className="imgpesquisa nav-link1">
                                        <img onClick={this.PesquisaNavEsc.bind(this)} className="imgpesq" id="imgpesquisa" width='20' height='20' src={Search} alt='pesquisa' />
                                    </div>
                                </li>

                                <li>
                                    <div className="imgcarrinho nav-link1">
                                        <img className="imgcarrinho" id="imgcarrinho" width='20' height='20' src={Cart} alt='carrinho' onClick={() => this.aparecerCarrinho()} />

                                        <span style={{
                                            padding: 5,
                                            backgroundColor: '#c36854',
                                            color: '#f7f7f8',
                                            borderRadius: '50%',
                                            top: '50%',
                                            right: '50%',
                                            marginLeft: '-15%'

                                        }}>
                                            &nbsp;{this.props.qtdCarrinho}&nbsp;
                                        </span>


                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </nav>

                <div id="searchh" className="pesquisa nav-link">
                    <input className="buscar" style={{ width: '100%' }} id="pesqMobile" type="search" placeholder="Buscar" aria-label="Search" onChange={this.pesquisa} value={this.state.pesquisa}/>
                </div>

                <img onClick={() => { this.props.pesquisar(this.state.pesquisa) }} className="img-pesq3" id="img-pesquisa3" width='28' height='29' src={Search2} alt='pesquisa' />

                {/* menu mobile*/}

                <div className="modal-container-menumobile" id="menumobile">
                    <button className="fechar-menu">X</button>
                    <div className="modal-menumobile">

                        <ul className="nav-item" onClick={this.CliqueLink.bind(this)}>
                            <li className="item" id="item"><Link to="/home">Home</Link></li>
                            <li className="item" id="item"><Link to="/lojavirtual">Loja Virtual</Link></li>
                            <li className="item" id="item"><Link to="/marcas">Marcas</Link></li>
                            <li className="item" id="item"><Link to="/faq">FAQ</Link></li>
                            <li className="item" id="item"><Link to="/blog">Dicas de Beleza</Link></li>
                        </ul>
                    </div>
                </div>

                {/* menu login mobile*/}

                <div className="modal-container-menumobile" id="menuusermobile">
                    <button className="fechar-menu">X</button>
                    <div className="modal-menumobile">

                        <ul className="nav-item" onClick={this.CliqueLinkUser.bind(this)}>
                            <li className="item" id="item"><Link to="/login">Login</Link></li>
                            <li className="item" id="item"><Link to="/cadastro">Criar uma conta</Link></li>
                            <li className="item" id="item"><Link to="/">Minha conta</Link></li>
                            <li className="item" id="item"><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="divmodalcarrinho" id="divmodalcarrinho">
                    <div className="modalcarrinho" id="modalcarrinho">
                        <Carrinho dados={this.props.dados} atualizarQtdCarrinho={this.props.atualizarQtdCarrinho} removerCarrinho={this.props.removerCarrinho} botaoCarrinho={this.props.botaoCarrinho} naNavbar/>
                    </div>
                </div>
            </div>
        )

    }
}


export default NavBarMobile;