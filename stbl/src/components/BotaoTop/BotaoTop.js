import React, { Component } from 'react'
import Topo from "../Images/topo.svg"

class BotaoTop extends Component {

    CliqueBotaoTop = (event) =>{
        event.preventDefault();
        let teste = document.getElementById('navbarAux')
        let topo = teste.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        })
    }


    render() {
        window.addEventListener("scroll", () => {
            let BotaoTop = document.getElementById("back-top");
            let posicaoy = window.pageYOffset;
            if (posicaoy >= 300) {
                BotaoTop.classList.add("mostrar");
            }
            if (posicaoy < 300) {
                BotaoTop.classList.remove("mostrar");
            }
        });
        return (
            <div>
                <div id="back-top" className="back-top">
                    <a onClick={this.CliqueBotaoTop.bind(this)} className="nav-up" href="#navbarAux"><img className='topo' width='40' height='40' src={Topo} alt='topo' /></a>
                </div>
            </div>
        )
    }
}

export default BotaoTop