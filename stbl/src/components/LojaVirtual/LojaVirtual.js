import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Produto from '../Produto/Produto';
import './lojaVirtualStyle.css';

class LojaVirtual extends Component {
  //State altera menu lateral de categorias
  state = {
    categoryIndex: 0, //Aponta um indice da lista de categorias
    itemOver: null, //Dinamiza hover do menu de categoiras
    dropped: false //State para menu do modo mobile
  }


  render() {

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

      if (this.state.dropped) {
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
                  this.setState({
                    dropped: (this.state.dropped) ? false : true
                  })
                }}>{bntTxt} <span style={dropArrow}></span></button>

                {/* Lista para menu de categorias
                itens são renderizados dinamicamentes através da lista de categorias (ultimas linhas)
              */}
                <ul className='shop-menu' style={visibility}>

                  {

                    //Categories = lista de objetos
                    categories.map((object) => {
                      return (<li>
                        {/* Marcador dinâmico surge para categoria clicada e hover*/}
                        <span className="seta-direita" style={this.state.categoryIndex === object.index || this.state.itemOver === object.index ? { display: "inline" } : { display: "none" }} ></span>


                        {/*Botão que seta a categoria, renderizando novos produtos (ainda n implementado) */}
                        <button onClick={() => { this.setState({ categoryIndex: object.index }) }} onMouseOver={() => { this.setState({ itemOver: object.index }) }} onMouseOut={() => { this.setState({ itemOver: null }) }}>
                          {object.title}
                        </button>
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
              <a href="#"><img className="article_image" src="https://cdn.shopify.com/s/files/1/1825/4753/files/img_cat_022eb85c-e4c3-466c-a638-1b67c31d6bc8.jpg?v=1490539957"></img></a>
            </p>

            <div className="page-header">
              {/*Título da categoria, muda dependendo do state que é setado pelo menu*/}
              <h1><span>{categories[this.state.categoryIndex].title}</span></h1>
            </div>

            <p className='desc'>
              {/* Descrição da categoria, muda dependendo do state que é setado pelo menu*/}
              {categories[this.state.categoryIndex].descri}
            </p>

            <hr />
            {/*Componentes provisórios, substituir por renderização dinâmica*/}

            <div className="listaProduto">
              <ul className="nav container d-flex">
                <li className="pro-lv nav-item ">
                  <Produto id={"id1"} img={"https://qbbr.vteximg.com.br/arquivos/ids/160367-1000-1000/batom-liquido-mate-metalico-azuluz-aberto.jpg?v=636247775539130000"} titulo={"Batom Líquido Mate Metálico Azuluz"}
                    marca={"Avon"} preco={27.99} estoque={false} tipoProduto={"Batom"} descricao={"O batom líquido mate metálico tem alta cobertura, longa duração e pigmentos metálicos intensos para os lábios. Além disso, ele não escorre e nem transfere. São 5 cores lindas pra você se jogar!"} multiColor={true} />
                </li>
                <li className="pro-lv nav-item">
                  <Produto id={"id2"} img={"https://qbbr.vteximg.com.br/arquivos/ids/160437-1000-1000/batom-liquido-mate-metalico-vermeluz-aberto.jpg?v=636259455546800000"} titulo={" Líquido Mate Metálico Vermeluz"}
                    marca={"Avon"} preco={227.99} estoque={true} tipoProduto={"Batom"} descricao={"O batom líquido mate metálico tem alta cobertura, longa duração e pigmentos metálicos intensos para os lábios. Além disso, ele não escorre e nem transfere. São 5 cores lindas pra você se jogar!"} multiColor={true} />
                </li>
                <li className="pro-lv nav-item">
                  <Produto id={"id3"} img={"https://qbbr.vteximg.com.br/arquivos/ids/156065-1000-1000/primer-instamatte-quem-disse-berenice-30g_1_812781.jpg?v=636046099692370000"} titulo={"Primer Instamatte 30g"}
                    marca={"Quem disse berenice"} preco={237.99} estoque={false} tipoProduto={"Creme para a pele"} descricao={"O primer Instamatte é uma inovação pra quem curte ficar bem na foto. Ele é um primer que matifica a pele instantaneamente. Outra super novidade é o efeito blur (se fala blâr) que disfarça as marquinhas e ruguinhas através de partículas difusoras de luz. Sua pele lisinha e sem brilho, pra você fica bem na foto e na festa! Se joga."} multiColor={false} />
                </li>
                <li className="pro-lv nav-item">
                  <Produto id={"id4"} img={"https://qbbr.vteximg.com.br/arquivos/ids/157964-1000-1000/hidratante-facial-tchau-pros-poros_814491.jpg?v=636069540312330000"} titulo={"Hidratante Facial Tchau Poros 40Ml"}
                    marca={"Natura"} preco={954.99} estoque={true} tipoProduto={"Hidratante"} descricao={"Hidratante facial Antioxidante. Efeito detox hidratação até 30 horas. Aumento de colágeno – que deixa a pele mais firme."} multiColor={false} />
                </li>
                <li className="pro-lv nav-item">
                  <Produto id={"id5"} img={"https://qbbr.vteximg.com.br/arquivos/ids/156687-1000-1000/Blush-quem-disse-berenice_1_810125.jpg?v=636046197936000000"} titulo={"Blush QDB"}
                    marca={"Natura"} preco={1165.99} estoque={true} tipoProduto={"Blush"} descricao={"A gente adora blush. Afinal, uma corzinha nas bochechas levanta qualquer astral, não é mesmo? Então resolvemos criar várias cores pra você experimentar e variar. Por ter uma textura super fininha o blush QDB tem uma ótima fixação na pele dá aquele efeito natural e saudável. Viva!!"} multiColor={true} />
                </li>
                <li className="pro-lv pro-lv nav-item">
                  <Produto id={"id6"} img={"https://qbbr.vteximg.com.br/arquivos/ids/160473-488-488/pigmento-liquido-metalico-pra--olhos-peroluz-aberto.jpg?v=636259716125170000"} titulo={"Pigmento Líquido Metálico Pra Olhos Peroluz"}
                    marca={"Avon"} preco={27.99} estoque={true} tipoProduto={"Sombra"} descricao={"Os pigmentos deixam qualquer maquiagem mais bonita, ainda mais quando combinados com uma sombra esfumada, não é mesmo? O pigmento líquido metálico une o melhor dos dois: o efeito do pigmento e a facilidade de esfumar da sombra em pó. Incrível, né? Ele é líquido, mas ao secar parece pó, dura 10 horas e o efeito metalizado ilumina o olhar e fica ainda mais lindo esfumado. Além disso, é fácil de aplicar e por ser à base d’água, é fácil de retirar também! Tá esperando o que pra testar?"} multiColor={true} />
                </li>
                <li className="pro-lv nav-item">
                  <Produto id={"id7"} img={"https://qbbr.vteximg.com.br/arquivos/ids/160205-1000-1000/Lapis-Contorno-Labial-Incolor.jpg?v=636216593706530000"} titulo={"Lápis Barreira Invisível Labial 1.1g - Lápis Barreira Invisível Labial 1.1G"}
                    marca={"Avon"} preco={227.99} estoque={false} tipoProduto={"Lápis"} descricao={"O lápis barreira invisível pode ser usado pra contornar os lábios, criando uma película que ajuda o batom a não borrar no momento da aplicação. Ele também pode ser usado como primer, para segurar o batom no lugar por muito mais tempo."} multiColor={false} />
                </li>
                <li className="pro-lv nav-item">
                  <Produto id={"id8"} img={"https://qbbr.vteximg.com.br/arquivos/ids/162619-1000-1000/Po_Translucido_Antibrilho_Amarele_1_819436.jpg?v=636493784569670000"} titulo={"Pó Translucido Instamatte Amarelê"}
                    marca={"Quem disse berenice"} preco={237.99} estoque={true} tipoProduto={"Creme para a pele"} descricao={"Com textura ultrafina e aveludada, o pó translúcido solto matifica a pele instantaneamente! Reduz a aparência dos poros e linhas de expressão e controla a oleosidade do rosto ao longo do dia! Sua pele sequinha e sem brilho por até 6 horas! Demais, né? Ah! E por ele ter uma corzinha, também ajuda a uniformizar o tom da sua pele. Encontrar a sua cor é fácil:"} multiColor={false} />
                </li>
                <li className="pro-lv nav-item">
                  <Produto id={"id9"} img={"https://qbbr.vteximg.com.br/arquivos/ids/162616-1000-1000/Primer_instamatte_bastao_1_819435.jpg?v=636493782540300000"} titulo={"Primer instamatte bastão"}
                    marca={"Natura"} preco={954.99} estoque={true} tipoProduto={"Primer"} descricao={"A gente adora uma pele bem sequinha e por isso, resolvemos trazer o nosso primer instamatte no formato bastão! O primer instamatte em bastão matifica a pele instantaneamente, sem falar do efeito blur (se fala blâr), que disfarça as marquinhas, poros e ruguinhas através de partículas difusoras de luz. Sua pele lisinha e sem brilho a qualquer hora!"} multiColor={false} />
                </li>
                <li className="pro-lv nav-item">
                  <Produto id={"id10"} img={"https://qbbr.vteximg.com.br/arquivos/ids/155598-1000-1000/Base-Alta-Cobertura-Quem-disse-berenice_1_813778.jpg?v=636045408136970000"} titulo={"Base Alta Cobertura"}
                    marca={"Natura"} preco={1165.99} estoque={false} tipoProduto={"Base"} descricao={"A base alta cobertura é ideal para quem quer cobrir todas as marquinhas. Ela tem alta cobertura, efeito mate, FPS 15 e dura o dia inteiro! Além de possuir ingredientes especiais que absorvem a oleosidade da pele e não obstruem os poros, ela não transfere e é resistente à água e ao suor!"} multiColor={true} />
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    )
  }
}


const categories = [
  { title: "Comos De Milano", descri: "Categoria 1", index: 0, request: "#" },
  { title: "Lorem Et Dorus", descri: "Categoria 2", index: 1, request: "#" },
  { title: " Lynn Cosmopolis", descri: "Categoria 3", index: 2, request: "#" },
  { title: "Men", descri: "Categoria 4", index: 3, request: "#" },
  { title: " Milancelos A Lanos", descri: "Categoria 5", index: 4, request: "#" },
  { title: "New in", descri: "Categoria 6", index: 5, request: "#" },
  { title: "Nor Loremirus", descri: "Categoria 7", index: 6, request: "#" },
  { title: "Sale & Special Offers", descri: "Categoria 8", index: 7, request: "#" },
  { title: "Top Brands", descri: "Categoria 9", index: 8, request: "#" },
  { title: "Women", descri: "Categoria 10", index: 9, request: "#" },
]

export default LojaVirtual