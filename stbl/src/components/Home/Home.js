import React from 'react';

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
                            <h1 className='banner-titulo'>LOREM A COSMO</h1>
                            <p className='banner-texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            {/*
                                Botão dentro do banner (sem função)
                                No template leva a loja virtual;
                            */}

                            <button className='btn btn-dark'>SHOP THE COLLECTION</button>
                        </div>
                    </div>
            </div>
            
            
            {/*Div para primeiro card*/}
            <div className='container justify-content-between undercard'>
                {/*Divisão em 3 cards, texto sobreposto em background*/}

                <div className='card-deck'>
                    
                    <div className='card border-light bg-dark text-white text-center'>

                        <img src='https://cdn.shopify.com/s/files/1/1825/4753/files/top-banner-home-1_31d2f89e-9c12-4f47-8c9a-545b06787527_2000x.jpg?v=1489074799' alt='img-card'/>

                        <div className='card-img-overlay'>
                            <h2>EDITOR'S PICK</h2>
                        </div>
                    </div>

                    <div className='card border-light bg-dark text-center'>

                        <img src='https://cdn.shopify.com/s/files/1/1825/4753/files/top-banner-home-2_2000x.jpg?v=1489074851' alt='img-card'/>

                        <div className='card-img-overlay'>
                            <h2>SHOES</h2>
                        </div>
                    </div>

                    <div className='card border-light bg-dark text-white text-center'>

                        <img src='https://cdn.shopify.com/s/files/1/1825/4753/files/top-banner-home-3_2000x.jpg?v=1489074859' alt='img-card'/>

                        <div className='card-img-overlay'>
                            <h2>ACCESSORIES</h2>
                        </div>
                    </div>

                </div>
            </div>


            <div className='container'>
                {/*Div para segundo card com breve lista de produtos*/}
                <div className='p-4 d-flex flex-row justify-content-center align-items-center text-center d-flex'>
                    <div className='col'><hr/></div>
                    <div className='col-md-auto'>NEW ARRIVALS</div>
                    <div className='col'><hr/></div>
                </div>
            </div>


            <div className='banner'>
                <img class="d-block w-100" src='https://cdn.shopify.com/s/files/1/1825/4753/files/banner_2000x.jpg?v=1489329262' alt='img-card'/>
                    <div class="">

                        <div className='justify-content-center text-center'>
                            
                            <div className='banner-paragrafo banner-paragrafo-rightinle'>
                                <h2>MILANCELOS</h2>
                                <p style={{width: '60%'}} className='mx-auto'>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, tincidunt risus ac, consequat velit. Quisquemos sodales suscipit tortor ditaemcos condimentum lacus meleifend menean viverra auctor blanditos comodous.</p>

                                {/*
                                    Botão dentro do banner (sem função)
                                    No template leva a loja virtual;
                                */}
                                <button className='btn btn-dark'>SHOP THE COLLECTION</button>
                            </div>
                        </div>
                    </div>
            </div>

            <div className='container undercard'>
                {/*Div para quarto card com breve lista de produtos*/}
                <div className=' d-flex flex-row justify-content-center align-items-center text-center d-flex'>
                    <div className='col'><hr/></div>
                    <div className='col-md-auto'>TRENDING NOW</div>
                    <div className='col'><hr/></div>
                </div>
                
                
            </div>

            <div className='container'>
                {/*Div para quinto card*/}
                <div className='p-4 d-flex flex-row justify-content-center align-items-center text-center d-flex'>
                    <div className='col'><hr/></div>
                    <div className='col-md-auto'>#FEATURED ON ELLA</div>
                    <div className='col'><hr/></div>
                </div>

                <div className='card-deck text-center'>
                    <div className='card border-0'>
                        <img className='card-img-top' src="https://cdn.shopify.com/s/files/1/1825/4753/files/banner-home-bottom-1_400x_10ac45b6-ec14-46f8-84f3-589ed39f6647_400x.jpg?v=1494707881" alt='img-card'/>
                            
                        <div className='card-body'>
                            <h3 className='card-title'>LOREM ET DORUS</h3>
                            <p className='card-text'>Nullam aliquet vestibulum augue non varius. Cras nec congue elitos. Duis tristique del ante nec aliquam. Praesent urna tellus laoreet an tellus ullamcorper fermentum facilisis eratum.</p>
                            <button className='btn btn-dark'>SHOP NOW</button>
                        </div>

                    </div>

                    <div className='card border-0'>
                        <img className='card-img-top' src="https://cdn.shopify.com/s/files/1/1825/4753/files/banner-home-bottom-2_400x_ba51370d-324f-49fb-a74e-810425df2719_400x.jpg?v=1494707890" alt='img-card'/>
                            
                        <div className='card-body'>
                            <h3 className='card-title'>MILANCELOS A LANOS</h3>
                            <p className='card-text'>Nullam aliquet vestibulum augue non varius. Cras nec congue elitos. Duis tristique del ante nec aliquam. Praesent urna tellus laoreet an tellus ullamcorper fermentum facilisis eratum.</p>
                            <button className='btn btn-dark'>SHOP NOW</button>
                        </div>
                    </div>

                    <div className='card border-0'>

                        <img className='card-img-top' src="https://cdn.shopify.com/s/files/1/1825/4753/files/banner-home-bottom-3_400x_da7ecf24-e8c0-42a2-a2e3-db4bcc53e6a8_400x.jpg?v=1494707900" alt='img-card'/>
                                
                        <div className='card-body'>
                            <h3 className='card-title'>COMOS DE MILANO</h3>
                            <p className='card-text'>Nullam aliquet vestibulum augue non varius. Cras nec congue elitos. Duis tristique del ante nec aliquam. Praesent urna tellus laoreet an tellus ullamcorper fermentum facilisis eratum.</p>
                            <button className='btn btn-dark'>SHOP NOW</button>
                        </div>
                    </div>

                </div>

            </div>

            <div className='container'>
                <hr/>

                [BRANDS]

            </div>

            <div style={{backgroundColor:'#FFF5EE'}}>
                <div className='container text-center'>
                    {/*Ùltimo card*/}
                    <h2>#ELLA ON INSTAGRAM</h2>
                    
                    <div>
                        [IMGS]
                    </div>
                    <button className='btn btn-dark'>VIEW GALLERY</button>
                </div>
            </div>
            

        </div>
    )
}

export default Home;