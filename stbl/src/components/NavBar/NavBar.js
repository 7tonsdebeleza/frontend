import React from "react";
import {Route, Link} from "react-router-dom";

const NavBar = () => {
    //Dica: Renderize os Links aqui!
    return(
        <nav>
        	<Link to="/home"> | Home | </Link>
        	<Link to="/cadastro"> | Cadastro | </Link>
        	<Link to="/contato"> | Contato | </Link>
        	<Link to="/sobre"> | Sobre | </Link>     	
            <Link to="/produto"> |Produto| </Link>	    		
        </nav>
    )
}

export default NavBar;