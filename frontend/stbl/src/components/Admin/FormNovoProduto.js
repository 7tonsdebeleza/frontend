import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone';
import upload from "../Images/upload.svg";
import './Admin.css';

class FormNovoProduto extends Component {
    state = {
        id: "",
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

    atualizarInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    imageIput = (img) =>{
        this.setState({img: img[0]});
    }

    //######## Deverá enviar dados de um novo produto para o banco de dados
    enviar = () =>{

        //Checando se há algum campo vazio antes de enviar dados:
        if(this.state.id !== "" && this.state.img !== "" && this.state.titulo !== "" && this.state.marca !== "" && this.state.preco !== "" && this.state.estoque !== "" && this.state.descricao !== "" && this.state.tipoProduto !== "" && this.state.img !== null){
            //####### Enviar img do produto para bd e receber url

            let url = "###";

            let novoProduto = {
                id: this.state.id,
                img: url,
                titulo: this.state.titulo,
                marca: this.state.marca,
                preco: this.state.preco,
                estoque: this.state.estoque,
                tipo: this.state.tipoProduto,
                descricao: this.state.descricao,
            }

            //####### Substituir abaixo para funçao de create
            console.log(novoProduto);


            //####### Caso ocorra algum erro, usar alert semelhante ao else abaixo

            //####### Caso não ocorra, passar feedback e resetar form
            alert("Novo produto criado com exito");
            this.setState({
                id: "",
                img: null,
                titulo: "",
                marca: "",
                preco: '',
                estoque: '',
                tipoProduto: "",
                descricao: "",
                alert: false,
                errorMsg: "",
            })

        } else {
            console.log("ERRO")
            this.setState({
                alert: true,
                errorMsg: "Por favor, preencha todos os dados..."
            })
        }
        
    }


    render(){
        return(
            <div className='admin-form'>
                <p><strong>FORMULÁRIO DE CADASTRO DE NOVO PRODUTO</strong></p>
                <form className='admin-form'>
                    <div className='admin-form-item'>
                        <label htmlFor="inputIdProduto">ID:</label>
                        <br/>
                        <input id="inputIdProduto" type="text" placeholder="ID" name="id" onChange={this.atualizarInput} value={this.state.id}/>
                    </div>
            
                    <div className='admin-form-item'>
                        <label htmlFor="inputTitulo">TITULO:</label><br/>
                        <input id="inputTitulo" type="text" placeholder="TTULO" name="titulo" value={this.state.titulo} onChange={this.atualizarInput}/>
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

                    <div className='admin-form-item'>
                        <label htmlFor="inputDesc">DESCRIÇÃO:</label><br/>
                        <textarea id="inputDesc" type="text" placeholder="DESCRIÇÃO DO PRODUTO" name="descricao" value={this.state.descricao} onChange={this.atualizarInput}/>
                    </div>

                    <div>
                     <Dropzone onDrop={acceptedFiles => this.imageIput(acceptedFiles)}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                <div className="Dropzone-field" {...getRootProps()}>
                                    <input {...getInputProps()} type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.atualizarInput} />
                                    {this.state.img !== null? (<p>{this.state.img.path}</p>) : <img src={upload} className="Upload-icon" alt="upload icon" />}
                                    <p>Clique aqui ou arraste uma nova imagem</p>
                                    
                                </div>
                                </section>
                            )}
                        </Dropzone>     
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
        </div>
        
        )}
}

export default FormNovoProduto;