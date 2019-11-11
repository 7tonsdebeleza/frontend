import React, {Component} from 'react';
import { Link } from "react-router-dom";
import ThumbInput from '../ThumbInput/ThumbInput';
import api from "../API/api";
import './Admin.css';

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

    atualizarInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    imageInput = (e) =>{
        this.setState({img: e.target.files[0]});
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
                        <label>IMAGEM:</label>
                        <ThumbInput onChange={this.imageInput}/>
                       
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