import React, { Component } from 'react'
import { Link } from "react-router-dom";

import IconFacebook from "../Images/iconfacebook2.png"
import IconFacebookHover from "../Images/iconfacebook.png"
import IconInstragram from "../Images/iconinstagram2.png"
import IconInstragramHover from "../Images/iconinstagram.png"
import IconVisa from "../Images/visa.png"
import IconMasterCard from "../Images/mastercard.png"
import IconAmerican from "../Images/american.png"
import IconPaypal from "../Images/paypal.png"

class Footer extends Component {

    //funções para trocar as imagem dos icones das redes socias, atraves do hover do css estava dando problema
    FacebookHover = () => {
        let iconface = document.getElementById("iconface");
        iconface.setAttribute("src", IconFacebookHover);
    }
    FacebookNotHover = () => {
        let iconface = document.getElementById("iconface");
        iconface.setAttribute("src", IconFacebook);
    }
    InstagramHover = () => {
        let iconinstagram = document.getElementById("iconinstagram");
        iconinstagram.setAttribute("src", IconInstragramHover);
    }
    InstagramNotHover = () => {
        let iconinstagram = document.getElementById("iconinstagram");
        iconinstagram.setAttribute("src", IconInstragram);
    }

    render() {

        return (
            <footer className="footer bg-dark ">
                <div className="footer-top nav container d-flex">
                    <div className="item-footer">
                        <ul className="nav-item">
                            <h1 className="footertitles">Loja</h1>
                            <li ><Link to="/lojavirtual"><span>Lançamentos</span></Link></li>
                            <li><Link to="/lojavirtual"><span>Lorem Et Dorus</span></Link></li>
                            <li><Link to="/lojavirtual"><span>Comos De Milano</span></Link></li>
                            <li><Link to="/marcas"><span>Nossas Marcas</span></Link></li>
                            <li><Link to="/lojavirtual"><span>Ofertas</span></Link></li>
                        </ul>
                    </div>
                    <div className="item-footer">
                        <ul className="nav-item">
                            <h1 className="footertitles">Informações</h1>
                            <li><Link to="/"><span>Sobre</span></Link></li>
                            <li><Link to="/"><span>Serviços</span></Link></li>
                            <li><Link to="/"><span>Política de Privacidade</span></Link></li>
                            <li><Link to="/"><span>Termos e condições</span></Link></li>
                            <li><Link to="/blog"><span>Blog</span></Link></li>
                        </ul>
                    </div>
                    <div className="item-footer">
                        <ul className="nav-item">
                            <h1 className="footertitles">Serviços</h1>
                            <li><Link to="/"><span>Pesquisa</span></Link></li>
                            <li><Link to="/"><span>Pedidos e entregas</span></Link></li>
                            <li><Link to="/"><span>Contato</span></Link></li>
                            <li><Link to="/faq"><span>Faq</span></Link></li>
                            <li><Link to="/"><span>Estoque</span></Link></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h1 className="footertitles">Redes Sociais</h1>
                        <ul className="social-icons nav">
                            <li><a href="http://facebook.com"><img className='iconface' id='iconface' onMouseOver={this.FacebookHover.bind(this)} onMouseOut={this.FacebookNotHover.bind(this)} width='50' height='50' src={IconFacebook} alt='iconfacebook' /></a></li>
                            <li><a href="http://instagram.com"><img className='iconinstagram' id='iconinstagram' onMouseOver={this.InstagramHover.bind(this)} onMouseOut={this.InstagramNotHover.bind(this)} width='50' height='50' src={IconInstragram} alt='iconfacebook' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom container">
                    <div className="footer-corp">
                        © 2020 Todos os direitos reservados. 7 Tons de Beleza.  <br></br> Ecommerce desenvolvido por <a href='http://www.ceos.ufc.br/'>CEOS.</a> 
                    </div>
                    <div>
                        <ul className="footer-payments nav">
                            <li><img className='visa' id='visa' width='40' height='15' src={IconVisa} alt='visa' /></li>
                            <li><img className='mastercard' id='mastercard' width='60' height='15' src={IconMasterCard} alt='mastercard' /></li>
                            <li><img className='american' id='american' width='50' height='15' src={IconAmerican} alt='american' /></li>
                            <li><img className='paypal' id='paypal' width='50' height='15' src={IconPaypal} alt='paypal' /></li>
                        </ul>
                    </div>


                </div>
            </footer>
        )
    }
}
export default Footer