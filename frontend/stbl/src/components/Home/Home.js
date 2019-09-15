import React, { Component } from 'react';
import ListaProduto from "../Produto/ListaProduto";
import { Link } from "react-router-dom";
import SliderCenter from '../Slider/SliderCenter';
import BrandsList from '../Marcas/MarcasList';
import Banner from '../Images/Banner-1.jpg';
import Cuidados from '../Images/cuidados.jpg';
import Mq1 from '../Images/maquiagem1.jpg';
import Mq2 from '../Images/maquiagem2.jpg';
import Apr from '../Images/apresentLogo.png';
import Logos from '../Images/logos.png';
import Sete from '../Images/sete.jpg';
import Banner3 from '../Images/banner3.jpg';
import Temp1 from '../Images/temp1.jpg';
import Temp2 from '../Images/tem2.jpg';
import Temp3 from '../Images/tem3.jpg';
import Temp4 from '../Images/temp4.jpg';
import Temp5 from '../Images/temp5.jpg';

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

                    <ListaProduto list={[Dados[0],Dados[1],Dados[2],Dados[3],Dados[4]]} addCarrinho={this.props.addCarrinho} atualizarQtdCarrinho={this.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho}/>
             
                
            </div>


            <div className='banner wow fadeInUp'>
                <img className="d-block w-100" src={Banner3} alt='img-card'/>
                    <div className="wow slideInLeft">

                        <div className='justify-content-center text-center'>
                            
                            <div className='banner-paragrafo2 banner-paragrafo-rightinle'>
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

            <div className='container undercard' style={{marginTop: "80px"}}>
                {/*Div para quarto card com breve lista de produtos*/}
                <div className=' d-flex flex-row justify-content-center align-items-center text-center d-flex'>
                    <div className='col'><hr/></div>
                    <div className='col-md-auto spotlight wow fadeIn'>em alta</div>
                    <div className='col'><hr/></div>
                </div>

                {
                    /* Renderizando dinamicamente parte dos produtos da lista
                    esquema provisório*/
                }

                <ListaProduto list={[Dados[5],Dados[6],Dados[7],Dados[8],Dados[9]]} addCarrinho={this.props.addCarrinho} atualizarQtdCarrinho={this.props.atualizarQtdCarrinho} removerCarrinho={this.props.removerCarrinho}/>

                
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
                        <img className='card-img-top' src={Apr} alt='img-card'/>
                            
                        <div className='card-body'>
                            <h3 className='card-title spotlight subtitle-montserrat'>NOSSO NOME</h3>
                            <p className='card-text discreet-arimo' style={{height: '120px'}}>O conceito desse nome está visivelmente ligado à ideia de que o cliente é responsável por redefinir e construir sua própria autoestima com a ajuda dos produtos da loja.</p>
                            <p className="button-pri">
                                <Link to="/lojavirtual">visitar loja <span/></Link>
                            </p>
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
    (<img src={Temp1} alt='instagram image1' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src={Temp2} alt='instagram image2' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src={Temp3} alt='instagram image3' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src={Temp4} alt='instagram image4' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
    (<img src={Temp5} alt='instagram image5' style={{
        maxWidth: '100%',
        height: 'auto'
    }}/>),
]


const Dados = [
    {
        id: "id1",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/160367-1000-1000/batom-liquido-mate-metalico-azuluz-aberto.jpg?v=636247775539130000",
        titulo: "Batom Líquido Mate Metálico Azuluz",
        marca: "Avon",
        preco: 27.99,
        estoque: 10,
        tipoProduto: "Batom",
        descricao: "O batom líquido mate metálico tem alta cobertura, longa duração e pigmentos metálicos intensos para os lábios. Além disso, ele não escorre e nem transfere. São 5 cores lindas pra você se jogar!",
        multiColor: true,
        
    },
    {
        id: "id2",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/160437-1000-1000/batom-liquido-mate-metalico-vermeluz-aberto.jpg?v=636259455546800000",
        titulo: "Líquido Mate Metálico Vermeluz",
        marca: "Avon",
        preco: 227.99,
        estoque: 7,
        tipoProduto: "Batom",
        descricao: "O batom líquido mate metálico tem alta cobertura, longa duração e pigmentos metálicos intensos para os lábios. Além disso, ele não escorre e nem transfere. São 5 cores lindas pra você se jogar!",
        multiColor: true,
        
    },
    {
        id:"id3",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/156065-1000-1000/primer-instamatte-quem-disse-berenice-30g_1_812781.jpg?v=636046099692370000",
        titulo: "Primer Instamatte 30g",
        marca: "Quem disse berenice",
        preco: 237.99,
        estoque: 3,
        tipoProduto: "Creme para a pele",
        descricao: "O primer Instamatte é uma inovação pra quem curte ficar bem na foto. Ele é um primer que matifica a pele instantaneamente. Outra super novidade é o efeito blur (se fala blâr) que disfarça as marquinhas e ruguinhas através de partículas difusoras de luz. Sua pele lisinha e sem brilho, pra você fica bem na foto e na festa! Se joga.",
        multiColor: false,
    },
    {
        id: "id4",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/157964-1000-1000/hidratante-facial-tchau-pros-poros_814491.jpg?v=636069540312330000",
        titulo: "Hidratante Facial Tchau Poros 40Ml",
        marca: "Natura",
        preco: 954.99,
        estoque: 9,
        tipoProduto: "Hidratante",
        descricao: "Hidratante facial Antioxidante. Efeito detox hidratação até 30 horas. Aumento de colágeno – que deixa a pele mais firme.",
        multiColor: false,
        
    },
    {
        id: "id5",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/156687-1000-1000/Blush-quem-disse-berenice_1_810125.jpg?v=636046197936000000",
        titulo: "Blush QDB",
        marca: "Natura",
        preco: 1165.99,
        estoque: 5,
        tipoProduto: "Blush",
        descricao: "A gente adora blush. Afinal, uma corzinha nas bochechas levanta qualquer astral, não é mesmo? Então resolvemos criar várias cores pra você experimentar e variar. Por ter uma textura super fininha o blush QDB tem uma ótima fixação na pele dá aquele efeito natural e saudável. Viva!!",
        multiColor: false,
        
    },{
        id:"id6",
        img:"https://qbbr.vteximg.com.br/arquivos/ids/160473-488-488/pigmento-liquido-metalico-pra--olhos-peroluz-aberto.jpg?v=636259716125170000",
        titulo: "Pigmento Líquido Metálico Pra Olhos Peroluz",
        marca: "Avon",
        preco: 27.99,
        estoque:3,
        tipoProduto: "Sombra",
        descricao: "Os pigmentos deixam qualquer maquiagem mais bonita, ainda mais quando combinados com uma sombra esfumada, não é mesmo? O pigmento líquido metálico une o melhor dos dois: o efeito do pigmento e a facilidade de esfumar da sombra em pó. Incrível, né? Ele é líquido, mas ao secar parece pó, dura 10 horas e o efeito metalizado ilumina o olhar e fica ainda mais lindo esfumado. Além disso, é fácil de aplicar e por ser à base d’água, é fácil de retirar também! Tá esperando o que pra testar?",
        multiColor: true,
    },{
        id: "id7",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/160205-1000-1000/Lapis-Contorno-Labial-Incolor.jpg?v=636216593706530000",
        titulo: "Lápis Barreira Invisível Labial 1.1g - Lápis Barreira Invisível Labial 1.1G",        
        marca: "Avon",
        preco: 227.99,
        estoque: 0,
        tipoProduto: "Lápis",
        descricao: "O lápis barreira invisível pode ser usado pra contornar os lábios, criando uma película que ajuda o batom a não borrar no momento da aplicação. Ele também pode ser usado como primer, para segurar o batom no lugar por muito mais tempo.",
        multiColor: false,
        
    },{
        id:"id8",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/162619-1000-1000/Po_Translucido_Antibrilho_Amarele_1_819436.jpg?v=636493784569670000",
        titulo: "Pó Translucido Instamatte Amarelê",
        marca: "Quem disse berenice", 
        preco: 237.99, 
        estoque: 6,
        tipoProduto: "Creme para a pele", 
        descricao: "Com textura ultrafina e aveludada, o pó translúcido solto matifica a pele instantaneamente! Reduz a aparência dos poros e linhas de expressão e controla a oleosidade do rosto ao longo do dia! Sua pele sequinha e sem brilho por até 6 horas! Demais, né? Ah! E por ele ter uma corzinha, também ajuda a uniformizar o tom da sua pele. Encontrar a sua cor é fácil:",
        multiColor:false,
        
    },{
        id: "id9",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/162616-1000-1000/Primer_instamatte_bastao_1_819435.jpg?v=636493782540300000",
        titulo: "Primer instamatte bastão",
        marca: "Natura", 
        preco: 954.99,
        estoque: 5,
        tipoProduto: "Primer",
        descricao: "A gente adora uma pele bem sequinha e por isso, resolvemos trazer o nosso primer instamatte no formato bastão! O primer instamatte em bastão matifica a pele instantaneamente, sem falar do efeito blur (se fala blâr), que disfarça as marquinhas, poros e ruguinhas através de partículas difusoras de luz. Sua pele lisinha e sem brilho a qualquer hora!", 
        multiColor: false,
        
    },{
        id: "id10",
        img: "https://qbbr.vteximg.com.br/arquivos/ids/155598-1000-1000/Base-Alta-Cobertura-Quem-disse-berenice_1_813778.jpg?v=636045408136970000",
        titulo: "Base Alta Cobertura",
        marca: "Natura",
        preco: 1165.99,
        estoque: 0,
        tipoProduto: "Base",
        descricao: "A base alta cobertura é ideal para quem quer cobrir todas as marquinhas. Ela tem alta cobertura, efeito mate, FPS 15 e dura o dia inteiro! Além de possuir ingredientes especiais que absorvem a oleosidade da pele e não obstruem os poros, ela não transfere e é resistente à água e ao suor!",
        multiColor: true,
        
    }
]