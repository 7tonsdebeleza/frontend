import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import ListaProduto from '../Produto/ListaProduto';
import './lojaVirtualStyle.css';
import BannerLV from '../Images/bannerlv.jpg';
import api from '../API/api';

function LojaVirtual({ addCarrinho, match }) {

  const [categoryIndex, setCaregory] = useState(0);
  const [itemOver, setItemOver] = useState(null);
  const [dropped, setDropped] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let categoriaAdress;
    if (match.params.categoria) {
      categoriaAdress = match.params.categoria.toString().toLowerCase()
    } else {
      categoriaAdress = 'todos';
    }

    let categoriaIndex = categories.findIndex((cat) => cat.title.toLowerCase() === categoriaAdress);
    categoriaIndex = categoriaIndex === -1 ? 0 : categoriaIndex;

    async function fetchPage1() {
      setCaregory(categoriaIndex);
      await api.get(`${categories[categoriaIndex].request}/1`).then(res => {
        res.data.forEach((obj) => {
          //Remove o path da imagem e seta como o link dela
          obj.img = obj.img_url;
        });

        setProdutos(res.data);

      }).catch(e => {
        console.log(e);
        alert("Erro ao tentar carregar produtos... Tente novamente mais tarde!");

      });
    }

    fetchPage1();

    async function fetchNextPage() {
      await api.get(`${categories[categoryIndex].request}/${page + 1}`).then(res => {
        if (res.data.length > 0) {
          res.data.forEach((obj) => {
            //Remove o path da imagem e seta como o link dela
            obj.img = obj.img_url;
          });
          const newProdutos = produtos.concat(res.data);
          setProdutos(newProdutos);
          setPage(page + 1);

        }
      }).catch(error => {
        console.log(error);

      });
    }

    async function watchScroll() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        await fetchNextPage();
      }
    }

    window.onscroll = watchScroll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  let visibility;
  let bntTxt;
  let dropArrow;

  //Modo mobile

  //Checando modo mobile para evitar remover lista em desktop
  if (window.innerWidth > 574) {

    visibility = {
      display: 'inline',
    };

  } else {

    if (dropped) {
      //Itens da lista do menu ficam visíveis
      visibility = {
        display: 'inline',
      };

      //Texto muda para "esconder"
      bntTxt = "Esconder";

      //Seta para cima
      dropArrow = {
        content: "",
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '10px',
        width: '0',
        height: '0',
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderBottom: '5px solid black',
      }

    } else {
      visibility = {
        display: 'none',
      }

      //Texto muda para "esconder"
      bntTxt = "Mostrar";

      //Seta para baixo
      dropArrow = {
        content: "",
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '10px',
        width: 0,
        height: 0,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: '5px solid rgb(33, 37, 41)',
      }
    }
  }


  return (
    <div className='container' style={{ fontFamily: 'Montserrat' }}>

      {/*Links abaixo da navbar*/}
      <div className="bread">
        <Link to="/home" >Home</Link>
        <span className="arrow">&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;Loja Virtual</span>
      </div>

      {/*Organização em linha para sessão lateral*/}

      <div className='row'>

        {/*sessão lateral à esquerda para menu de categorias*/}

        <div className="section-left-blog col-xs-12 col-sm-3 sidebar" >

          <div className="widget widget-recent-articles">
            <div className="widget-title">
              <h3>
                <span className="shop-menu-title">Categorias</span>
              </h3>
            </div>

            <div className="widget-content">
              {/*Botão para abrir menu na versão mobile*/}
              <button className='shop-menu-mobile-control' onClick={() => {
                setDropped(!dropped)
              }}>{bntTxt} <span style={dropArrow}></span></button>

              {/* Lista para menu de categorias
              itens são renderizados dinamicamentes através da lista de categorias (ultimas linhas)
            */}
              <ul className='shop-menu' style={visibility}>

                {
                  //Categories = lista de objetos
                  categories.map((object) => {
                    return (<li key={object.index}>
                      {/* Marcador dinâmico surge para categoria clicada e hover*/}
                      <span className="seta-direita" style={categoryIndex === object.index || itemOver === object.index ? { display: "inline" } : { display: "none" }} ></span>


                      {/*Botão que seta a categoria, renderizando novos produtos (ainda n implementado) */}
                      <span onMouseOver={() => { setItemOver(object.index) }} onMouseOut={() => { setItemOver(null) }}>
                        <Link to={`/lojavirtual/${object.title}`} style={{ textDecoration: 'none', color: '#222222' }}>{object.title}</Link>
                      </span>
                    </li>)
                  })
                }

              </ul>
            </div>
          </div>

        </div>

        {/* Espaço da descrição da categoria selecionada e produtos*/}

        <div className="shopify-section col-xs-12 col-sm-9 col-main">

          {/*Banner*/}

          <p>
            <Link to="#"><img className="article_image article_image d-block w-100" src={BannerLV} alt='Banner loja virtual' /></Link>
          </p>

          <div className="page-header">
            {/*Título da categoria, muda dependendo do state que é setado pelo menu*/}
            <h1><span>{categories[categoryIndex].title}</span></h1>
          </div>

          <p className='desc'>
            {/* Descrição da categoria, muda dependendo do state que é setado pelo menu*/}
            {categories[categoryIndex].descri}
          </p>

          <hr />
          {/*Produtos com renderização dinâmica:*/}
          <ListaProduto list={produtos} addCarrinho={addCarrinho} />
        </div>

      </div>

    </div>
  )

}

const categories = [
  { title: "Todos", descri: "Todos os produtos do nosso catálogo", index: 0, request: '/mostrartodosprodutos' },
  { title: "Promoções", descri: "Promoções especiais", index: 1, request: '/mostrarprodutopromocao' },
  { title: "Novidades", descri: "Lançamentos na Loja 7 Tons de Beleza", index: 2, request: '/mostrarprodutonovidade' },
]

export default withRouter(LojaVirtual);