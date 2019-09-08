import React, { Component } from 'react';
//import ListaProduto from "../Produto/ListaProduto";
import { Link } from "react-router-dom";
import SliderCenter from '../Slider/SliderCenter';
import BrandsList from '../Marcas/MarcasList';
import Banner from '../Images/Banner-1.jpg';
import Cuidados from '../Images/cuidados.jpg';
import Mq1 from '../Images/maquiagem1.jpg';
import Mq2 from '../Images/maquiagem2.jpg';


class Home extends Component {
    render(){
        return(
        <div>
            <div className="banner">
                <img className="d-block w-100" src={Banner} style={{maxHeight:"95vh"}} alt='img-banner-1'/>
                    <div>
                        <div className='banner-paragrafo' style={{color:"white"}}>
                            <div className="animated fadeInUp">
                                <h1 className='banner-titulo spotlight'>VENHA CONHECER A NOSSA LOJA</h1>
                                <div className='divider mobile-hide'> </div>
                            </div>
        
                            <p className='banner-texto discreet-arimo animated fadeInUp delay-1s'>#7tonsDeBeleza</p>

                            {/*
                                Botão dentro do banner, span = seta
                            */}

                            <p className="button-pri">
                                <Link to="/lojavirtual">LOJA VIRTUAL<span/></Link>
                            </p>
                        </div>
                    </div>
            </div>            
            
            {/*Div para primeiro card*/}
            <div className='container justify-content-between undercard'>
                {/*Divisão em 3 cards, texto sobreposto em background*/}

                <div className='card-deck'>
                    
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

            <div className='container'>
                {/*Div para segundo card com breve lista de produtos*/}
                <div className='p-4 d-flex flex-row justify-content-center align-items-center text-center d-flex'>
                    <div className='col'><hr/></div>
                    <div className='col-md-auto spotlight wow fadeIn'>Lançamentos</div>
                    <div className='col'><hr/></div>
                </div>

                {
                    /* Renderizando dinamicamente parte dos produtos da lista
                    esquema provisório


                    <ListaProduto list={[this.props.dados[0],this.props.dados[1],this.props.dados[2],this.props.dados[3],this.props.dados[4]]} addCarrinho={this.props.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho}/>

                    */
                }
             
                
            </div>


            <div className='banner wow fadeInUp'>
                <img className="d-block w-100" src='https://cdn.shopify.com/s/files/1/1825/4753/files/banner_2000x.jpg?v=1489329262' alt='img-card'/>
                    <div className="wow slideInLeft">

                        <div className='justify-content-center text-center'>
                            
                            <div className='banner-paragrafo banner-paragrafo-rightinle'>
                                <h2 className='spotlight banner-titulo-natural'>SOBRE A MARCA</h2>
                                <div className='divider'></div>
                                <p className='banner-texto-inline discreet-arimo'>Somos a <strong>7 Tons de Beleza</strong> surgimos em 2019 com o desejo de despertar nas pessoas as emoções transformadoras que a maquiagem causa, possibilitanddo um momento mágico onde tudo é possível. O importante é ser feliz!</p>

                                <p className='banner-texto-inline discreet-arimo'>A Maquiagem traz mudanças que estão muito além do que os olhos podem ver. Ela é uma ferramenta fundamental na autoestima, desperta confiança, independência e nos leva a uma sensação de bem-estar.</p>

                                <p className='banner-texto-inline discreet-arimo'>Acreditamos que o importante é que nossos clientes se sintam bem consigo mesmos e com as pessoas ao seu redor</p>

                                <p className='banner-texto-inline discreet-arimo'>Nossa razão de existir é proporcionar um lugar para esquecer as diferenças e estimular a felicidade. Assim surgiu a 7 Tons, uma loja para todas as formas de beleza!</p>

                                <p className='banner-texto-inline discreet-arimo'>Sonhe, Sinta e Seja Feliz!</p>

                                {/*
                                    Botão dentro do banner,
                                    span = seta;
                                */}

                                <p className="button-pri">
                                    <Link to="/lojavirtual">CONHEÇA NOSSA LOJA<span/></Link>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='container undercard' style={{marginTop: "20%"}}>
                {/*Div para quarto card com breve lista de produtos*/}
                <div className=' d-flex flex-row justify-content-center align-items-center text-center d-flex'>
                    <div className='col'><hr/></div>
                    <div className='col-md-auto spotlight wow fadeIn'>em alta</div>
                    <div className='col'><hr/></div>
                </div>

                {
                    /* Renderizando dinamicamente parte dos produtos da lista
                    esquema provisório
                    
                    <ListaProduto list={[this.props.dados[5],this.props.dados[6],this.props.dados[7],this.props.dados[8],this.props.dados[9]]} addCarrinho={this.props.addCarrinho} atualizarQtdCarrinho={this.props.atualizarQtdCarrinho} removerCarrinho={this.props.removerCarrinho}/>
                    */
                }

                
                
                
            </div>

            <div className='container'>
                {/*Div para quinto card*/}
                <div className='p-4 d-flex flex-row justify-content-center align-items-center text-center d-flex'>
                    <div className='col'><hr/></div>
                    <div className='col-md-auto spotlight wow fadeIn'>Sobre a 7 Tons de Beleza</div>
                    <div className='col'><hr/></div>
                </div>

                <div className='card-deck text-center'>
                    <div className='card border-0 wow fadeInUp faster'>
                        <img className='card-img-top' src="https://cdn.shopify.com/s/files/1/1825/4753/files/banner-home-bottom-1_400x_10ac45b6-ec14-46f8-84f3-589ed39f6647_400x.jpg?v=1494707881" alt='img-card'/>
                            
                        <div className='card-body'>
                            <h3 className='card-title spotlight subtitle-montserrat'>NOSSO NOME</h3>
                            <p className='card-text discreet-arimo' style={{height: '120px'}}>O conceito desse nome está visivelmente ligado à ideia de que o cliente é responsável por redefinir e construir sua própria autoestima com a ajuda dos produtos da loja.</p>
                            <p className="button-pri">
                                <Link to="/lojavirtual">visitar loja <span/></Link>
                            </p>
                        </div>

                    </div>

                    <div className='card border-0 wow fadeInUp fast'>
                        <img className='card-img-top' src="https://cdn.shopify.com/s/files/1/1825/4753/files/banner-home-bottom-2_400x_ba51370d-324f-49fb-a74e-810425df2719_400x.jpg?v=1494707890" alt='img-card'/>
                            
                        <div className='card-body'>
                            <h3 className='card-title spotlight subtitle-montserrat'>7 (SETE)</h3>
                            <p className='card-text discreet-arimo' style={{height: '120px'}}>Julgamos um número mágico e místico por importância. O sete é perfeição.</p>
                            <p className="button-pri">
                                <Link to="/lojavirtual">visitar loja <span/></Link>
                            </p>
                        </div>
                    </div>

                    <div className='card border-0 wow fadeInUp'>

                        <img className='card-img-top' src="https://cdn.shopify.com/s/files/1/1825/4753/files/banner-home-bottom-3_400x_da7ecf24-e8c0-42a2-a2e3-db4bcc53e6a8_400x.jpg?v=1494707900" alt='img-card'/>
                                
                        <div className='card-body'>
                            <h3 className='card-title spotlight subtitle-montserrat'>TONS DE BELEZA</h3>
                            <p className='card-text discreet-arimo' style={{height: '120px'}}>Tons que refletem a essência de ser brasileiro. A tropicalidade que enriquece a pele, o rosto e alma. Os traços trazem o empoderamento, equilíbrio, autoestima e identidade. Brasil é um país perfeito por mistura de raças, transformando as mulheres brasileiras nas mais belas. Dessa forma, marca a natureza do nome <strong>7 Tons de Beleza</strong> </p>
                            <p className="button-pri">
                                <Link to="/lojavirtual">visitar loja<span/></Link>
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='container'>
                <hr/>

                    <SliderCenter lista={BrandsList}/>

            </div>

            <div className='pink-card'>
                <div className='container text-center'>
                    {/*Ùltimo card*/}
                    <h3 className="pink-card-title"> 7 Tons de Beleza no instagram</h3>
                    <p className='discreet-arimo'>Phasellus lorem malesuada ligula pulvinar commodo maecenas suscipit auctom.</p>
                    
                    <SliderCenter lista={imagesInst} large={true}/>

                    <p className="button-pri">
                       <Link to="#">VISITAR GALERIA <span/></Link>
                    </p>
                    
                </div>
            </div>
            

        </div>
        )
    }
}

export default Home;

const imagesInst = [
    (<img src='https://scontent.cdninstagram.com/vp/a97004e7f2d8ac92327c64ea63170a77/5D492033/t51.2885-15/e35/s320x320/18444181_1886201831627903_2441734322760187904_n.jpg?_nc_ht=scontent.cdninstagram.com' alt='instagram image1' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://ae01.alicdn.com/kf/HTB1z9dtSXXXXXbXapXXq6xXFXXXV/TARGE-E-tumblr-FRIO-cinza-Camisolas-Mulheres-Moda-Casual-de-Manga-Comprida-camisas-de-Algod-o.jpg' alt='instagram image2' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://scontent.cdninstagram.com/vp/5416f2b1d7cac0d7b0a6a28a9ff3b74a/5D4D6D63/t51.2885-15/e35/s320x320/18300169_253564125112912_73006081730674688_n.jpg?_nc_ht=scontent.cdninstagram.com' alt='instagram image3' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://scontent.cdninstagram.com/vp/de32ee5acffe6db412f1b619519ec158/5D47610A/t51.2885-15/e35/s320x320/18300169_1838895596373697_5209167543268278272_n.jpg?_nc_ht=scontent.cdninstagram.com' alt='instagram image4' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://i.pinimg.com/736x/a1/e1/ba/a1e1ba1ce1c8af8d190045c701bbf81d.jpg' alt='instagram image5' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
]