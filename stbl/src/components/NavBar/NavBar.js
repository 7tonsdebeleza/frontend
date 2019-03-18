import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../Images/logo.png';
import Search from '../Images/iconsearch.png';
import Carrinho from '../Images/carrinho.png'

class NavBar extends Component {
    constructor() {
        super();

    }

    PesquisaNavEsc = () => {
        const pesq = document.getElementById("search");
        pesq.classList.toggle('mostrarpesq');
    }
    




    render() {
        //função para esconder a navbar principal e aparecer a secundaria
        window.addEventListener("scroll", () => {
            let navbarPrinc = document.getElementById("navbarPrincipal");
            let navbarSecun = document.getElementById("navbarEscondida");
            let navbarAux = document.getElementById("navbarAux");
            let navbarTop = navbarPrinc.getBoundingClientRect().top;
            let navbarAuxTop = navbarAux.getBoundingClientRect().top;
            if (navbarTop < 0) {
                navbarPrinc.classList.add("esconde");
                navbarSecun.classList.add("aparece");
            }
            if (navbarAuxTop > -90) {
                navbarPrinc.classList.remove("esconde");
                navbarSecun.classList.remove("aparece");
            }
        });


        return (
            <div className="mobile-hide discreet-arimo" style={{ backgroundColor: '#f7f7f8' }}>
                {/*Parte inicial da navbar: logo, barra de pesquisa, numero de contato*/}
                <div id="navbarAux">
                    <div className='container'>

                        <nav className='navbar'>
                            <div className='navbar-brand'>
                                <Link to="/home"><img className='d-inline-block align-top' width='100' height='100' src={Logo} alt='logo' /></Link>
                            </div>

                            <div className='nav justify-content-end'>

                                <div className='nav flex-column text-right'>
                                    <div className='nav-item'>
                                        <nav className='nav justify-content-end'>
                                            <div className='nav-item'>
                                                <p className='nav-link'>
                                                    Entre em contato (1800) 000 8808
                                    </p>

                                            </div>
                                            <div className='nav-item'>
                                                <div className='nav-link'>
                                                    <input class="form-control" type="search" placeholder="buscar" aria-label="Search" />
                                                </div>
                                            </div>
                                        </nav>
                                    </div>

                                    <div className='nav-item'>
                                        <p className='nav-link spotlight discreet-spot'>
                                            Free shipping on All Orders. No Minimum Purchase.
                            </p>

                                    </div>

                                    <div className='nav-item'>
                                        <nav className='nav justify-content-end'>
                                            <div className='nav-item'>
                                                <div className='nav-link'>
                                                    [icon]<Link to="/#" style={{ color: 'black' }}>  Carrinho </Link>[contador]
                                    </div>
                                            </div>

                                            <div className='nav-item'>
                                                <div className='nav-link'>
                                                    <Link to="/cadastro" style={{ color: 'black' }}>Entre </Link>
                                                    ou
                                        <Link to="/cadastro" style={{ color: 'black' }}> Cadastrar-se</Link>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                        </nav>
                    </div>
                </div>

                {/*Segunda parte da navbar com links de navegação*/}
                <div className="navbarPrincipal" id="navbarPrincipal">
                    <nav className='navbar navbar-dark bg-dark spotlight '>
                        <div className='container'>
                            <ul className='nav'>
                                <li className='nav-item'>
                                    <div className='nav-link'>
                                        <Link to="/home" style={{ color: 'white' }}>Home</Link>
                                    </div>

                                </li>
                                <li className='nav-item'>
                                    <div className='nav-link'>
                                        <Link to="/colecoes" style={{ color: 'white' }}>Coleções</Link>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <div className='nav-link'>
                                        <Link to="/lojavirtual" style={{ color: 'white' }}>Loja Virtual</Link>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <div className='nav-link'>
                                        <Link to="/marcas" style={{ color: 'white' }}>Marcas</Link>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <div className='nav-link'>
                                        <Link to="/faq" style={{ color: 'white' }}>FAQ</Link>
                                    </div>
                                </li>
                            </ul>
                            <span className='navbar-text'>
                                <Link to="/blog" style={{ color: 'white' }}>Dicas de beleza</Link>
                            </span>
                        </div>

                    </nav>
                </div>
                {/*
        
        <Link to="/home"> | Home | </Link>
        <Link to="/contato"> | Contato | </Link>
        <Link to="/sobre"> | Sobre | </Link>     	
        <Link to="/produto"> |Produto| </Link>	 
        
        -------------------------------
        Navbar escondida ao scroll
        */}
                <div className="navbarEscondida" id="navbarEscondida">
                    <div className="mobile-hide discreet-arimo" style={{ backgroundColor: '#f7f7f8' }}>

                        <nav className='navbar navbar-dark bg-dark spotlight '>

                            <div className='navbar-brand'>
                                <Link to="/home"><img className='d-inline-block align-top' width='30' height='30' src={Logo} alt='logo' /></Link>
                            </div>
                            <ul className='nav'>
                                <li className='nav-item'>
                                    <div className='nav-link'>
                                        <Link to="/home" style={{ color: 'white' }}>Home</Link>
                                    </div>

                                </li>
                                <li className='nav-item'>
                                    <div className='nav-link'>
                                        <Link to="/colecoes" style={{ color: 'white' }}>Coleções</Link>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <div className='nav-link'>
                                        <Link to="/lojavirtual" style={{ color: 'white' }}>Loja Virtual</Link>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <div className='nav-link'>
                                        <Link to="/marcas" style={{ color: 'white' }}>Marcas</Link>
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <div className='nav-link'>
                                        <Link to="/faq" style={{ color: 'white' }}>FAQ</Link>
                                    </div>
                                </li>

                            </ul>
                            <ul className="imgpesquisa nav">
                                <li><div className="imgpesquisa nav-link"><img className="imgpesq" id="imgpesquisa" onClick={this.PesquisaNavEsc.bind(this)} width='20' height='20' src={Search} alt='pesquisa' /></div></li>
                                <li><div id="search" className="pesquisa nav-link"><input className="form-control" style={{ marginTop: '-5%',  marginBottom: '-5%'}} id="pesq" type="search" placeholder="buscar" aria-label="Search" /></div></li>
                                <li><div className="imgcarrinho nav-link"><img className="imgcarrinho" id="imgcarrinho" width='20' height='20' src={Carrinho} alt='carrinho' /></div></li>
                            </ul>

                        </nav>
                    </div>
                </div>

            </div>


        )
    }
}

export default NavBar
