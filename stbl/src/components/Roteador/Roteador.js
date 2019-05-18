import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import NavBarMobile from "../NavBar/NavBarMobile";
import Home from "../Home/Home";
import Cadastro from "../Cadastro/Cadastro";
import LojaVirtual from "../LojaVirtual/LojaVirtual";
import NotFound from "../NotFound/NotFound";
import Marcas from "../Marcas/Marcas";
import Faq from "../Faq/Faq";
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import BotaoTop from '../BotaoTop/BotaoTop';
import Login from '../Login/Login';
import Admin from '../Admin/Admin';
import Carrinho from '../Carrinho/Carrinho';
import {Dados, Compras} from '../Produto/Dados'; //Dados provisórios para listas de produtos
import Busca from '../Produto/Busca';

class Roteador extends Component {
	//Dica: Renderize aqui um uma NavBar e a Switch com as rotas
	//Este componente será usado como root para o fluxo de dados entre os demais componentes.
	state = {
		dadosCarrinho: [],
		qtdCarrinho: 0,
		pesquisa: "",
		pesquisaChamada: false
	}

	//Esta função será passada aos componetes filhos onde houver componete produto
	addCarrinho = (dados) =>{
		let novaLista = this.state.dadosCarrinho;
		novaLista.push(dados);
		this.setState({
			dadosCarrinho: novaLista,
			qtdCarrinho: this.state.qtdCarrinho + dados.qtd
		})
		console.log(this.state.dadosCarrinho);
	}
	atualizarQtdCarrinho = (qtd) =>{
		this.setState({
			qtdCarrinho: this.state.qtdCarrinho + qtd
		})
	}

	removerCarrinho = (dados) =>{
		dados.noCarrinho = false;
		let newArray = this.state.dadosCarrinho;
		
		newArray.forEach((element, n) => {
			if(element.id === dados.id){
				newArray.splice(n, 1)
			}
		});

		this.setState({
			dadosCarrinho: newArray
		})

		this.atualizarQtdCarrinho(dados.qtd*(-1));
	}

	pesquisar = (string) =>{
		//State recebe string de pesquisa e pesquisa é setada verdadeira

		this.setState({
		  pesquisa: string,
		  pesquisaChamada: true, 
		});
	}

	render() {

		return (
			<BrowserRouter>
				<div>
					{
						this.state.pesquisaChamada ? 
							<Redirect to={'/buscar/busca='+this.state.pesquisa}/>: (null)
						//Se houver pesquisa, página será redirecionada, depois disso, state é resetada
					}

					{
						this.state.pesquisaChamada ? 
						this.setState({pesquisaChamada: false}) : null
					}

					<NavBar pesquisar={this.pesquisar} qtdCarrinho={this.state.qtdCarrinho} dados={this.state.dadosCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho} botaoCarrinho={true}/>

					<NavBarMobile pesquisar={this.pesquisar} qtdCarrinho={this.state.qtdCarrinho} dados={this.state.dadosCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho} botaoCarrinho={true}/>
					
					<Switch>
						<Route exact path="/home" render={() => <Home dados={Dados} addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho}/>}/>

						<Route exact path="/cadastro" component={Cadastro}/>

						<Route exact path="/login" component={Login}/>

						<Route exact path="/lojavirtual" render={() => <LojaVirtual dados={Dados} addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho}/>}/>

						<Route exact path="/marcas" component={Marcas}/>

						<Route exact path="/faq" component={Faq}/>

						<Route exact path="/blog" component={Blog}/>

						<Route path="/buscar" component={() => this.state.pesquisa === "" ? <Redirect to='/home'/>:<Busca dados={Dados} pesquisa={this.state.pesquisa} addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho}/>}/>

						<Route exact path="/carrinho" render={() => <Carrinho dados={this.state.dadosCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho} botaoCarrinho={false} naNavbar={false}/>}/>

						<Route exact path="/admin7tons" render={() => <Admin produtos={Dados} consultas={Compras}/>}/>

						<Route exact path="/"  render={() => <Home dados={Dados} addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho} />}/>

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
