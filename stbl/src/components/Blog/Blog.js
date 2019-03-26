import React, { Component } from 'react'
import "./styleBlog.css"

class Blog extends Component {
  render() {
    return (
      <div className="blog container">
        <div className="bread">
          <a href="/home" >Home</a>
          <span className="arrow">&nbsp;&nbsp;/</span>
          <span>&nbsp;&nbsp;Blog</span>
        </div>
        <div className="row">
          <div className="section-left-blog col-xs-12 col-sm-3 sidebar" >

            <div className="widget widget-recent-articles">

              <div className="widget-title">
                <h3>
                  <span>Recentes Artigos</span>
                </h3>
              </div>

              <div className="widget-content">
                <ul>
                  <li className="article">
                    <p>
                      <a href="#">
                        <span>Dinterdum pretium es loremous dorus condimentus</span>
                      </a>
                      <em>30 de Maio, 2019</em>
                    </p>
                  </li>

                  <li className="article">
                    <p>
                      <a href="#">
                        <span>Naminos elementum disumos an cosmo tincidunts loremous</span>
                      </a>
                      <em>31 de Maio, 2019</em>
                    </p>
                  </li>

                  <li className="article">
                    <p>
                      <a href="#">
                        <span>Naminos elementum disumos an cosmo tincidunts loremous</span>
                      </a>
                      <em>01 de Junho, 2019</em>
                    </p>
                  </li>

                </ul>
              </div>
            </div>

            <div className="widget sidebar-banner">
              <img className="article_image" src="//cdn.shopify.com/s/files/1/1825/4753/files/banner-sidebar_4d990d2c-ebf8-45e8-8be8-fa104d13704f_1024x1024.jpg?v=1489938247" />
            </div>

            <div className="widget sidebar-cms-custom">
              <div className="widget-title">
                <h3>
                  <span>Custom block</span>
                </h3>
              </div>

              <div className="widget-content custom">
                <p>Custom CMS block displayed at the left sidebar on the Catalog Page. Put your own content here: text, html, images, media... whatever you like. There are many similar sample content placeholders across the store. All editable from admin panel. </p>
              </div>
            </div>

          </div>


          <div className="shopify-section col-xs-12 col-sm-9 col-main">

            <div className="page-header">
              <h1><span>BLOG</span></h1>
            </div>

            <div className="content-blog">
              <ul className="list-blog blog-list">
                <li>
                  <h3 className="article-title">
                    <a href="#">Dinterdum pretium es loremous dorus condimentus</a>
                  </h3>
                  <p className="blog_author">
                    <span className="article_date">
                      <time>30 de Maio, 2019</time>
                    </span>
                  </p>
                  <div className="article-details">
                    <p className="article-img">
                      <a href="#"><img className="article_image" src="//cdn.shopify.com/s/files/1/1825/4753/articles/img-blog-02_1024x1024_9b214c6e-abeb-48f5-8b3c-6d6b07cf3520_1024x1024.jpg?v=1527677937"></img></a>
                    </p>
                    <div className="rte article-excerpt">
                      <div className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis dan molestie, sem...
                      </div>
                      <p className="button">
                        <a className="btn-secondary" href="#">Read More</a>
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <h3 className="article-title">
                    <a href="#">Naminos elementum disumos an cosmo tincidunts loremous</a>
                  </h3>
                  <p className="blog_author">
                    <span className="article_date">
                      <time>31 de Maio, 2019</time>
                    </span>
                  </p>
                  <div className="article-details">
                    <p className="article-img">
                      <a href="#"><img className="article_image" src="//cdn.shopify.com/s/files/1/1825/4753/articles/img-blog-01_1024x1024_6d8d098a-b141-4ba3-8164-a1cdac8a998b_1024x1024.jpg?v=1527677840"></img></a>
                    </p>
                    <div className="rte article-excerpt">
                      <div className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis dan molestie, sem...
                      </div>
                      <p className="button">
                        <a className="btn-secondary" href="#">Read More</a>
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <h3 className="article-title">
                    <a href="#">Naminos elementum disumos an cosmo tincidunts loremous</a>
                  </h3>
                  <p className="blog_author">
                    <span className="article_date">
                      <time>31 de Maio, 2019</time>
                    </span>
                  </p>
                  <div className="article-details">
                    <p className="article-img">
                      <a href="#"><img className="article_image" src="//cdn.shopify.com/s/files/1/1825/4753/articles/img-blog-03_1_1024x1024_ae1f4a54-cc95-4f5f-9bcd-f7f529d1466e_1024x1024.jpg?v=1527677695"></img></a>
                    </p>
                    <div className="rte article-excerpt">
                      <div className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis dan molestie, sem...
                      </div>
                      <p className="button">
                        <a className="btn-secondary" href="#">Read More</a>
                      </p>
                    </div>
                  </div>
                </li>


              </ul>

              <ul className="pagination-page">

              </ul>




            </div>





          </div>





        </div>
      </div>
    )
  }
}

export default Blog