import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import NavBar from "../NavBar/NavBar"
import Home from "../Home/Home"
import Cadastro from "../Cadastro/Cadastro"
import Contato from "../Contato/Contato"
import NotFound from "../NotFound/NotFound"
import Sobre from "../Sobre/Sobre"
import TesteProduto from "../Produto/TesteProduto"

class Roteador extends Component {
  //Dica: Renderize aqui um uma NavBar e a Switch com as rotas
  render() {
    return (
    	<BrowserRouter>
    		<div>
	    		<NavBar/>   
	    		<Switch>
	    			<Route path="/home" component={Home}/>
	    			<Route path="/cadastro" component={Cadastro}/>    			
	    			<Route path="/contato" component={Contato}/>
	    			<Route path="/sobre" component={Sobre}/>
				<Route path="/produto" component={TesteProduto}/>
	    			<Route path="" component={Home}/>
	    			<Route component={NotFound}/>    			
	    		</Switch>
    		</div>
    	</BrowserRouter>
    );
  }
}

export default Roteador;
