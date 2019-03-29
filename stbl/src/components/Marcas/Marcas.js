import React from 'react';
import { Link } from "react-router-dom";
import SliderCenter from '../Slider/SliderCenter';

 const Marcas = () => {

    //Lista de brands para slider
    const brandsList = [
      (<img src='https://cdn.shopify.com/s/files/1/1825/4753/files/brand1_a62a4abd-c4d8-43f7-9be9-37adfa92edbd_600x.png?v=1542084117' alt='brand'/>),
      (<img src='https://cdn.shopify.com/s/files/1/1825/4753/files/brand2_4f11aa70-6e52-487d-a451-5a334eedf930_600x.png?v=1542084126' alt='brand'/>),
      (<img src='https://cdn.shopify.com/s/files/1/1825/4753/files/brand3_f6b97b8c-88bf-4f52-9141-bbe476733f8b_600x.png?v=1542084137' alt='brand'/>),
      (<img src='https://cdn.shopify.com/s/files/1/1825/4753/files/brand4_0f8d50f7-58eb-4144-b80e-415ffc390a10_600x.png?v=1542084145' alt='brand'/>),
      (<img src='https://cdn.shopify.com/s/files/1/1825/4753/files/brand5_991a5ea1-7704-41b9-8411-bee43494c715_600x.png?v=1542084151' alt='brand'/>),
      (<img src='https://cdn.shopify.com/s/files/1/1825/4753/files/brand2_4f11aa70-6e52-487d-a451-5a334eedf930_600x.png?v=1542084126' alt='brand'/>),
      (<img src='https://cdn.shopify.com/s/files/1/1825/4753/files/brand1_a62a4abd-c4d8-43f7-9be9-37adfa92edbd_600x.png?v=1542084117' alt='brand'/>),
      (<img src='https://cdn.shopify.com/s/files/1/1825/4753/files/brand5_991a5ea1-7704-41b9-8411-bee43494c715_600x.png?v=1542084151' alt='brand'/>),
    ]

    return (
      <div className ='container'>
        <div className="bread">
            <Link to="/home" >Home</Link>
            <span className="arrow">/</span>
            <span>Marcas</span>
        </div>

        <h3 className='spotlight' style={tituloPeriferico}>Nossas marcas</h3>
        <hr/>
        <p>
            <SliderCenter lista={brandsList}/>
        </p>
        <h3 className='spotlight' style={tituloPeriferico}>Nossas marcas</h3>
        <hr/>
        <p className='text-center discreet-arimo' style={textoPeriferico}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )
}

export default Marcas

const tituloPeriferico = {
  fontSize: '20px',
  marginTop: '10px'
}

const textoPeriferico = {
  maxWidth: '60%',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: '14px',
}