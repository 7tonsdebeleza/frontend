import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    //Dica: Renderize os Links aqui!
    return(
        <div>
            {/*Parte inicial da navbar: logo, barra de pesquisa, numero de contato*/}
            <div className='container'>
                <nav className='nav justify-content-end'>
                    <div className='nav-item'>
                        <p className='nav-link'>
                            Entre em contato (1800) 000 8808
                        </p>
                        
                    </div>
                    <div className='nav-item'>
                        <div className='nav-link'>
                            <input class="form-control mr-sm-2" type="search" placeholder="buscar" aria-label="Search"/>
                        </div>
                    </div>
                </nav>


                <nav className='nav justify-content-end'>
                    <p>
                    Free shipping on All Orders. No Minimum Purchase.
                    </p>

                </nav>
                
                <nav className='navbar'>
                    <div className='navbar-brand'>
                        [LOGO]
                    </div>
                    <div className='form-inline'>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                [icon]<Link to="/#" style={{color: 'black'}}>  Carrinho </Link>[contador]
                            </div>
                        </div>

                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to="/cadastro" style={{color: 'black'}}>Entre </Link>
                                ou 
                                <Link to="/cadastro" style={{color: 'black'}}> Cadastrar-se</Link>                        
                            </div>
                        </div>
                        
                    </div>
                    
                </nav>
            </div>

            {/*Segunda parte da navbar com links de navegação*/}
            
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <div className='nav-link'>
                                <Link to="/home" style={{color:'white'}}>Home</Link>
                            </div>
                            
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link'>
                                <Link to="/home" style={{color:'white'}}>Coleções</Link>
                            </div>    
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link'>
                                <Link to="/home" style={{color:'white'}}>Loja Virtual</Link>
                            </div>    
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link'>
                                <Link to="/home" style={{color:'white'}}>Marcas</Link>
                            </div>    
                        </li>
                        <li className='nav-item'>
                            <div className='nav-link'>
                                <Link to="/home" style={{color:'white'}}>FAQ</Link>
                            </div>    
                        </li>
                    </ul>
                    <span className='navbar-text'>
                        <Link to="/home" style={{color:'white'}}>Dicas de beleza</Link>
                    </span>
                </div>

            </nav>

            {/*
            
            <Link to="/home"> | Home | </Link>
            <Link to="/contato"> | Contato | </Link>
            <Link to="/sobre"> | Sobre | </Link>     	
            <Link to="/produto"> |Produto| </Link>	    		
            */}

        </div>
    
    )
}

export default NavBar;