import React, { Component } from 'react';
import './styleSlider.css';

//Variação de Slider que mostrar mais de um componente

class SliderCenter extends Component {
    //state guarda contador para controle do scroll horizontal
    state = {
        index: 0
    }

    //função move scroll do slider para direita
    next = () =>{
        const tamanhoLista = this.props.lista.length;
        let novoIndex = (this.state.index) === tamanhoLista - 1 ? 0 : this.state.index + 1;

        this.setState({
            index: novoIndex,
        })
    }

    //função move scroll do slider para esquerda
    previous = () =>{
        const tamanhoLista = this.props.lista.length;
        let novoIndex = (this.state.index) === 0 ? tamanhoLista - 1 : this.state.index - 1;

        this.setState({
            index: novoIndex,
        })
    }

    render(){
        //Keys para tornar lista sintática
        let keyIdList = 0;

        return(
            <div>
                {/*Botões para controle do scroll do slider*/}
                <button className='controles controles-left' onClick={() => {this.previous()}} style={this.props.large ? {height: '200px'} : (null)}>
                        <span className="seta-esquerda" aria-hidden="true"></span>
                </button>
                <button className='controles controles-right' onClick={() => {this.next()}} style={this.props.large ? {height: '200px'} : (null)}>
                    <span className="seta-direita" aria-hidden="true" ></span>
                </button>

                <div className='centeredSlider'>
                    {/*Conteúdo interno do slider é deslizado de acordo com o state*/}
                    <div className='centeredSlider-wrap' style={{
                        display: 'flex',
                        marginLeft: this.state.index * 240 * (-1)
                    }}>

                    {
                        //Mapeadno lista de componentes
                        this.props.lista.map(function(component){
                            keyIdList ++;
                            return (
                                <div className='centeredSlider-component' key={keyIdList}>
                                    {component}
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default SliderCenter;