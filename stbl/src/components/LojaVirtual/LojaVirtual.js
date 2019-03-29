import React, { Component } from 'react'
import './lojaVirtualStyle.css';

class LojaVirtual extends Component {
  render() {
    return (
      <div className='container' style={{fontFamily: 'Montserrat'}}>
        <div className="bread">
          <a href="/home" >Home</a>
          <span className="arrow">&nbsp;&nbsp;/</span>
          <span>&nbsp;&nbsp;Loja Virtual</span>
        </div>

        <div className='row'>

          <div className="section-left-blog col-xs-12 col-sm-3 sidebar" >

            <div className="widget widget-recent-articles">

              <div className="widget-title">
                <h3>
                  <span>Categorias</span>
                </h3>
              </div>

              <div className="widget-content">
                <ul className='shop-menu'>
                  <li>
                      <a href="#">
                        Comos De Milano
                      </a>
                  </li>

                  <li>
                      <a href="#">
                        Lorem Et Dorus
                      </a>
                  </li>

                  <li>
                      <a href="#">
                        Lynn Cosmopolis
                      </a>
                  </li>

                  <li>
                      <a href="#">
                        Men
                      </a>
                  </li>

                  <li>
                      <a href="#">
                        Milancelos A Lanos
                      </a>
                  </li>

                  <li>
                      <a href="#">
                        New in
                      </a>
                  </li>

                  <li>
                      <a href="#">
                        Nor Loremirus
                      </a>
                  </li>

                  <li>
                      <a href="#">
                        Sale & Special Offers
                      </a>
                  </li>

                  <li>
                      <a href="#">
                        Top Brands
                      </a>
                  </li>

                  <li>
                      <a href="#">
                        Women
                      </a>
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

        </div>

        

      </div>
    )
  }
}

export default LojaVirtual