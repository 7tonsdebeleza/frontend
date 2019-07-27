import React, {Component} from 'react';
import '../Blog/styleBlog.css';

class BlogEditor extends Component{
    state = {
        editorAberto: false,
        id: '',
        titulo: '',
        data: '',
        capa: '#',
        preExibicao: '',
        texto: '',
    }

    atualizarInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    abriEditor = (dados) =>{
        this.setState(dados);
    }

    cancelar = () =>{
        this.setState({
            editorAberto: false,
        })
    }

    excluir = (id) =>{
        alert("publicação "+ id +" excluída do bd")
    }

    enviar = () =>{
        alert("edição enviada");
    }

    render(){
        //Variável para id de listas

        let listId = 0;

        //Formulário de edição de blog
        let form = (
            <div className='admin-form'>
                <form className='admin-form'>
                    <div className='admin-form-item'>
                        <label for="inputTitulo">TITULO:</label><br/>
                        <input id="inputTitulo" type="text" placeholder="TTULO" name="titulo" onChange={this.atualizarInput} value={this.state.titulo}/>
                    </div>

                    <div className='admin-form-item'>
                        <label for="inputMarca">Data:</label><br/>
                        <input id="inputMarca" type="text" placeholder="01 de Janeiro, 2000" name="data" onChange={this.atualizarInput} value={this.state.data}/>
                    </div>


                    <div className='admin-form-item'>
                        <label for="inputTipo">PRE-EXIBIÇÃO:</label><br/>
                        <input id="inputTipo" type="text" placeholder="PRÉ-EXIBIÇÃO DE TEXTO" name="preExibicao" onChange={this.atualizarInput} value={this.state.preExibicao}/>
                    </div>

                    <div className='admin-form-item'>
                        <label for="inputDesc">TEXTO:</label><br/>
                        <textarea id="inputDesc" type="text" placeholder="TEXTO" name="texto" onChange={this.atualizarInput} value={this.state.texto}/>
                    </div>

                    <div className='admin-form-item'>
                        <label for="inputImg">CAPA:</label>
                        <input type="file" id="inputImg"/>
                    </div>
            </form>

            <div className='admin-form-item'>
                <button className='btn-secundaryy' onClick={() =>{this.enviar()}}>Enviar</button>
            </div>
            <div className='admin-form-item'>
                <button className='btn-secundaryy' onClick={() =>{this.cancelar()}}>Cancelar</button>
            </div>

        </div>
        )

        if(this.state.editorAberto){
            return(form);
        } else {
            return(
                <div>
                    <p className='admin-form'>
                        <button onClick={() => {this.abriEditor({
                                                editorAberto: true,
                                                id: new Date().getTime(),
                                                titulo: '',
                                                data: '',
                                                capa: '',
                                                preExibicao: '',
                                                texto: '',
                                            })}}>Nova Publicação</button>
                    </p>

                    <h4 className="subtitle">PUBLICAÇÕES ANTERIORES:</h4>

                    <ul>
                        {
                            this.props.public.map((p) =>{
                                listId++;
                                return(
                                    <li key={listId}>
                                    <h3 className="article-title">
                                        {p.titulo}
                                    </h3>
                                    <p className="blog_author">
                                        <span className="article_date">
                                        <time>{p.data}</time>
                                        </span>
                                    </p>
                                    <div className="article-details">
                                        <p className="article-img">
                                        <img className="article_image" src={p.capa} alt='capa da publicação'></img>
                                        </p>
                                        <div className="rte article-excerpt">
                                        <div className="desc">{p.preExibicao}</div>
                                        <div className="desc">{p.texto}</div>
                                        <p className='admin-form'>
                                            <button onClick={() => {this.abriEditor({
                                                editorAberto: true,
                                                id: p.id,
                                                titulo: p.titulo,
                                                data: p.data,
                                                capa: p.capa,
                                                preExibicao: p.preExibicao,
                                                texto: p.texto,
                                            })}}>Editar</button>
                                            <button onClick={() => {this.excluir(p.id)}}>Excluir</button>
                                        </p>
                                        </div>
                                    </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                
            )
        }


        
    }
}

export default BlogEditor;