import React from 'react';
import { Link } from 'react-router-dom';
import Pencil from '../../Images/pencil.svg';
import ListaPostagemAdmin from './ListaPostagemAdmin';
import { Public } from '../../Produto/Dados';
import '../../Blog/styleBlog.css';

const BlogEditor = (props) => {
  return (
    <>
      <div className="blog container">
        <div className="bread">
          <Link to="/admin7tons" >Admin</Link>
          <span className="arrow"></span>
          <span> Blog</span>
        </div>

        <div className="row">
          <section className="section-left-blog col-xs-12 col-sm-3 sidebar" >
            <div className="widget widget-recent-articles">
              <Link to="/admin7tons/blog/nova-postagem"><div className='admin-item'>
                <img src={Pencil} width='20' height='20' alt='seach icon' />
                <span> NOVA </span>
              </div> </Link>

            </div>

          </section>

          <div className="shopify-section col-xs-12 col-sm-9 col-main">
            <div className="page-header">
              <h1><span>POSTAGENS</span></h1>
            </div>

            <ListaPostagemAdmin publics={Public} />
          </div>

        </div>
      </div>
    </>
  )
}

export default BlogEditor;