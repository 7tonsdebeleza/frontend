import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import api, { convertDate } from '../API/api';
import "./styleBlog.css";

const Blog = (props) => {

  const [publics, setPublics] = useState([]);

  useEffect(() => {
    async function fetch() {
      await api.get(`/posts?pagina=1`).then(res => {
        setPublics(res.data);
      }).catch(error => {
        console.log(error);
  
      });
    }

    fetch();
  }, []);

  return (
    <>
      <div className="blog container">
        <div className="bread">
          <Link to="/home" >Home</Link>
          <span className="arrow"></span>
          <span> Blog</span>
        </div>

        <div className="row">
          <section className="section-left-blog col-xs-12 col-sm-3 sidebar" >
            <div className="widget widget-recent-articles">
              <div className="widget-title">
                <h3> <span>Últimas Publicações</span> </h3>
              </div>

              <div className="widget-content">
                {
                  publics && publics.length > 0 ?
                    <ul>
                      <li className="article">
                        <p>
                          <Link to={"/blog/posts/" + publics[0]._id}> <span>{publics[0].titulo}</span> </Link>
                          <em>{convertDate(publics[0].data)}</em>
                        </p>

                        {
                          publics.length > 1 ?
                            <p>
                              <Link to={"/blog/posts/" + publics[1]._id}>
                                <span>{convertDate(publics[0].data)}</span>
                              </Link>
                              <em>{props.publics[1].data}</em>
                            </p>

                            : null
                        }

                        {
                          publics.length > 2 ?
                            <p>
                              <Link to={"/blog/posts/" + publics[2]._id}>
                                <span>{publics[2].titulo}</span>
                              </Link>
                              <em>{convertDate(publics[0].data)}</em>
                            </p>

                            : null
                        }

                      </li>
                    </ul>
                    : <em>Nenhuma publicação no momento</em>
                }
              </div>
            </div>

          </section>

          <div className="shopify-section col-xs-12 col-sm-9 col-main">
            <div className="page-header">
              <h1><span>BLOG</span></h1>
            </div>

            {props.children}
          </div>

        </div>
      </div>
    </>
  )
}

export default Blog