import React from 'react';

const Home = () => {
    return(
        <div>

            {/*Banner com background
                futuramente transformar em carrossel (bootstrap não roda)
            */}

            <div className='card'>
                <img class="card-img" style={{height:520}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlFD938Z68Amoo8tuv7RG6ooYcm4aVragpD6uaMRoir-PgPxx' alt="Card image"/>
                    <div class="card-img-overlay">
                        <div className='text-center' style={{marginTop: 180}}>
                            <h1 className='card-title'>LOREM A COSMO</h1>
                            <p style={{width: '40%'}} className='mx-auto card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            {/*
                                Botão dentro do banner (sem função)
                                No template leva a loja virtual;
                            */}

                            <button className='btn btn-dark'>SHOP THE COLLECTION</button>
                        </div>
                    </div>
            </div>
            
            {/*Div para primeiro card*/}
            <div className='container justify-content-between p-4'>
                {/*Divisão em 3 cards, texto sobreposto em background*/}

                <div className='card-deck'>
                    
                    <div className='card border-light bg-dark text-white text-center'>

                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlFD938Z68Amoo8tuv7RG6ooYcm4aVragpD6uaMRoir-PgPxx'/>

                        <div className='card-img-overlay'>
                            <h2>EDITOR'S PICK</h2>
                        </div>
                    </div>

                    <div className='card border-light bg-dark text-center'>

                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlFD938Z68Amoo8tuv7RG6ooYcm4aVragpD6uaMRoir-PgPxx'/>

                        <div className='card-img-overlay'>
                            <h2>SHOES</h2>
                        </div>
                    </div>

                    <div className='card border-light bg-dark text-white text-center'>

                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlFD938Z68Amoo8tuv7RG6ooYcm4aVragpD6uaMRoir-PgPxx'/>

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
                
                [PRODUTOS]
            </div>


            <div className='card'>
                <img class="card-img" style={{height:520}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlFD938Z68Amoo8tuv7RG6ooYcm4aVragpD6uaMRoir-PgPxx' alt="Card image"/>
                    <div class="card-img-overlay">

                        <div className='row justify-content-center text-center' style={{marginTop: '10%'}}>
                            <div className='col' style={{width:'100%'}}>{/*Coluna vazia para por paragrafo abaixo alinhado a direita*/}  </div>
                            <div className='col'>
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

            <div className='container'>
                {/*Div para quarto card com breve lista de produtos*/}
                <div className='p-4 d-flex flex-row justify-content-center align-items-center text-center d-flex'>
                    <div className='col'><hr/></div>
                    <div className='col-md-auto'>TRENDING NOW</div>
                    <div className='col'><hr/></div>
                </div>
                
                [PRODUTOS]
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
                        <img className='card-img-top' src="#"/>
                            
                        <div className='card-body'>
                            <h3 className='card-title'>LOREM ET DORUS</h3>
                            <p className='card-text'>Nullam aliquet vestibulum augue non varius. Cras nec congue elitos. Duis tristique del ante nec aliquam. Praesent urna tellus laoreet an tellus ullamcorper fermentum facilisis eratum.</p>
                            <button className='btn btn-dark'>SHOP NOW</button>
                        </div>

                    </div>

                    <div className='card border-0'>
                        <img className='card-img-top' src="#"/>
                            
                        <div className='card-body'>
                            <h3 className='card-title'>MILANCELOS A LANOS</h3>
                            <p className='card-text'>Nullam aliquet vestibulum augue non varius. Cras nec congue elitos. Duis tristique del ante nec aliquam. Praesent urna tellus laoreet an tellus ullamcorper fermentum facilisis eratum.</p>
                            <button className='btn btn-dark'>SHOP NOW</button>
                        </div>
                    </div>

                    <div className='card border-0'>

                        <img className='card-img-top' src="#"/>
                                
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