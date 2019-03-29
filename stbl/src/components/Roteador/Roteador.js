import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import NavBarMobile from "../NavBar/NavBarMobile";
import Home from "../Home/Home";
import Cadastro from "../Cadastro/Cadastro";
import LojaVirtual from "../LojaVirtual/LojaVirtual";
import NotFound from "../NotFound/NotFound";
import Colecoes from "../Colecoes/Colecoes";
import ListaProduto from "../Produto/ListaProduto";
import Marcas from "../Marcas/Marcas";
import Faq from "../Faq/Faq";
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import BotaoTop from '../BotaoTop/BotaoTop';
import Login from '../Login/Login';

class Roteador extends Component {
  //Dica: Renderize aqui um uma NavBar e a Switch com as rotas
  render() {
    return (
    	<BrowserRouter>
    		<div>
	    		<NavBar/>   
				<NavBarMobile/>
	    		<Switch>
	    			<Route path="/home" component={Home}/>
	    			<Route path="/cadastro" component={Cadastro}/>
					<Route path="/login" component={Login}/>      			
	    			<Route path="/lojavirtual" component={LojaVirtual}/>
	    			<Route path="/colecoes" component={Colecoes}/>
						<Route path="/marcas" component={Marcas}/>
						<Route path="/faq" component={Faq}/>
						<Route path="/blog" component={Blog}/>
						<Route path="/produto" component={ListaProduto}/>
	    			<Route path="" component={Home}/>
	    			<Route component={NotFound}/>    			
	    		</Switch>
				<BotaoTop/>
				<Footer/>
    		</div>
    	</BrowserRouter>
    );
  }
}

export default Roteador;
