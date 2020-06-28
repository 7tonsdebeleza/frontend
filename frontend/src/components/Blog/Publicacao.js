import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import PathTrigger from "./PathTrigger";
import Blog from './Blog';
import pencil from '../Images/pencil.svg';
import api, { convertDate } from '../API/api';
import "./styleBlog.css";

class Publicacao extends Component {

    /*
        this.state.open guarda a publicação da lista do props que será renderizada
    */

    state = {
        open: null
    }

    loadPublic = async () => {
        //Verificando se endereço bate com alguma publicação da lista
        const adress = this.props.match.params.id;

        const post = await api.get(`/posts/${adress}`);

        if (post) {
            this.setState({
                open: post.data,
            })
        } else this.setState({ open: null })
    }

    //Função para ler string HTML contida no objeto
    //Só pode ser usada após o carregamento do componente
    loadText = () => {
        let field = document.getElementById("body-blog");
        if (field && this.state.open) field.innerHTML = this.state.open.texto;
    }

    cover = (e) => {
        e.target.src = pencil;
        e.target.width = 60;
    }

    componentWillMount() {
        this.loadPublic();
    }

    componentDidMount() {
        this.loadText();
    }

    render() {
        if (this.state.open)
            return (
                <Blog publics={this.props.publics}>
                    <div>
                        <PathTrigger callBack={() => this.loadPublic()} />
                        <h3 className="article-title">
                            {this.state.open.titulo}
                        </h3>
                        <p className="blog_author">
                            <span className="article_date">
                                <time>{convertDate(this.state.open.data)}</time>
                            </span>
                        </p>
                        <div className="article-details">
                            <p className="article-img article-img-content">
                                <Link to="#">
                                    <img className="article_image" src={this.state.open.capa} onError={this.cover} alt='Capa de publicação' />
                                </Link>
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

        else return (<Blog publics={this.props.publics}><NotFound /></Blog>)
    }
}

export default Publicacao;