import React, {Component} from 'react';
import './Admin.css';

class FormNovoProduto extends Component {
    render(){
        return(
        <form className='admin-form'>
            <div className='admin-form-item'>
                <label for="inputIdProduto">ID:</label>
                <br/>
                <input id="inputIdProduto" type="text" placeholder="ID"/>
            </div>
            
            <div className='admin-form-item'>
                <label for="inputTitulo">TITULO:</label><br/>
                <input id="inputTitulo" type="text" placeholder="TTULO"/>
            </div>

            

            <div className='admin-form-item'>
                <label for="inputMarca">MARCA:</label><br/>
                <input id="inputMarca" type="text" placeholder="MARCA"/>
            </div>

            

            <div className='admin-form-item'>
                <label for="inputPreco">PREÇO:</label><br/>
                <input id="inputPreco" type="number" placeholder="00,00"/>
            </div>

            <div className='admin-form-item'>
                <label for="inputQtd">QUANTIDADE EM ESTOQUE:</label><br/>
                <input id="inputQtd" type="number" placeholder="0"/>
            </div>

            <div className='admin-form-item'>
                <label for="inputTipo">TIPO:</label><br/>
                <input id="inputTipo" type="text" placeholder="TIPO"/>
            </div>

            <div className='admin-form-item'>
                <label for="inputDesc">DESCRIÇÃO:</label><br/>
                <textarea id="inputDesc" type="text" placeholder="DESCRIÇÃO DO PRODUTO"/>
            </div>

            <div className='admin-form-item'>
                <label for="inputImg">IMAGEM:</label>
                <input type="file" id="inputImg"/>
            </div>

            <div className='admin-form-item'>
                <button className='btn-secundaryy'>Enviar</button>
            </div>

        </form>
        )}
}

export default FormNovoProduto;