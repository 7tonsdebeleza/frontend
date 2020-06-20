import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import PathTrigger from "./PathTrigger";
import Blog from './Blog';
import "./styleBlog.css";

class Publicacao extends Component {
    
    /*
        this.props.publics guarda uma lista com todas as publicações, herdada pelo componente Blog.js
        this.state.open guarda a publicação da lista do props que será renderizada
    */
    
    state = {
        open: null
    }

    loadPublic = () => {
        //Verificando se endereço bate com alguma publicação da lista
        const adress = this.props.match.params.id;

        let post = this.props.publics.find((obj) => {
            return obj.id === adress;
        })

        if(post !== undefined){
            this.setState({
                open: post,
            })
        } else this.setState({open:null})
    }

    //Função para ler string HTML contida no objeto
    //Só pode ser usada após o carregamento do componente
    loadText = () =>{
        let field = document.getElementById("body-blog");
        if (field && this.state.open) field.innerHTML = this.state.open.texto;
    }

    componentWillMount(){
        this.loadPublic();
    }

    componentDidMount(){
        this.loadText();
    }

    render(){
        if(this.state.open)
            return(
                <Blog publics={this.props.publics}>
                <div>
                    <PathTrigger callBack = {() => this.loadPublic()}/>
                    <h3 className="article-title">
                    {this.state.open.titulo}
                    </h3>
                    <p className="blog_author">
                    <span className="article_date">
                        <time>{this.state.open.data}</time>
                    </span>
                    </p>
                    <div className="article-details">
                    <p className="article-img">
                        <Link to="#"><img className="article_image" src={this.state.open.capa} alt='Capa de publicação'></img></Link>
                    </p>
                    <div className="rte article-excerpt">
                        <div className="desc" id="body-blog"> {this.state.open.texto} </div>
                        <p className="btn-secundaryy">
                        <Link className="btn-secondaryy" to="/blog">&larr; Voltar</Link>
                        </p>
                    </div>
                    </div>
                </div>
                </Blog>
            )

        else return( <Blog publics={this.props.publics}><NotFound/></Blog>)
    }
}

export default Publicacao;