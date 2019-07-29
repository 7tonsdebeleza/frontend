import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./styleBlog.css";

class Publicacao extends Component {
 render(){
     return(
        <li>
        <h3 className="article-title">
          {this.props.dados.titulo}
        </h3>
        <p className="blog_author">
          <span className="article_date">
            <time>{this.props.dados.data}</time>
          </span>
        </p>
        <div className="article-details">
          <p className="article-img">
            <Link to="#"><img className="article_image" src={this.props.dados.capa} alt='Capa de publicação'></img></Link>
          </p>
          <div className="rte article-excerpt">
            <div className="desc">{this.props.dados.texto}</div>
            <p className="button">
              <Link className="btn-secondary" to="#" onClick={() => this.props.fecharPublicacao()}>Voltar</Link>
            </p>
          </div>
        </div>
      </li>
     )
 }
}

export default Publicacao;