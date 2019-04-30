import React, { Component } from 'react';
import Produto from "./Produto";

/*Componente para a renderização dinâmica de produtos
Lista de dados são passados através de pros "list"
*/

class ListaProduto extends Component {
    render() {
        return (
            <div>
                <div className="listaProduto">
                <ul className="nav container d-flex">

                    {
                        this.props.list.map((dados) => {
                            return(
                                <li className="pro nav-item">
                                    <Produto dados={dados} addCarrinho={this.props.addCarrinho} atualizarQtdCarrinho={this.props.atualizarQtdCarrinho} removerCarrinho={this.removerCarrinho}/>
                                </li>
                            )
                        })
                    }
                    
                </ul>
                </div>
            </div>
        )
    }
}

export default ListaProduto;