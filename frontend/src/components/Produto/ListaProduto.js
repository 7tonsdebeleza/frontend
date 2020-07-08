import React, { Component } from 'react';
import Produto from "./Produto";

/*Componente para a renderização dinâmica de produtos
Lista de dados são passados através de pros "list"
*/

class ListaProduto extends Component {
    render() {
        let id_number = 0
        return (
            <div>
                <div className="listaProduto">
                <ul className="nav container d-flex">

                    {   this.props.list.length > 0 ?
                        this.props.list.map((dados) => {
                            id_number++
                            return(
                                <li className="pro nav-item" key={id_number}>
                                    <Produto noCarrinho={this.props.noCarrinho} dados={dados} addCarrinho={this.props.addCarrinho} atualizarQtdCarrinho={this.props.atualizarQtdCarrinho} removerCarrinho={this.props.removerCarrinho} naNavbar={this.props.naNavbar} attQtdItem={this.props.attQtdItem} carrinho={this.props.carrinho} />
                                </li>
                            )
                        }) : <i> nenhum produto no momento </i>
                    }
                    
                </ul>
                </div>
            </div>
        )
    }
}

export default ListaProduto;