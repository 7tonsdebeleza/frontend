import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ListaProduto from '../Produto/ListaProduto';
import './lojaVirtualStyle.css';

class LojaVirtual extends Component {
  //State altera menu lateral de categorias
  state = {
    categoryIndex: 0, //Aponta um indice da lista de categorias
    itemOver: null, //Dinamiza hover do menu de categoiras
    dropped: false, //State para menu do modo mobile
    produtos: this.props.dados,
  }

  novaCategoria = (categoria) =>{
    this.setState({ categoryIndex: categoria.index });

    if(categoria.request.toLowerCase() === 'todos'){
      this.setState({produtos: this.props.dados});
    } else {
        let novaLista = [];

      this.props.dados.map((produto) => {
        if(produto.tipoProduto.toLowerCase() === categoria.request.toLowerCase()){
          novaLista.push(produto);
        }
        return true;
      });
      
      this.setState({produtos: novaLista});

    }
    
  }


  render() {

    let visibility;
    let bntTxt;
    let dropArrow;

    //Modo mobile

    //Checando modo mobile para evitar remover lista em desktop
    if (window.innerWidth > 574) {

      visibility = {
        display: 'inline',
      };

    } else {

      if (this.state.dropped) {
        //Itens da lista do menu ficam visíveis
        visibility = {
          display: 'inline',
        };

        //Texto muda para "esconder"
        bntTxt = "Esconder";

        //Seta para cima
        dropArrow = {
          content: "",
          display: 'inline-block',
          verticalAlign: 'middle',
          marginRight: '10px',
          width: '0',
          height: '0',
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderBottom: '5px solid black',
        }

      } else {
        visibility = {
          display: 'none',
        }

        //Texto muda para "esconder"
        bntTxt = "Mostrar";

        //Seta para baixo
        dropArrow = {
          content: "",
          display: 'inline-block',
          verticalAlign: 'middle',
          marginRight: '10px',
          width: 0,
          height: 0,
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderTop: '5px solid rgb(33, 37, 41)',
        }
      }
    }


    return (
      <div className='container' style={{ fontFamily: 'Montserrat' }}>

        {/*Links abaixo da navbar*/}
        <div className="bread">
          <Link to="/home" >Home</Link>
          <span className="arrow">&nbsp;&nbsp;</span>
          <span>&nbsp;&nbsp;Loja Virtual</span>
        </div>

        {/*Organização em linha para sessão lateral*/}

        <div className='row'>

          {/*sessão lateral à esquerda para menu de categorias*/}

          <div className="section-left-blog col-xs-12 col-sm-3 sidebar" >

            <div className="widget widget-recent-articles">
              <div className="widget-title">
                <h3>
                  <span className="shop-menu-title">Categorias</span>
                </h3>
              </div>

              <div className="widget-content">
                {/*Botão para abrir menu na versão mobile*/}
                <button className='shop-menu-mobile-control' onClick={() => {
                  this.setState({
                    dropped: (this.state.dropped) ? false : true
                  })
                }}>{bntTxt} <span style={dropArrow}></span></button>

                {/* Lista para menu de categorias
                itens são renderizados dinamicamentes através da lista de categorias (ultimas linhas)
              */}
                <ul className='shop-menu' style={visibility}>

                  {

                    //Categories = lista de objetos
                    categories.map((object) => {
                      return (<li>
                        {/* Marcador dinâmico surge para categoria clicada e hover*/}
                        <span className="seta-direita" style={this.state.categoryIndex === object.index || this.state.itemOver === object.index ? { display: "inline" } : { display: "none" }} ></span>


                        {/*Botão que seta a categoria, renderizando novos produtos (ainda n implementado) */}
                        <button onClick={() => { this.novaCategoria(object) }} onMouseOver={() => { this.setState({ itemOver: object.index }) }} onMouseOut={() => { this.setState({ itemOver: null }) }}>
                          {object.title}
                        </button>
                      </li>)
                    })
                  }

                </ul>
              </div>
            </div>

          </div>

          {/* Espaço da descrição da categoria selecionada e produtos*/}

          <div className="shopify-section col-xs-12 col-sm-9 col-main">

            {/*Banner*/}

            <p>
              <Link to="#"><img className="article_image" src="https://cdn.shopify.com/s/files/1/1825/4753/files/img_cat_022eb85c-e4c3-466c-a638-1b67c31d6bc8.jpg?v=1490539957" alt='Banner loja virtual'/></Link>
            </p>

            <div className="page-header">
              {/*Título da categoria, muda dependendo do state que é setado pelo menu*/}
              <h1><span>{categories[this.state.categoryIndex].title}</span></h1>
            </div>

            <p className='desc'>
              {/* Descrição da categoria, muda dependendo do state que é setado pelo menu*/}
              {categories[this.state.categoryIndex].descri}
            </p>

            <hr />
            {/*Produtos com renderização dinâmica:*/}
            <ListaProduto list={this.state.produtos} addCarrinho={this.props.addCarrinho}/>
          </div>

        </div>

      </div>
    )
  }
}


const categories = [
  { title: "Comos De Milano", descri: "Categoria 1", index: 0, request: "todos" },
  { title: "Lorem Et Dorus", descri: "Categoria 2", index: 1, request: "#" },
  { title: " Lynn Cosmopolis", descri: "Categoria 3", index: 2, request: "#" },
  { title: "Men", descri: "Categoria 4", index: 3, request: "#" },
  { title: " Milancelos A Lanos", descri: "Categoria 5", index: 4, request: "#" },
  { title: "New in", descri: "Categoria 6", index: 5, request: "#" },
  { title: "Nor Loremirus", descri: "Categoria 7", index: 6, request: "#" },
  { title: "Sale & Special Offers", descri: "Categoria 8", index: 7, request: "#" },
  { title: "Top Brands", descri: "Categoria 9", index: 8, request: "#" },
  { title: "Women", descri: "Categoria 10", index: 9, request: "#" },
  { title: "Batom", descri: "Categoria 11", index: 10, request: "batom" },
]

export default LojaVirtual