import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import api, { convertDate } from '../API/api';
import pencil from '../Images/pencil.svg';
import "./styleBlog.css";

const PostsList = () => {

  const [publics, setPublics] = useState([]);
  const [page, setPage] = useState(1);

  function cover(e) {
    e.target.width = 60;
    e.target.className = "article_image";
    e.target.src = pencil;
    
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
        {
          publics.length > 0 ?
          publics.map((p) => {
            return (
              <li key={p._id}>
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
    </div>
  )
}

export default PostsList;