import React, { Component } from 'react';
import ListaProduto from '../Produto/ListaProduto';
//Usando ListaProdutos provisoamente para mostrar produtos adicionados ao carrinho.

class Carrinho extends Component {
    render() {
        let retorno;

        if (this.props.dados.length == 0) {
            retorno = (
                <div>Nenhum produto no Carrinho</div>
            );
        } else {
            retorno = <ListaProduto noCarrinho list={this.props.dados} atualizarQtdCarrinho={this.props.atualizarQtdCarrinho} removerCarrinho={this.props.removerCarrinho} />
        }

        return (
            <div>
                {
                    retorno
                }

                <p className="subtotalQuantidade"><b>SubTotal: R${
                    parseFloat((teste).toFixed(2))
                }</b>
                </p>
            </div>
        )
    }
}

export default Carrinho;