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
import { Compras, Public } from '../Produto/Dados'; //Dados provisórios para listas de produtos
import Busca from '../Produto/Busca';
import Carregamento from '../Carregamento/Carregamento'
import api from "../API/api";

class Roteador extends Component {
	//Este componente é usado como root para o fluxo de dados entre os demais componentes.
	/*
	 state:
		 - "email" guarda o usuário q está logado. [não funcional]
		 - "dadosCarrinho" guarda uma array de objetos de produtos no carrinho
		 - "qtdCarrinho" mostra o total de produtos no carrinho, mostrando no contador da navbar
			 obs.: a qtd individual de cada produto é guardada em cada objeto.
		 - "pesquisa" guarda a string a ser passada para página de pesquisa
		 - "pesquisaChamada" ativa a página de resultados de pesquisa
		 - "dados" guarda a resquisão de produtos do banco de dados
		 - "carregado" indica se a requisição do banco de dados foi finalizada para renderização
	*/

	state = {
		email: "p",
		dadosCarrinho: [],
		qtdCarrinho: 0,
		pesquisa: "",
		pesquisaChamada: false,
		dados: [],
		carregado: false,
	}

	//Função que executava a requisição com o banco de dados
	async mostra(){
		const response = await api.get('/mostrarprodutos');
		console.log(response.data.products);
		this.setState({
			dados: response.data.products,
			carregado: true,
		})
	}

	//Esta função será passada aos componetes filhos onde houver componete produto
	addCarrinho = (dados) =>{
		let novaLista = this.state.dadosCarrinho;
		novaLista.push(dados);
		this.setState({
			dadosCarrinho: novaLista,
			qtdCarrinho: this.state.qtdCarrinho + dados.qtd
		})
		this.adicionarCarrinho("Batom Líquido Mate Metálico Azuluz");
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

	componentDidMount(){
		//Carregando produtos do banco de dados 
		this.mostra();
	}

	render() {

		//Os componentes são renderizados apenas se requisião ao banco de dados tiver finalizado
		if(!this.state.carregado){
			return(
				<div>
					<Carregamento />
				</div>
			)
		} else {
			return (
			<BrowserRouter>
			<div>
				<div style={{
					display:'flex',
					flex: 1,
					minHeight: '100vh',
					flexDirection: 'column',
				}}>
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
						<Route exact path="/home" render={() => <Home dados={this.state.dados} addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho}/>}/>

						<Route exact path="/cadastro" component={Cadastro}/>

						<Route exact path="/login" component={Login}/>

						<Route exact path="/lojavirtual" render={() => <LojaVirtual dados={this.state.dados} addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho}/>}/>

						<Route exact path="/marcas" component={Marcas}/>

						<Route exact path="/faq" component={Faq}/>

						<Route exact path="/blog" render={() => <Blog publics={Public}/>}/>

						<Route path="/buscar" component={() => this.state.pesquisa === "" ? <Redirect to='/home'/>:<Busca dados={this.state.dados} pesquisa={this.state.pesquisa} addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho}/>}/>

						<Route exact path="/carrinho" render={() => <Carrinho dados={this.state.dadosCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho} botaoCarrinho={false} naNavbar={false}/>}/>

						<Route exact path="/admin7tons" render={() => <Admin produtos={this.state.dados} consultas={Compras} publics={Public}/>}/>

						<Route exact path="/"  render={() => <Home dados={this.state.dados} addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho} />}/>

						<Route component={NotFound}/>    			
					</Switch>

					<BotaoTop/>
					
				</div>
				<Footer/>
				</div>
			</BrowserRouter>
			);
		}


		
  }
}

export default Roteador;
