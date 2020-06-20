import React from 'react';
import { Link } from "react-router-dom";
import "./styleBlog.css";

const Blog = (props) =>{
    return(
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
                    props.publics && props.publics.length > 0 ?
                    <ul>
                    <li className="article">
                      <p> 
                        <Link to={"/blog/posts/" + props.publics[0].id}> <span>{props.publics[0].titulo}</span> </Link>
                        <em>{props.publics[0].data}</em>
                      </p>

                      {
                          props.publics.length > 1 ? 
                          <p>
                              <Link to={"/blog/posts/" + props.publics[1].id}>
                                  <span>{props.publics[1].titulo}</span>
                              </Link>
                              <em>{props.publics[1].data}</em>
                          </p>

                          : null
                      }

                      {
                          props.publics.length > 2 ? 
                          <p>
                              <Link to={"/blog/posts/" + props.publics[2].id}>
                                  <span>{props.publics[2].titulo}</span>
                              </Link>
                              <em>{props.publics[2].data}</em>
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
)}

export default Blog