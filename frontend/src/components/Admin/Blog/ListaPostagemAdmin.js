import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Modal from '../../Modal/Modal';
import Pencil from '../../Images/pencil.svg';
import Lixeira from '../../Images/lixeira.svg';
import '../../Blog/styleBlog.css';

class ListaPostagemAdmin extends Component {

  state = {
    modal: false,
    selectPost: {}
  }

  // Função a ser passada para alternar state do modal
  modalControl = () => {
    this.setState({ modal: this.state.modal ? false : true });
    return this.state.modal
  }

  excluirPost = (id) => {
    console.log(id);
  }

  render() {
    return (
      <div className="content-blog">
        <ul className="list-blog blog-list">
          {
            this.props.publics.map((p) => {
              return (
                <li key={p.id}>
                  <div style={{ float: 'right', padding: '20px' }}>
                    <Link to={`/admin7tons/blog/editar/${p.id}`}><img src={Pencil} width='15' height='15' alt='seach icon' style={{ marginRight: '10px' }} /></Link>
                    <Link to={"#"}><img src={Lixeira} width='15' height='15' alt='seach icon' onClick={() => this.setState({ modal: true, selectPost: p })} /></Link>
                  </div>
                  <h3 className="article-title">
                    <Link to={"/blog/posts/" + p.id}>{p.titulo}</Link>
                  </h3>
                  <p className="blog_author">
                    <span className="article_date">
                      <time>{p.data}</time>
                    </span>
                  </p>
                  <div className="article-details">
                    <p className="article-img">
                      <Link to={"/blog/posts/" + p.id}><img className="article_image" src={p.capa} alt='capa do blog'></img></Link>
                    </p>
                    <div className="rte article-excerpt">
                      <div className="desc">{p.preExibicao}</div>
                      <p className="button">
                        <Link to={"/blog/posts/" + p.id} className="btn-secondary" href="#">Ler mais</Link>
                      </p>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>

        <Modal actived={this.state.modal} controller={this.modalControl}>
          <h3> Tem certeza que deseja excluir a postagem de título esta permantemente? </h3>
          <div> <stronger>título:</stronger> <p>{this.state.selectPost.titulo}</p>  </div>
          <p className="btn-secundaryy" onClick={() => this.excluirPost(this.state.selectPost.id)} ><Link to={'#'} > CONFIRMAR </Link></p>
        </Modal>
      </div>
    )
  }
}

export default ListaPostagemAdmin;