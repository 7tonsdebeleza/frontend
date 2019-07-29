import React, { Component } from 'react';
import ListaProduto from "../Produto/ListaProduto";
import { Link } from "react-router-dom";
import SliderCenter from '../Slider/SliderCenter';
import BrandsList from '../Marcas/MarcasList';

class Home extends Component {
    render(){
        return(
        <div>
            <div className="banner">
                <img className="d-block w-100" src='https://cdn.shopify.com/s/files/1/1825/4753/files/slideshow_1_2000x_03328b29-1d6f-40d8-91b4-e2d81ea162c5_2000x.jpg?v=1492532268' alt='img-banner-1'/>
                    <div>
                        <div className='banner-paragrafo' >
                            <div className="animated fadeInUp">
                                <h1 className='banner-titulo spotlight'>LOREM A COSMO</h1>
                                <div className='divider mobile-hide'> </div>
                            </div>
        
                            <p className='banner-texto discreet-arimo animated fadeInUp delay-1s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            {/*
                                Botão dentro do banner, span = seta
                            */}

                            <p className="button-pri">
                                <Link to="/lojavirtual">CONHEÇA NOSSA LOJA <span/></Link>
                            </p>
                        </div>
                    </div>
            </div>            
            
            {/*Div para primeiro card*/}
            <div className='container justify-content-between undercard'>
                {/*Divisão em 3 cards, texto sobreposto em background*/}

                <div className='card-deck'>
                    
                    <div className='card border-light bg-dark text-white text-center wow fadeInUp faster'>

                        <img src='https://cdn.shopify.com/s/files/1/1825/4753/files/top-banner-home-1_31d2f89e-9c12-4f47-8c9a-545b06787527_2000x.jpg?v=1489074799' alt='img-card'/>

                        <div className='card-img-overlay'>
                            <h2 className="spotlight subtitle-montserrat">laboris</h2>
                        </div>
                    </div>

                    <div className='card border-light bg-dark text-center wow fadeInUp fast'>

                        <img src='https://cdn.shopify.com/s/files/1/1825/4753/files/top-banner-home-2_2000x.jpg?v=1489074851' alt='img-card'/>

                        <div className='card-img-overlay'>
                            <h2 className="spotlight subtitle-montserrat">veniam</h2>
                        </div>
                    </div>

                    <div className='card border-light bg-dark text-white text-center wow fadeInUp'>

                        <img src='https://cdn.shopify.com/s/files/1/1825/4753/files/top-banner-home-3_2000x.jpg?v=1489074859' alt='img-card'/>

                        <div className='card-img-overlay'>
                            <h2 className="spotlight subtitle-montserrat">pariatur</h2>
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
                    */
                }

                <ListaProduto list={[this.props.dados[0],this.props.dados[1],this.props.dados[2],this.props.dados[3],this.props.dados[4]]} addCarrinho={this.props.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho}/>
                
            </div>


            <div className='banner wow fadeInUp'>
                <img className="d-block w-100" src='https://cdn.shopify.com/s/files/1/1825/4753/files/banner_2000x.jpg?v=1489329262' alt='img-card'/>
                    <div className="wow slideInLeft">

                        <div className='justify-content-center text-center'>
                            
                            <div className='banner-paragrafo banner-paragrafo-rightinle'>
                                <h2 className='spotlight banner-titulo-natural'>MILANCELOS</h2>
                                <div className='divider'></div>
                                <p className='banner-texto-inline discreet-arimo'>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit. Quisquemos sodales suscipit tortor ditaemcos condimentum lacus meleifend menean viverra auctor blanditos comodous.</p>

                                {/*
                                    Botão dentro do banner,
                                    span = seta;
                                */}

                                <p className="button-pri">
                                    <Link to="/lojavirtual">CONHEÇA NOSSA LOJA <span/></Link>
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
                    */
                }

                <ListaProduto list={[this.props.dados[5],this.props.dados[6],this.props.dados[7],this.props.dados[8],this.props.dados[9]]} addCarrinho={this.props.addCarrinho} atualizarQtdCarrinho={this.props.atualizarQtdCarrinho} removerCarrinho={this.props.removerCarrinho}/>
                
                
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
                            <h3 className='card-title spotlight subtitle-montserrat'>rewLOREM ET DORUS</h3>
                            <p className='card-text discreet-arimo'>Nullam aliquet vestibulum augue non varius. Cras nec congue elitos. Duis tristique del ante nec aliquam. Praesent urna tellus laoreet an tellus ullamcorper fermentum facilisis eratum.</p>
                            <p className="button-pri">
                                <Link to="/lojavirtual">visitar loja <span/></Link>
                            </p>
                        </div>

                    </div>

                    <div className='card border-0 wow fadeInUp fast'>
                        <img className='card-img-top' src="https://cdn.shopify.com/s/files/1/1825/4753/files/banner-home-bottom-2_400x_ba51370d-324f-49fb-a74e-810425df2719_400x.jpg?v=1494707890" alt='img-card'/>
                            
                        <div className='card-body'>
                            <h3 className='card-title spotlight subtitle-montserrat'>MILANCELOS A LANOS</h3>
                            <p className='card-text discreet-arimo'>Nullam aliquet vestibulum augue non varius. Cras nec congue elitos. Duis tristique del ante nec aliquam. Praesent urna tellus laoreet an tellus ullamcorper fermentum facilisis eratum.</p>
                            <p className="button-pri">
                                <Link to="/lojavirtual">visitar loja <span/></Link>
                            </p>
                        </div>
                    </div>

                    <div className='card border-0 wow fadeInUp'>

                        <img className='card-img-top' src="https://cdn.shopify.com/s/files/1/1825/4753/files/banner-home-bottom-3_400x_da7ecf24-e8c0-42a2-a2e3-db4bcc53e6a8_400x.jpg?v=1494707900" alt='img-card'/>
                                
                        <div className='card-body'>
                            <h3 className='card-title spotlight subtitle-montserrat'>COSMOS DE MILANO</h3>
                            <p className='card-text discreet-arimo'>Nullam aliquet vestibulum augue non varius. Cras nec congue elitos. Duis tristique del ante nec aliquam. Praesent urna tellus laoreet an tellus ullamcorper fermentum facilisis eratum.</p>
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