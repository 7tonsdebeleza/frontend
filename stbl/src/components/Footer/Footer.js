import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Footer extends Component {

    render() {

        return (
            <div>
                <div className="footer-top">
                    <div>
                        <h1>SHOPS</h1>
                        <ul>
                            <li><Link to="/"><span>New In</span></Link></li>
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
                        <h1>INFORMATION</h1>
                        <ul>
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
                        <h1>CUSTOMER SERVICE</h1>
                        <ul>
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
                        <h1>STAY CONNECTED</h1>
                        <ul className="social-icons">
                            <li><Link to="/"><span>IMG</span></Link></li>
                            <li><Link to="/"><span>IMG</span></Link></li>
                            <li><Link to="/"><span>IMG</span></Link></li>
                            <li><Link to="/"><span>IMG</span></Link></li>
                            <li><Link to="/"><span>IMG</span></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-corp">
                    © 2017 ELLA Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify.
Shopify Themes e Templates by HaloThemes.com.
                    
                    
                    <ul className="footer-payments">
                        <li>img VISA</li>
                        <li>img MasterCard</li>
                        <li>img AmericanExpress</li>
                        <li>img Paypal</li>
                    </ul>

                    </div>

                </div>
            </div>
        )
    }
}
export default Footer