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
            <div className="footer bg-dark ">
                <div className="footer-top nav container d-flex">
                    <div>
                        <ul className="nav-item">
                            <h1 className="footertitles">SHOPS</h1>
                            <li ><Link to="/colecoes"><span>New In</span></Link></li>
                            <li><Link to="/"><span>Women</span></Link></li>
                            <li><Link to="/"><span>Schule Shoes</span></Link></li>
                            <li><Link to="/"><span>Bags e Accessories</span></Link></li>
                            <li><Link to="/"><span>Men</span></Link></li>
                            <li><Link to="/"><span>Top Brands</span></Link></li>
                            <li><Link to="/"><span>Sale e Special Offers</span></Link></li>
                            <li><Link to="/"><span>Lookbook</span></Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="nav-item">
                            <h1 className="footertitles">INFORMATION</h1>
                            <li><Link to="/"><span>About us</span></Link></li>
                            <li><Link to="/"><span>Customer Service</span></Link></li>
                            <li><Link to="/"><span>New Collection</span></Link></li>
                            <li><Link to="/"><span>Best Sellers</span></Link></li>
                            <li><Link to="/"><span>Manufacturers</span></Link></li>
                            <li><Link to="/"><span>Privacy policy</span></Link></li>
                            <li><Link to="/"><span>Terms e condition</span></Link></li>
                            <li><Link to="/"><span>Blog</span></Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="nav-item">
                            <h1 className="footertitles">CUSTOMER SERVICE</h1>
                            <li><Link to="/"><span>Seach Terms</span></Link></li>
                            <li><Link to="/"><span>Advance Search</span></Link></li>
                            <li><Link to="/"><span>Orders and Returns</span></Link></li>
                            <li><Link to="/"><span>Contact Us</span></Link></li>
                            <li><Link to="/"><span>RSS</span></Link></li>
                            <li><Link to="/"><span>Help</span></Link></li>
                            <li><Link to="/"><span>Consultant</span></Link></li>
                            <li><Link to="/"><span>Store</span></Link></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h1 className="footertitles">STAY CONNECTED</h1>
                        <ul className="social-icons nav">
                            <li><a href="http://facebook.com"><img className='iconface' id='iconface' onMouseOver={this.FacebookHover.bind(this)} onMouseOut={this.FacebookNotHover.bind(this)} width='50' height='50' src={IconFacebook} alt='iconfacebook' /></a></li>
                            <li><a href="http://instagram.com"><img className='iconinstagram' id='iconinstagram' onMouseOver={this.InstagramHover.bind(this)} onMouseOut={this.InstagramNotHover.bind(this)} width='50' height='50' src={IconInstragram} alt='iconfacebook' /></a></li>
                            <li><a href="http://instagram.com"><img className='iconinstagram' id='iconinstagram' onMouseOver={this.InstagramHover.bind(this)} onMouseOut={this.InstagramNotHover.bind(this)} width='50' height='50' src={IconInstragram} alt='iconfacebook' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom container">
                    <div className="footer-corp">
                        © 2017 ELLA Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify. <br></br> Shopify Themes e Templates by HaloThemes.com.
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
            </div>
        )
    }
}
export default Footer