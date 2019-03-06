import React from 'react';

//Estrutura inicial para página de Home;

const Home = () => {
    return(
        <div>
            <div>
                {/*Div para banner/carroussel;*/}
                <h1>LOREM A COSMO</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>

                {/*
                    Botão dentro do banner (sem função)
                    No template leva a loja virtual;
                */}
                <button>SHOP THE COLLECTION</button>
            </div>

            <div>
                {/*Div para primeiro card*/}
                <h2>EDITOR'S PICK // SHOES // ACCESSORIES</h2>
            </div>

            <div>
                {/*Div para segundo card com breve lista de produtos*/}
                <h2>---NEW ARRIVALS---</h2>
                [PRODUTOS]
            </div>

            <div>
                {/*Div para terceiro card*/}
                <h2>MILANCELOS</h2>
                <div>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit. Quisquemos sodales suscipit tortor ditaemcos condimentum lacus meleifend menean viverra auctor blanditos comodous.</div>
            </div>

            <div>
                {/*Div para quarto card com breve lista de produtos*/}
                <h2>---TRENDING NOW---</h2>
                [PRODUTOS]
            </div>

            <div>
                {/*Div para quinto card*/}
                <h2>---#FEATURED ON ELLA---</h2>
                <img src="#"/>
                <h3>LOREM ET DORUS</h3>
                <div>Nullam aliquet vestibulum augue non varius. Cras nec congue elitos. Duis tristique del ante nec aliquam. Praesent urna tellus laoreet an tellus ullamcorper fermentum facilisis eratum.</div>
                <button>SHOP NOW</button>

                <img src="#"/>
                <h3>MILANCELOS A LANOS</h3>
                <div>Nullam aliquet vestibulum augue non varius. Cras nec congue elitos. Duis tristique del ante nec aliquam. Praesent urna tellus laoreet an tellus ullamcorper fermentum facilisis eratum.</div>
                <button>SHOP NOW</button>

                <img src="#"/>
                <h3>COMOS DE MILANO</h3>
                <div>Nullam aliquet vestibulum augue non varius. Cras nec congue elitos. Duis tristique del ante nec aliquam. Praesent urna tellus laoreet an tellus ullamcorper fermentum facilisis eratum.</div>
                <button>SHOP NOW</button>
            </div>
            
            <div>
                {/*Ùltimo card*/}
                <h2>ELLA ON INSTAGRAM</h2>
                [API]
                <button>VIEW GALLERY</button>
            </div>

        </div>
    )
}

export default Home;