import React from 'react';
import Logo from '../Images/logo.png';
import Search from '../Images/iconsearch.png';
import Carrinho from '../Images/carrinho.png';
import { Link } from "react-router-dom";

const NavBarMobile = () =>{
    return(
        <div className="mobile-show" id="navbarEscondida">

            <nav className='navbar navbar-dark bg-dark'>

                <div className='nav-item'>
                    <div className='nav-link'>
                        <button class="navbar-toggler" type="button">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>


                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to="/home"><img className='d-inline-block align-top' width='30' height='30' src={Logo} alt='logo' /></Link>
                    </div>
                </div>


                <div className='nav-item'>
                    <div className='nav-link'>
                        <ul className="imgpesquisa nav">
                            <li>
                                <div className="imgpesquisa nav-link"><img className="imgpesq" id="imgpesquisa" width='20' height='20' src={Search} alt='pesquisa' /></div>
                            </li>
                            <li>
                                <div id="search" className="pesquisa nav-link"><input className="form-control" style={{ marginTop: '-5%',  marginBottom: '-5%'}} id="pesq" type="search" placeholder="buscar" aria-label="Search" /></div>
                            </li>
                            <li>
                                <div className="imgcarrinho nav-link"><img className="imgcarrinho" id="imgcarrinho" width='20' height='20' src={Carrinho} alt='carrinho' />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
    )
    
}


export default NavBarMobile;