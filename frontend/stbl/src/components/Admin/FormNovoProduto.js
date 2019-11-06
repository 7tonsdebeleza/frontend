import React, {Component} from 'react';
import { Link } from "react-router-dom";
//import Dropzone from 'react-dropzone';
//import upload from "../Images/upload.svg";
import './Admin.css';
import api from "../API/api";

import camera from './camera.svg'

class FormNovoProduto extends Component {
    state = {
        img: null,
        titulo: "",
        marca: "",
        preco: '',
        estoque: '',
        tipoProduto: "",
        descricao: "",
        alert: false,
        errorMsg: "",
    }

    preview = () =>{
        return this.state.img ? URL.createObjectURL(this.state.img) : null
    }

    atualizarInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    imageInput = (img) =>{
        this.setState({img: img[0]});
    }

    //######## Deverá enviar dados de um novo produto para o banco de dados
    enviar = async () =>{

        //Checando se há algum campo vazio antes de enviar dados:
        if(this.state.img !== null && this.state.titulo !== "" && this.state.marca !== "" && this.state.preco !== "" && this.state.estoque !== "" && this.state.descricao !== "" && this.state.tipoProduto !== "" /* && this.state.img !== null*/){
            //####### Enviar img do produto para bd e receber url
            const novoProduto = new FormData();
            novoProduto.append('img',this.state.img)
            novoProduto.append('titulo',this.state.titulo)
            novoProduto.append('marca',this.state.marca)
            novoProduto.append('descricao',this.state.descricao)
            novoProduto.append('preco',this.state.preco)
            novoProduto.append('estoque',this.state.estoque)
            novoProduto.append('tipoProduto',this.state.tipoProduto)

            const res = await api.post("/criarproduto",novoProduto)

            if(res.data === "Imagem já existente!" || res.data === "Titulo já existente!"){
                this.setState({alert:true, errorMsg: res.data})
            }else{
                alert("Novo produto criado com exito! Esta página será recarregada...");
                window.location.reload(true);
            }
            
        } else {
            console.log("ERRO")
            this.setState({
                alert: true,
                errorMsg: "Por favor, preencha todos os dados..."
            })
        }
        
    }


    render(){
        console.log(window.location.pathname)
        return(
            <div className='admin-form'>
                <p><strong>FORMULÁRIO DE CADASTRO DE NOVO PRODUTO</strong></p>
                <form className='admin-form'>
                    <div className='admin-form-item'>
                        <label htmlFor="inputTitulo">TITULO:</label><br/>
                        <input id="inputTitulo" type="text" placeholder="TITULO" name="titulo" value={this.state.titulo} onChange={this.atualizarInput}/>
                    </div>

                    <div className='admin-form-item'>
                        <label htmlFor="inputMarca">MARCA:</label><br/>
                        <input id="inputMarca" type="text" placeholder="MARCA" name="marca" value={this.state.marca} onChange={this.atualizarInput}/>
                    </div>            

                    <div className='admin-form-item'>
                        <label htmlFor="inputPreco">PREÇO:</label><br/>
                        <input id="inputPreco" type="number" placeholder="00,00" name="preco" value={this.state.preco} onChange={this.atualizarInput}/>
                    </div>

                    <div className='admin-form-item'>
                        <label htmlFor="inputQtd">QUANTIDADE EM ESTOQUE:</label><br/>
                        <input id="inputQtd" type="number" placeholder="0" name="estoque" value={this.state.estoque} onChange={this.atualizarInput}/>
                    </div>

                    <div className='admin-form-item'>
                        <label htmlFor="inputTipo">TIPO:</label><br/>
                        <input id="inputTipo" type="text" placeholder="TIPO" name="tipoProduto" value={this.state.tipoProduto} onChange={this.atualizarInput}/>
                    </div>

                    <div>
                        <label htmlFor="inputDesc">DESCRIÇÃO:</label><br/>
                        <textarea id="inputDesc" type="text" placeholder="DESCRIÇÃO DO PRODUTO" name="descricao" value={this.state.descricao} onChange={this.atualizarInput}/>
                    </div>

                    <div>

                        <label id="thumbnail" style={{backgroundImage:`url(${this.preview()})`}} className={this.state.img ? 'has-thumb' : ''}>
                            <input type="file" onChange={event => this.setState({img: event.target.files[0]})}/>
                            <img src={camera} alt="Select img"/>
                        </label>
                        
                        {/*<Dropzone onDrop={acceptedFiles => this.imageInput(acceptedFiles)}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                    <div className="Dropzone-field" {...getRootProps()}>
                                        <input {...getInputProps()} type="file" accept="image/x-png,image/gif,image/jpeg"/>
                                        {this.state.img !== null? (<p>{this.state.img.path}</p>) : <img src={upload} className="Upload-icon" alt="upload icon" />}
                                        <p>Clique aqui ou arraste uma nova imagem</p>
                                        
                                    </div>
                                    </section>
                                )}
                        </Dropzone>*/}     
                    </div>
                    
                    
                </form>
                <div className='admin-form-item'>
                    <button className='btn-secundaryy' onClick={() =>{this.enviar()}}>Enviar</button>
                    {
                        this.state.alert ? 
                        (<div className="alertacadastro">{this.state.errorMsg}
                            <Link className="fecharalerta" onClick={() => this.setState({alert: false}) } to="#">X</Link>
                        </div>)
                        : null
                    }
                </div>

                <p className="btn-secundaryy">
                    <Link to="/admin7tons"> &larr; Retornar</Link>
                </p>
        </div>
        
        )}
}

export default FormNovoProduto;