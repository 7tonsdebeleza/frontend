import React, { Component } from 'react';
import camera from './camera.svg';
import './style.css';

//Componente de input de imagem com geração de thumbnail
//this.props.onChange deverá conter função que armazenará arquivo no state do componente pai

class ThumbInput extends Component {

    state = {
        thumbUrl: null
    }

    handleFile = (e) => {
        let url = URL.createObjectURL(e.target.files[0]);
        this.setState({ thumbUrl: url});
        this.props.onChange(e);
    }

    render(){
        return(
            <label id="thumbnail" className={this.state.thumbUrl ? 'has-thumb' : ''}>
                <input type="file" onChange={this.handleFile}/>
                {
                    this.state.thumbUrl ? 
                    <img src={this.state.thumbUrl} alt="Selected img"/>
                    : <img id="select-img" src={camera} alt="Select img"/>
                }
            </label>
        )
    }
}

export default ThumbInput;