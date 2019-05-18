import React from 'react';
import { Link } from "react-router-dom";
import SliderCenter from '../Slider/SliderCenter';
import BrandsList from './MarcasList'; //Lista de brands para slider

const Marcas = () => {

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
            <SliderCenter lista={BrandsList}/>
        </p>
        <h3 className='spotlight' style={tituloPeriferico}>Loremous</h3>
        <hr/>
        <p className='text-center discreet-arimo' style={textoPeriferico}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3 className='spotlight' style={tituloPeriferico}>Isabella</h3>
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