import React from 'react';
import { Link } from "react-router-dom";
import "./styleBlog.css";

const PostsList = (props) => {
    return(
        <div className="content-blog">
              <ul className="list-blog blog-list">
                  {
                      props.publics.map((p) => {
                        return(
                          <li key={p.id}>
                            <h3 className="article-title">
                              <Link to={"/blog/posts/"+p.local}>{p.titulo}</Link>
                            </h3>
                            <p className="blog_author">
                              <span className="article_date">
                                <time>{p.data}</time>
                              </span>
                            </p>
                            <div className="article-details">
                              <p className="article-img">
                                <Link to={"/blog/posts/"+p.local}><img className="article_image" src={p.capa} alt='capa do blog'></img></Link>
                              </p>
                              <div className="rte article-excerpt">
                                <div className="desc">{p.preExibicao}</div>
                                <p className="button">
                                  <Link to={"/blog/posts/"+p.local} className="btn-secondary" href="#">Ler mais</Link>
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

export default PostsList;