import React, {Component} from 'react';
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
    }

    atualizarInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    enviar = () =>{
        let flag = true;

        //Checando se há algum campo vazio antes de enviar dados:
        if(this.state.id === "" || this.state.img === "" || this.state.titulo === "" || this.state.marca === "" || this.state.preco === "" || this.state.estoque === "" || this.state.descricao === "" || this.state.tipoProduto === ""){
            flag = false;
            alert("Preencha todos os campos antes de enviar");
        };

        if(flag){
            console.log("Produto "+ this.state.id+" enviado para o BD");
        }
        
    }


    render(){
        return(
            <div className='admin-form'>
                <form className='admin-form'>
            <div className='admin-form-item'>
                <label for="inputIdProduto">ID:</label>
                <br/>
                <input id="inputIdProduto" type="text" placeholder="ID" name="id" onChange={this.atualizarInput}/>
            </div>
            
            <div className='admin-form-item'>
                <label for="inputTitulo">TITULO:</label><br/>
                <input id="inputTitulo" type="text" placeholder="TTULO" name="titulo" onChange={this.atualizarInput}/>
            </div>

            

            <div className='admin-form-item'>
                <label for="inputMarca">MARCA:</label><br/>
                <input id="inputMarca" type="text" placeholder="MARCA" name="marca" onChange={this.atualizarInput}/>
            </div>

            

            <div className='admin-form-item'>
                <label for="inputPreco">PREÇO:</label><br/>
                <input id="inputPreco" type="number" placeholder="00,00" name="preco" onChange={this.atualizarInput}/>
            </div>

            <div className='admin-form-item'>
                <label for="inputQtd">QUANTIDADE EM ESTOQUE:</label><br/>
                <input id="inputQtd" type="number" placeholder="0" name="estoque" onChange={this.atualizarInput}/>
            </div>

            <div className='admin-form-item'>
                <label for="inputTipo">TIPO:</label><br/>
                <input id="inputTipo" type="text" placeholder="TIPO" name="tipoProduto" onChange={this.atualizarInput}/>
            </div>

            <div className='admin-form-item'>
                <label for="inputDesc">DESCRIÇÃO:</label><br/>
                <textarea id="inputDesc" type="text" placeholder="DESCRIÇÃO DO PRODUTO" name="descricao" onChange={this.atualizarInput}/>
            </div>

            <div className='admin-form-item'>
                <label for="inputImg">IMAGEM:</label>
                <input type="file" id="inputImg"/>
            </div>
        </form>
            <div className='admin-form-item'>
                <button className='btn-secundaryy' onClick={() =>{this.enviar()}}>Enviar</button>
            </div>
        </div>
        
        )}
}

export default FormNovoProduto;