import React, { Component } from 'react'; 
import ListaProduto from '../Produto/ListaProduto';
//Usando ListaProdutos provisoamente para mostrar produtos adicionados ao carrinho.

class Carrinho extends Component{
    render(){
        let retorno;

        if(this.props.dados.length == 0){
            retorno = (
                <div>Nenhum produto no Carrinho</div>
            );
        } else {
            retorno = <ListaProduto list={this.props.dados} atualizarQtdCarrinho={this.props.atualizarQtdCarrinho} removerCarrinho={this.props.removerCarrinho}/>
        }

        return(
            <div>
                {
                    retorno
                }
            </div>
        )
    }
}

export default Carrinho;