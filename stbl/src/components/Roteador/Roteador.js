import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import NavBarMobile from "../NavBar/NavBarMobile";
import Home from "../Home/Home";
import Cadastro from "../Cadastro/Cadastro";
import LojaVirtual from "../LojaVirtual/LojaVirtual";
import NotFound from "../NotFound/NotFound";
import ListaProduto from "../Produto/ListaProduto";
import Marcas from "../Marcas/Marcas";
import Faq from "../Faq/Faq";
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import BotaoTop from '../BotaoTop/BotaoTop';
import Login from '../Login/Login';
import Admin from '../Admin/Admin';
import Carrinho from '../Carrinho/Carrinho';
import Dados from '../Produto/Dados'; //Dados provisórios para listas de produtos

class Roteador extends Component {
  //Dica: Renderize aqui um uma NavBar e a Switch com as rotas
  //Este componente será usado como root para o fluxo de dados entre os demais componentes.
  render() {
    return (
    	<BrowserRouter>
    		<div>
	    		<NavBar/>   
				<NavBarMobile/>
	    		<Switch>
	    			<Route path="/home" render={() => <Home dados={Dados}/>}/>
	    			<Route path="/cadastro" component={Cadastro}/>
					<Route path="/login" component={Login}/>      			
	    			<Route path="/lojavirtual" render={() => <LojaVirtual dados={Dados}/>}/>
					<Route path="/marcas" component={Marcas}/>
					<Route path="/faq" component={Faq}/>
					<Route path="/blog" component={Blog}/>
					<Route path="/produto" render={() => <ListaProduto list={Dados}/>}/>
					<Route path="/carrinho" component={Carrinho}/>
					<Route path="/admin7tons" component={Admin}/>
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
