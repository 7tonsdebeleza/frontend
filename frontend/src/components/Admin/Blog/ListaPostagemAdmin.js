import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Modal from '../../Modal/Modal';
import Pencil from '../../Images/pencil.svg';
import Lixeira from '../../Images/lixeira.svg';
import api, { convertDate } from '../../API/api';
import pencil from '../../Images/pencil.svg';
import '../../Blog/styleBlog.css';

export default function ListaPostagemAdmin() {
  const [modal, setModal] = useState(false);
  const [publics, setPublics] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedPost, setPost] = useState({});

  function cover(e) {
    e.target.width = 60;
    e.target.className = "article_image";
    e.target.src = pencil;

  }

  // Função a ser passada para alternar state do modal
  function modalControl() {
    setModal(modal ? false : true);
    return modal;
  }

  async function excluirPost(id) {
    const token = localStorage.getItem("@stbl/admin/user");

    await api.delete(`/posts/${id}`, { headers: { authorization: token } }).then((res) => {
      console.log(res);
      let attPublics = [];
      publics.forEach(post => {
        if(post._id !== id){
          attPublics.push(post);
        }
      });

      setPublics(attPublics);

    }).catch(error => {
      console.log(error);
      alert('Erro ao tentar remover essa publicação... Tente novamente mais tarde.');

    })
  }

  function selectPost(p) {
    setPost(p);
    setModal(true);
  }

  useEffect(() => {
    async function fetchNextPage() {
      await api.get(`/posts?pagina=${page}`).then(res => {
        if (res.data.length > 0) {
          const newPublics = publics.concat(res.data);
          setPublics(newPublics);
          setPage(page + 1);

        }
      }).catch(error => {
        console.log(error);

      });
    }

    async function fetchPage1() {
      if (publics.length === 0 && page === 1) {
        await fetchNextPage();
      }
    };

    async function watchScroll() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        await fetchNextPage();
      }
    }

    fetchPage1();
    window.onscroll = watchScroll;
  }, [page, publics]);

  return (
    <div className="content-blog">
      <ul className="list-blog blog-list">
        { publics.length > 0 ?
          publics.map((p) => {
            return (
              <li key={p._id}>
                <div style={{ float: 'right', padding: '20px' }}>
                  <Link to={`/admin7tons/blog/editar/${p._id}`}>
                    <img src={Pencil} width='15' height='15' alt='seach icon' style={{ marginRight: '10px' }} />
                  </Link>
                  <Link to={"#"}>
                    <img src={Lixeira} width='15' height='15' alt='seach icon' onClick={() => selectPost(p)} />
                  </Link>
                </div>
                <h3 className="article-title">
                  <Link to={"/blog/posts/" + p._id}>{p.titulo}</Link>
                </h3>
                <p className="blog_author">
                  <span className="article_date">
                    <time>{convertDate(p.data)}</time>
                  </span>
                </p>
                <div className="article-details">
                  <p className="article-img article-img-content">
                    <Link to={"/blog/posts/" + p._id}>
                      <img className="article_image d-block w-100" src={p.capa} onError={cover} alt='capa do blog' />
                    </Link>
                  </p>
                  <div className="rte article-excerpt">
                    <div className="desc">{p.preExibicao}</div>
                    <p className="button">
                      <Link to={"/blog/posts/" + p._id} className="btn-secondary" href="#">Ler mais</Link>
                    </p>
                  </div>
                </div>
              </li>
            )
          }) : <em>Nenhuma publicação no momento</em>
        }
      </ul>

      <Modal actived={modal} controller={modalControl}>
        <h3> Tem certeza que deseja excluir esta postagem permantemente? </h3>
        <div> <b>título:</b> <p>{selectedPost.titulo}</p>  </div>
        <p className="btn-secundaryy" onClick={() => { setModal(false); excluirPost(selectedPost._id) }} ><Link to={'#'} > CONFIRMAR </Link></p>
      </Modal>
    </div>
  )
}