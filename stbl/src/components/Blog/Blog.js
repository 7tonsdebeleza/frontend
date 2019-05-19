import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Publicacao from './Publicacao';
import "./styleBlog.css";

class Blog extends Component {

  state = {
    publicacaoAberta: false,
    publicacaoAtual: {},
  }

  //Abrir e fechar publicações do blog:
  abrirPublicacao = (dados) =>{
    this.setState({
      publicacaoAberta: true,
      publicacaoAtual: dados,
    })
  }

  fecharPublicacao = () =>{
    this.setState({
      publicacaoAberta: false,
      publicacaoAtual: {},
    })
  }

  render() {

    //Buscando três publicações mais recentes dos dados  de publcicações passados para barra lateral;
    let recents = [];
    let listaDePulicacoes;

    for(let i = 0; i < 3; i++){
      recents.push(
        <li className="article" onClick={() => this.abrirPublicacao(this.props.publics[i])}>
            <p>
              <Link to="#" >
                <span>{this.props.publics[i].titulo}</span>
              </Link>
            <em>{this.props.publics[i].data}</em>
          </p>
        </li>
      )
    }

    listaDePulicacoes = this.props.publics.map((p) => {
      return(
        <li onClick={() => this.abrirPublicacao(p)}>
          <h3 className="article-title">
            <Link to="#">{p.titulo}</Link>
          </h3>
          <p className="blog_author">
            <span className="article_date">
              <time>{p.data}</time>
            </span>
          </p>
          <div className="article-details">
            <p className="article-img">
              <Link to="#"><img className="article_image" src={p.capa}></img></Link>
            </p>
            <div className="rte article-excerpt">
              <div className="desc">{p.preExibicao}</div>
              <p className="button">
                <Link to="#" className="btn-secondary" href="#">Ler mais</Link>
              </p>
            </div>
          </div>
        </li>
      )
    })
    
    return (
      <div className="blog container">
        <div className="bread">
          <Link to="/home" >Home</Link>
          <span className="arrow"></span>
          <span>Blog</span>
        </div>
        <div className="row">
          <div className="section-left-blog col-xs-12 col-sm-3 sidebar" >

            <div className="widget widget-recent-articles">

              <div className="widget-title">
                <h3>
                  <span>Recentes Artigos</span>
                </h3>
              </div>

              <div className="widget-content">
                <ul>
                  {
                    //Retornando lista de lis gerada antes do return
                    recents.map((li) => {
                      return li;
                    })
                  }

                </ul>
              </div>
            </div>

            <div className="widget sidebar-banner">
              <img className="article_image" src="//cdn.shopify.com/s/files/1/1825/4753/files/banner-sidebar_4d990d2c-ebf8-45e8-8be8-fa104d13704f_1024x1024.jpg?v=1489938247" />
            </div>

            <div className="widget sidebar-cms-custom">
              <div className="widget-title">
                <h3>
                  <span>Custom block</span>
                </h3>
              </div>

              <div className="widget-content custom">
                <p>Custom CMS block displayed at the left sidebar on the Catalog Page. Put your own content here: text, html, images, media... whatever you like. There are many similar sample content placeholders across the store. All editable from admin panel. </p>
              </div>
            </div>

          </div>


          <div className="shopify-section col-xs-12 col-sm-9 col-main">

            <div className="page-header">
              <h1><span>BLOG</span></h1>
            </div>

            <div className="content-blog">
              <ul className="list-blog blog-list">

                {
                  //Retornando dados do blog do props como elementos de lista ou única publicação aberta
                  this.state.publicacaoAberta ? <Publicacao dados={this.state.publicacaoAtual} fecharPublicacao={this.fecharPublicacao}/> : listaDePulicacoes
                }
              </ul>
              <ul className="pagination-page">
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog