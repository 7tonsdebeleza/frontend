import React from 'react';
import Produto from "../Produto/Produto";
import { Link } from "react-router-dom";
import SliderCenter from '../Slider/SliderCenter';
import BrandsList from '../Marcas/MarcasList';
//import Logo from '../Images/logo.png';

const Home = () => {
    return(
        <div>

            {/*Banner com background
                futuramente transformar em carrossel (bootstrap não roda)
            */}

            <div className="banner">
                <img class="d-block w-100" src='https://cdn.shopify.com/s/files/1/1825/4753/files/slideshow_1_2000x_03328b29-1d6f-40d8-91b4-e2d81ea162c5_2000x.jpg?v=1492532268' alt='img-banner-1'/>
                    <div class="">
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
                {/* Produtos*/}

                <div>
                <div className="listaProduto">
                <ul className="nav container d-flex">
                    <li className="pro nav-item">
                    <Produto id={"id1"} img={"https://qbbr.vteximg.com.br/arquivos/ids/160367-1000-1000/batom-liquido-mate-metalico-azuluz-aberto.jpg?v=636247775539130000"} titulo={"Batom Líquido Mate Metálico Azuluz"}
                        marca={"Avon"} preco={27.99} estoque={false} tipoProduto={"Batom"} descricao={"O batom líquido mate metálico tem alta cobertura, longa duração e pigmentos metálicos intensos para os lábios. Além disso, ele não escorre e nem transfere. São 5 cores lindas pra você se jogar!"} multiColor={true}/>
                        </li>
                    <li className="pro nav-item">
                    <Produto id={"id2"} img={"https://qbbr.vteximg.com.br/arquivos/ids/160437-1000-1000/batom-liquido-mate-metalico-vermeluz-aberto.jpg?v=636259455546800000"} titulo={" Líquido Mate Metálico Vermeluz"}
                        marca={"Avon"} preco={227.99} estoque={true} tipoProduto={"Batom"} descricao={"O batom líquido mate metálico tem alta cobertura, longa duração e pigmentos metálicos intensos para os lábios. Além disso, ele não escorre e nem transfere. São 5 cores lindas pra você se jogar!"} multiColor={true} />
                    </li>
                    <li className="pro nav-item">
                    <Produto id={"id3"} img={"https://qbbr.vteximg.com.br/arquivos/ids/156065-1000-1000/primer-instamatte-quem-disse-berenice-30g_1_812781.jpg?v=636046099692370000"} titulo={"Primer Instamatte 30g"}
                        marca={"Quem disse berenice"} preco={237.99} estoque={false} tipoProduto={"Creme para a pele"} descricao={"O primer Instamatte é uma inovação pra quem curte ficar bem na foto. Ele é um primer que matifica a pele instantaneamente. Outra super novidade é o efeito blur (se fala blâr) que disfarça as marquinhas e ruguinhas através de partículas difusoras de luz. Sua pele lisinha e sem brilho, pra você fica bem na foto e na festa! Se joga."} multiColor={false} />
                    </li>
                    <li className="pro nav-item">
                    <Produto id={"id4"} img={"https://qbbr.vteximg.com.br/arquivos/ids/157964-1000-1000/hidratante-facial-tchau-pros-poros_814491.jpg?v=636069540312330000"} titulo={"Hidratante Facial Tchau Poros 40Ml"}
                        marca={"Natura"} preco={954.99} estoque={true} tipoProduto={"Hidratante"} descricao={"Hidratante facial Antioxidante. Efeito detox hidratação até 30 horas. Aumento de colágeno – que deixa a pele mais firme."} multiColor={false}/>
                    </li>
                    <li className="pro nav-item">
                    <Produto id={"id5"} img={"https://qbbr.vteximg.com.br/arquivos/ids/156687-1000-1000/Blush-quem-disse-berenice_1_810125.jpg?v=636046197936000000"} titulo={"Blush QDB"}
                        marca={"Natura"} preco={1165.99} estoque={true} tipoProduto={"Blush"} descricao={"A gente adora blush. Afinal, uma corzinha nas bochechas levanta qualquer astral, não é mesmo? Então resolvemos criar várias cores pra você experimentar e variar. Por ter uma textura super fininha o blush QDB tem uma ótima fixação na pele dá aquele efeito natural e saudável. Viva!!"} multiColor={true}/>
                    </li>
                </ul>
                </div>
            </div>

                
            </div>


            <div className='banner wow fadeInUp'>
                <img class="d-block w-100" src='https://cdn.shopify.com/s/files/1/1825/4753/files/banner_2000x.jpg?v=1489329262' alt='img-card'/>
                    <div class="wow slideInLeft">

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

                <div>
                <div className="listaProduto">
                <ul className="nav container d-flex">
                    <li className="pro nav-item">
                    <Produto id={"id6"} img={"https://qbbr.vteximg.com.br/arquivos/ids/160473-488-488/pigmento-liquido-metalico-pra--olhos-peroluz-aberto.jpg?v=636259716125170000"} titulo={"Pigmento Líquido Metálico Pra Olhos Peroluz"}
                        marca={"Avon"} preco={27.99} estoque={true} tipoProduto={"Sombra"} descricao={"Os pigmentos deixam qualquer maquiagem mais bonita, ainda mais quando combinados com uma sombra esfumada, não é mesmo? O pigmento líquido metálico une o melhor dos dois: o efeito do pigmento e a facilidade de esfumar da sombra em pó. Incrível, né? Ele é líquido, mas ao secar parece pó, dura 10 horas e o efeito metalizado ilumina o olhar e fica ainda mais lindo esfumado. Além disso, é fácil de aplicar e por ser à base d’água, é fácil de retirar também! Tá esperando o que pra testar?"} multiColor={true}/>
                        </li>
                    <li className="pro nav-item">
                    <Produto id={"id7"} img={"https://qbbr.vteximg.com.br/arquivos/ids/160205-1000-1000/Lapis-Contorno-Labial-Incolor.jpg?v=636216593706530000"} titulo={"Lápis Barreira Invisível Labial 1.1g - Lápis Barreira Invisível Labial 1.1G"}
                        marca={"Avon"} preco={227.99} estoque={false} tipoProduto={"Lápis"} descricao={"O lápis barreira invisível pode ser usado pra contornar os lábios, criando uma película que ajuda o batom a não borrar no momento da aplicação. Ele também pode ser usado como primer, para segurar o batom no lugar por muito mais tempo."} multiColor={false} />
                    </li>
                    <li className="pro nav-item">
                    <Produto id={"id8"} img={"https://qbbr.vteximg.com.br/arquivos/ids/162619-1000-1000/Po_Translucido_Antibrilho_Amarele_1_819436.jpg?v=636493784569670000"} titulo={"Pó Translucido Instamatte Amarelê"}
                        marca={"Quem disse berenice"} preco={237.99} estoque={true} tipoProduto={"Creme para a pele"} descricao={"Com textura ultrafina e aveludada, o pó translúcido solto matifica a pele instantaneamente! Reduz a aparência dos poros e linhas de expressão e controla a oleosidade do rosto ao longo do dia! Sua pele sequinha e sem brilho por até 6 horas! Demais, né? Ah! E por ele ter uma corzinha, também ajuda a uniformizar o tom da sua pele. Encontrar a sua cor é fácil:"} multiColor={false} />
                    </li>
                    <li className="pro nav-item">
                    <Produto id={"id9"} img={"https://qbbr.vteximg.com.br/arquivos/ids/162616-1000-1000/Primer_instamatte_bastao_1_819435.jpg?v=636493782540300000"} titulo={"Primer instamatte bastão"}
                        marca={"Natura"} preco={954.99} estoque={true} tipoProduto={"Primer"} descricao={"A gente adora uma pele bem sequinha e por isso, resolvemos trazer o nosso primer instamatte no formato bastão! O primer instamatte em bastão matifica a pele instantaneamente, sem falar do efeito blur (se fala blâr), que disfarça as marquinhas, poros e ruguinhas através de partículas difusoras de luz. Sua pele lisinha e sem brilho a qualquer hora!"} multiColor={false}/>
                    </li>
                    <li className="pro nav-item">
                    <Produto id={"id10"} img={"https://qbbr.vteximg.com.br/arquivos/ids/155598-1000-1000/Base-Alta-Cobertura-Quem-disse-berenice_1_813778.jpg?v=636045408136970000"} titulo={"Base Alta Cobertura"}
                        marca={"Natura"} preco={1165.99} estoque={false} tipoProduto={"Base"} descricao={"A base alta cobertura é ideal para quem quer cobrir todas as marquinhas. Ela tem alta cobertura, efeito mate, FPS 15 e dura o dia inteiro! Além de possuir ingredientes especiais que absorvem a oleosidade da pele e não obstruem os poros, ela não transfere e é resistente à água e ao suor!"} multiColor={true}/>
                    </li>
                </ul>
                </div>
            </div>
                
                
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
                            <h3 className='card-title spotlight subtitle-montserrat'>LOREM ET DORUS</h3>
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
                       <a href="#">VISITAR GALERIA <span/></a>
                    </p>
                    
                </div>
            </div>
            

        </div>
    )
}

export default Home;

const imagesInst = [
    (<img src='https://scontent.cdninstagram.com/vp/a97004e7f2d8ac92327c64ea63170a77/5D492033/t51.2885-15/e35/s320x320/18444181_1886201831627903_2441734322760187904_n.jpg?_nc_ht=scontent.cdninstagram.com' alt='instagram image' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://scontent.cdninstagram.com/vp/06b0958f0b704e38f56e2356ba9bcf7e/5D354A5A/t51.2885-15/e35/s320x320/18443569_226764737811492_1219328699799699456_n.jpg?_nc_ht=scontent.cdninstagram.com' alt='instagram image' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://scontent.cdninstagram.com/vp/5416f2b1d7cac0d7b0a6a28a9ff3b74a/5D4D6D63/t51.2885-15/e35/s320x320/18300169_253564125112912_73006081730674688_n.jpg?_nc_ht=scontent.cdninstagram.com' alt='instagram image' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://scontent.cdninstagram.com/vp/de32ee5acffe6db412f1b619519ec158/5D47610A/t51.2885-15/e35/s320x320/18300169_1838895596373697_5209167543268278272_n.jpg?_nc_ht=scontent.cdninstagram.com' alt='instagram image' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src='https://scontent.cdninstagram.com/vp/4afc6151a454c5127051bb9ddc698e2f/5D329316/t51.2885-15/e35/s320x320/18299250_270895493316232_8616688870999719936_n.jpg?_nc_ht=scontent.cdninstagram.com' alt='instagram image' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
]