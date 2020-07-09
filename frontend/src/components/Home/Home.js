import React, { Component } from 'react';
import ListaProduto from "../Produto/ListaProduto";
import { Link } from "react-router-dom";
import SliderCenter from '../Slider/SliderCenter';
import Banner from '../Images/Banner-1.jpg';
import Cuidados from '../Images/cuidados.jpg';
import Mq1 from '../Images/mais.jpg';
import Mq2 from '../Images/maquiagem.jpg';
import Apr from '../Images/apresentLogo.png';
import Logos from '../Images/logos.png';
import Sete from '../Images/sete.jpg';
import Banner3 from '../Images/banner3.jpg';
import api from '../API/api';

class Home extends Component {
  state = {
    novidades: [],
    promocoes: [],
  }

  componentWillMount(){
    api.get('/mostrarprodutopromocao/1').then(res => {
      res.data.map((obj)=>{
        //Remove o path da imagem e seta como o link dela
        obj.img = obj.img_url;
        return true
      });

      this.setState({ promocoes: res.data });
    })

    api.get('/mostrarprodutonovidade/1').then(res => {
      res.data.map((obj)=>{
        //Remove o path da imagem e seta como o link dela
        obj.img = obj.img_url;
        return true
      });

      this.setState({ novidades: res.data });
    })
  }

  render(){
    return(
      <div>
        <header className="banner">
          <img className="d-block w-100" src={Banner} style={{maxHeight:"95vh"}} alt='img-banner-1'/>
          <div>
            <div className='banner-paragrafo' style={{color:"white"}}>
              <div className="animated fadeInUp">
                <h1 className='banner-titulo spotlight'>VENHA CONHECER A NOSSA LOJA</h1>
                <div className='divider mobile-hide'> </div>
              </div>
        
              <p className='banner-texto discreet-arimo animated fadeInUp delay-1s'>#7tonsDeBeleza</p>
              <p className="button-pri">
                <Link to="/lojavirtual">LOJA VIRTUAL<span/></Link>
              </p>
            </div>
          </div>
        </header>            
            
        <div className='d-block container justify-content-between undercard' style={{marginBottom: '60px'}}>
          {/*Divisão em 3 cards, texto sobreposto em background*/}

          <div className='card-deck card-d'>                    
            <div className='card border-light bg-dark text-white text-center wow fadeInUp faster'>
              <img src={Mq2} style={{maxHeight:"200px"}} alt='img-card'/>
              <div style={{top:"35px"}} className='card-img-overlay'>
                <h2 className="spotlight subtitle-montserrat">Maquiagens</h2>
              </div>
            </div>

            <div className='card border-light bg-dark text-center wow fadeInUp fast'>
              <img src={Cuidados} style={{maxHeight:"200px"}} alt='img-card'/>
              <div style={{top:"35px"}} className='card-img-overlay'>
                <h2 className="spotlight subtitle-montserrat">Cuidados</h2>
              </div>
            </div>

            <div className='card border-light bg-dark text-white text-center wow fadeInUp'>
              <img src={Mq1} style={{maxHeight:"200px"}} alt='img-card'/>
              <div style={{top:"35px"}} className='card-img-overlay'>
                <h2 className="spotlight subtitle-montserrat">E Muito +</h2>
              </div>
            </div>

          </div>
        </div>

        {
          this.state.promocoes.length > 0 ?

          <div className='container'>
            <div className=' d-flex flex-row justify-content-center align-items-center text-center d-flex'>
              <div className='col'><hr/></div>
              <div className='col-md-auto spotlight wow fadeIn'>Promoções</div>
              <div className='col'><hr/></div>
            </div>

            <ListaProduto list={this.state.promocoes} addCarrinho={this.props.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho} carrinho={this.props.carrinho} />
                
          </div> : null
        }

        <div id="sobreALoja" className='banner wow fadeInUp' style={{ minHeight: '90vh'}} >
          <img className="d-block w-100" src={Banner3} alt='img-card'/>
          <div className="wow slideInLeft">
            <div className='justify-content-center text-center'>                            
              <div className='banner-paragrafo2 banner-paragrafo-rightinle'>
                <h2 className='spotlight banner-titulo-natural'>SOBRE A LOJA</h2>
                <div className='divider'></div>
                <p className='banner-texto-inline discreet-arimo'>Somos a <strong>7 Tons de Beleza</strong> surgimos com o desejo de despertar nas pessoas as emoções transformadoras que a maquiagem causa, possibilitanddo um momento mágico onde tudo é possível. O importante é ser feliz!</p>

                <p className='banner-texto-inline discreet-arimo'>A Maquiagem traz mudanças que estão muito além do que os olhos podem ver. Ela é uma ferramenta fundamental na autoestima, desperta confiança, independência e nos leva a uma sensação de bem-estar.</p>

                <p className='banner-texto-inline discreet-arimo'>Acreditamos que o importante é que nossos clientes se sintam bem consigo mesmos e com as pessoas ao seu redor</p>

                <p className='banner-texto-inline discreet-arimo'>Nossa razão de existir é proporcionar um lugar para esquecer as diferenças e estimular a felicidade. Assim surgiu a 7 Tons, uma loja para todas as formas de beleza!</p>

                <p className='banner-texto-inline discreet-arimo'>Sonhe, Sinta e Seja Feliz!</p>

                <p className="button-pri"><Link to="/lojavirtual">CONHEÇA NOSSA LOJA<span/></Link></p>
              </div>
            </div>
          </div>
        </div>

        {
          this.state.novidades.length > 0 ?
          <div className='container undercard'>
            <div className=' d-flex flex-row justify-content-center align-items-center text-center d-flex'>
              <div className='col'><hr/></div>
              <div className='col-md-auto spotlight wow fadeIn'> Novidades </div>
              <div className='col'><hr/></div>
            </div>

            <ListaProduto list={this.state.novidades} addCarrinho={this.props.addCarrinho} atualizarQtdCarrinho={this.props.atualizarQtdCarrinho} removerCarrinho={this.props.removerCarrinho} carrinho={this.props.carrinho} />
        
          </div> : null
        }

        <div id="sobre7tons" className='container'>
          <div className='p-4 d-flex flex-row justify-content-center align-items-center text-center d-flex'>
            <div className='col'><hr/></div>
            <div className='col-md-auto spotlight wow fadeIn'>Sobre a Marca</div>
            <div className='col'><hr/></div>
          </div>

          <div className='card-deck text-center'>
            <div className='card border-0 wow fadeInUp faster'>
              <img className='card-img-top' src={Apr} alt='img-card'/>
                            
              <div className='card-body'>
                <h3 className='card-title spotlight subtitle-montserrat'>NOSSO NOME</h3>
                <p className='card-text discreet-arimo' style={{height: '120px'}}>O conceito desse nome está visivelmente ligado à ideia de que o cliente é responsável por redefinir e construir sua própria autoestima com a ajuda dos produtos da loja.</p>
                <p className="button-pri"><Link to="/lojavirtual">visitar loja <span/></Link></p>
              </div>

            </div>

            <div className='card border-0 wow fadeInUp fast'>
              <img className='card-img-top' src={Sete} alt='img-card'/>
                            
              <div className='card-body'>
                <h3 className='card-title spotlight subtitle-montserrat'>7 (SETE)</h3>
                <p className='card-text discreet-arimo' style={{height: '120px'}}>Julgamos um número mágico e místico por importância. O sete é perfeição.</p>
                <p className="button-pri">
                  <Link to="/lojavirtual">visitar loja <span/></Link>
                </p>
              </div>
            </div>

            <div className='card border-0 wow fadeInUp'>
              <img className='card-img-top' src={Logos} alt='img-card'/>
                                
              <div className='card-body'>
                <h3 className='card-title spotlight subtitle-montserrat'>TONS DE BELEZA</h3>
                <p className='card-text discreet-arimo' style={{height: 'auto'}}>Tons que refletem a essência de ser brasileiro. A tropicalidade que enriquece a pele, o rosto e alma. Os traços trazem o empoderamento, equilíbrio, autoestima e identidade. Brasil é um país perfeito por mistura de raças, transformando as mulheres brasileiras nas mais belas. Dessa forma, marca a natureza do nome <strong>7 Tons de Beleza</strong> </p>
                <p className="button-pri"><Link to="/lojavirtual">visitar loja<span/></Link></p>
              </div>
            </div>

          </div>

        </div>

        <div className='pink-card'>
          <div className='container text-center'>
            <h3 className="pink-card-title"> 7 Tons de Beleza no instagram</h3>
            <p className='discreet-arimo'>Acompanhe nossa loja física na rede social em @7tonsdebeleza.</p>
                    
            <SliderCenter lista={imagesInst} large={true}/>

            <p className="button-pri"><a href="https://www.instagram.com/7tonsdebeleza/?hl=pt-br" target="_blank" rel="noopener noreferrer" >VISITAR GALERIA <span/></a></p>
                    
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

const imagesInst = [
    (<img src='https://instagram.ffor15-1.fna.fbcdn.net/v/t51.2885-15/e35/83944431_1442992535867541_3666757036980951424_n.jpg?_nc_ht=instagram.ffor15-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=Yh0gexUi-48AX-Co0wR&oh=42ce1308f70d9126f61147a31f05ca08&oe=5F30FA0D' alt='instagram image1' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://instagram.ffor15-1.fna.fbcdn.net/v/t51.2885-15/e35/84434530_237786930578740_5844669268744842502_n.jpg?_nc_ht=instagram.ffor15-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=mCmEjMthcuAAX8VhMPt&oh=74cbd41598ada59d54842f8248e0a148&oe=5F2F3D26' alt='instagram image2' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://instagram.ffor15-1.fna.fbcdn.net/v/t51.2885-15/e35/82182990_189738182343790_5717396868312932372_n.jpg?_nc_ht=instagram.ffor15-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=fiCTLA8B-aEAX8_2SaR&oh=108831ca65ae796d61a8f5a0b755a3cb&oe=5F2FC391' alt='instagram image3' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://instagram.ffor15-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/85041661_666180170791325_8456388879783590449_n.jpg?_nc_ht=instagram.ffor15-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=DuIRgclhw10AX_mLoPt&oh=1900373766ecb53c8a1b548f44660721&oe=5F300018' alt='instagram image4' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://instagram.ffor15-1.fna.fbcdn.net/v/t51.2885-15/e35/84966390_184679492809073_6508670658211222983_n.jpg?_nc_ht=instagram.ffor15-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=HDt3BV5brY0AX-vptGb&oh=354bb1ebaa122de1fd9f1884b394f3b9&oe=5F2F6FD1' alt='instagram image5' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://instagram.ffor15-1.fna.fbcdn.net/v/t51.2885-15/e35/84030964_608926876337004_5188085532859743400_n.jpg?_nc_ht=instagram.ffor15-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Ed-6fRqiw1UAX_kiMpG&oh=60758da1aa3cd2e1982ad333930f3403&oe=5F2FD964' alt='instagram image6' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://instagram.ffor15-1.fna.fbcdn.net/v/t51.2885-15/e35/85127084_101949294708281_4533182564647832042_n.jpg?_nc_ht=instagram.ffor15-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QbQn6DdmKvgAX9BcAUp&oh=d0efc7bf58d7a1f55613482f4bbdebf1&oe=5F2FE523' alt='instagram image7' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
]
