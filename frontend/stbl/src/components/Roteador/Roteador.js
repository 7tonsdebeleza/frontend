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
import Checkout from '../Carrinho/Checkout';
import { Compras, Public } from '../Produto/Dados'; //Dados provisórios para listas de produtos
import Busca from '../Produto/Busca';
import Cliente from "../Cliente/Cliente";
import AtualizarClienteInfo from "../Cliente/AtualizarClienteInfo";
import GoTop from "./GoTop";
import PostsList from "../Blog/PostsList";
import Publicacao from "../Blog/Publicacao";
import api from "../API/api";
import Frete from '../Frete/Frete';

// Este componente serve como raiz da aplicação
// Contendo as rotas e funções de fluxo de dados

class Roteador extends Component {
  state = {
	dadosCarrinho: [],
	qtdCarrinho: 0,
	pesquisa: "",
	pesquisaChamada: false,
	dados: [],
	user: null,
  }

  //Função que será herdada pelo componente de login do cliente
  //Recebe como parâmetro dados válidos do form de login
  clientLogin = async (user) => {

  	console.log("Gerando token...");
  	const res = await api.post('/Sign',{
	  email: user.email,
	  senha: user.senha
  	});		
        
  	//Caso login não funcione
  	if(res.data.error) return res.data.error;

  	if(res.data === "Email inválido!" || res.data === "Senha inválida!"){
	  return res.data;
	
  	} else {
	  //Salvando token para permância de login
      localStorage.setItem('@stbl/client/user', res.data.token);
	  this.auth(res.data.token);
	  return true;

  	}
  }

  //Função de autenticação de token
  auth = (token) => {
	console.log("Autenticando...");

	api.post('/Auth',  {headers: {"Authorization" : token}}).then(res => {
	  if(res.data.error){
		//Caso autenticação falhe, usuário será deslogado para gerar novo token
		console.log(res.data.error);
		this.Clientelogout();

	  } else {
		//Salvando dados do usuário
		this.setState({user:res.data}, () => this.loadCarrinho());
	  }
	})
  }
	
  Clientelogout = () =>{
    // Removendo objeto do state e permanência do navegador
    this.setState({user: null});
    localStorage.removeItem("@stbl/client/user");
  }

  //Função que executava a requisição com o banco de dados
  mostra = () =>{

	api.get('/mostrartodosprodutos').then(response => {
	  response.data.map((obj)=>{
		//Remove o path da imagem e seta como o link dela
		obj.img = obj.img_url;
		return true
	  });
			
	  this.setState({
		dados: response.data,
		carregado: true,
	  });


	}).catch(e => {
	  console.log(e);
	  this.setState({error: true});
	});
		
  }

  //Esta função será passada aos componetes filhos onde houver componete produto
  addCarrinho = (dados) =>{
	const frete = new Frete();
	let novaLista = this.state.dadosCarrinho;
	novaLista.push(dados);

	// Caso dimensões das caixa com novo item passem do limite, item não será adcionado
	if(!frete.test(novaLista)) return alert("Seu carrinho está cheio!");

	this.setState({
	  dadosCarrinho: novaLista,
	  qtdCarrinho: this.state.qtdCarrinho + dados.qtd
	}, () => {
	  // Caso haja login, bd do usuário deve ser atualizado
	  if(this.state.user){
		  api.post('/adicionarcarrinho', {email: this.state.user.email, titulo: dados.titulo, quantidade: 1})
	  }
	});
		
  }

  // Adicionando quantidade de um item
  attQtdItem = async (qtd, produto) => {
	// Testando se entrada é negativa, caso positivo, impedir decrementação negativa
	if (qtd < 0) {
	  if (produto.qtd === 1) {
		return;
	  }
	}

	let novaLista = this.state.dadosCarrinho;
	const target = novaLista.findIndex(item => item._id === produto._id)
	novaLista[target].qtd = novaLista[target].qtd + qtd;

	console.log(this.state.dadosCarrinho);

	const frete = new Frete();
	// Caso dimensões das caixa com novo item passem do limite, item não será adcionado
	if(!frete.test(novaLista)) {
		novaLista[target].qtd = novaLista[target].qtd - qtd;
		return alert("Seu carrinho está cheio!");
	}

	if(this.state.user) await api.post('/adicionarcarrinho', {email: this.state.user.email, titulo: produto.titulo, quantidade: qtd});
	await this.atualizarQtdCarrinho(qtd);
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
	}, () => {
		// Caso haja login, bd do usuário deve ser atualizado
		if(this.state.user){
			console.log(dados)
			api.post('/removercarrinho', {email: this.state.user.email, titulo: dados.titulo});
		}
	  });

	this.atualizarQtdCarrinho(dados.qtd*(-1));
  }

  // Método para carregar carrinho do usuário no banco de dados
  loadCarrinho = async () => {
	console.log('carregando carrinho...');

	const res = await api.post('/pegarcarrinho', { teste: 'teste', email: this.state.user.email});

	this.setState({
		dadosCarrinho: res.data,
		qtdCarrinho: res.data.length // ####### fazer calculo correto
	});
	this.loadItensQtd();
  }

  loadItensQtd = () => {
	let dadosCarrinho = this.state.dadosCarrinho;
	const userCarrinho = this.state.user.carrinho;
	let qtdCarrinho = 0;

	dadosCarrinho.forEach(produto => {
	  userCarrinho.forEach(produtoArray => {
		if(produto._id === produtoArray[0]) produto.qtd = produtoArray[1];
	  })
	});

	userCarrinho.forEach(produtoArray => {
	  qtdCarrinho = qtdCarrinho + produtoArray[1];
	})

	this.setState({dadosCarrinho, qtdCarrinho});

  }

  pesquisar = (string) =>{
	//State recebe string de pesquisa e pesquisa é setada verdadeira

	this.setState({
	  pesquisa: string,
	  pesquisaChamada: true, 
	});
  }

  componentWillMount(){
	//Fazendo verificações do endereço
	let adress = window.location.pathname;

	//Caso endereço seja de página de busca
	if(adress.includes("/buscar/busca=")){
	  this.setState({
		pesquisaChamada: true,
		pesquisa: adress.replace("/buscar/busca=", "").toString()
	  });
	}

  }

  componentDidMount(){
	//recuperando estado de usuário logado
	let token = localStorage.getItem("@stbl/client/user");
    if(token !== null){

	  //##### Implementar função para conectar carrinho do cliente logado

	  this.auth(token);
	}	
  }

  render() {
	return (
	  <BrowserRouter>	
		<div>
		  <GoTop />

		  <div style={{
			  display:'flex',
			  flex: 1,
			  minHeight: '100vh',
			  flexDirection: 'column',
		  }}>
			{ this.state.pesquisaChamada ? <Redirect to={'/buscar/busca='+this.state.pesquisa}/>: (null)
				//Se houver pesquisa, página será redirecionada, depois disso, state é resetada
			}

			{ this.state.pesquisaChamada ? this.setState({pesquisaChamada: false}) : null }

			<NavBar pesquisar={this.pesquisar} qtdCarrinho={this.state.qtdCarrinho} dados={this.state.dadosCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} attQtdItem={this.attQtdItem} removerCarrinho={this.removerCarrinho} botaoCarrinho={true} user={this.state.user} logout={this.Clientelogout} />

			<NavBarMobile pesquisar={this.pesquisar} qtdCarrinho={this.state.qtdCarrinho} dados={this.state.dadosCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} attQtdItem={this.attQtdItem} removerCarrinho={this.removerCarrinho} botaoCarrinho={true} user={this.state.user} logout={this.Clientelogout}/>
					
			<Switch>
			  <Route exact path="/home" render={() => <Home dados={this.state.dados} addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} attQtdItem={this.attQtdItem} removerCarrinho={this.removerCarrinho}/>}/>

			  <Route exact path="/cadastro" render={() => this.state.user ? <Redirect to='/Cliente'/> : <Cadastro/>}/>

			  <Route exact path="/login" render={() => this.state.user ? <Redirect to='/Cliente'/> : <Login login={this.clientLogin}/>} />

			  <Route exact path="/lojavirtual" render={() => <LojaVirtual addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} attQtdItem={this.attQtdItem} removerCarrinho={this.removerCarrinho}/>}/>

			  <Route exact path="/marcas" component={Marcas}/>

			  <Route exact path="/faq" component={Faq}/>

			  <Route path="/buscar" component={() => this.state.pesquisa === "" ? <Redirect to='/home'/>:<Busca dados={this.state.dados} pesquisa={this.state.pesquisa} addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho}  attQtdItem={this.attQtdItem} removerCarrinho={this.removerCarrinho}/>}/>

			  <Route exact path="/carrinho" render={() => <Carrinho logado={this.state.user ? true : false} dados={this.state.dadosCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} attQtdItem={this.attQtdItem} removerCarrinho={this.removerCarrinho} botaoCarrinho={false} naNavbar={false}/>}/>

			  <Route path="/checkout" render={() => <Checkout user={this.state.user} carrinho={this.state.dadosCarrinho} /> }/>

			  <Route path="/admin7tons" render={() => <Admin produtos={this.state.dados} consultas={Compras} publics={Public}/>}/>

			  <Route exact path="/"  render={() => <Home dados={this.state.dados} addCarrinho={this.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho} />}/>

			  <Route exact path="/cliente" render={() => this.state.user? <Cliente user={this.state.user}/> : <Redirect to="/login"/> }/>

			  <Route exact path="/cliente/atualizar" render={() => this.state.user? <AtualizarClienteInfo user={this.state.user}/> : <Redirect to="/login"/> }/>

			  {/*Rotas para publicações na aba blog*/}

			  <Route exact path="/blog" component={() => <Blog publics={Public}><PostsList publics={Public}/></Blog> } /> 
              <Route path="/blog/posts/" component={() => <Blog publics={Public}><Publicacao publics={Public}/></Blog> } />

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

export default Roteador;