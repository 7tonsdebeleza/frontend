import React, { Component } from 'react';
import ListaProduto from '../Produto/ListaProduto';
import Cart from '../Images/cart.svg'
import { Link } from "react-router-dom";
//Usando ListaProdutos provisoamente para mostrar produtos adicionados ao carrinho.

class Carrinho extends Component {
    state = {
        naoestalogado: false
    }

    fecharCompra = () => {
        this.setState({
            naoestalogado: true
        })
    }

    render() {
        let retorno;
        let subtotal = 0;

        if (this.props.dados.length === 0) {
            retorno = (
                <div className="container defaultCarrinho">
                    <div>
                        Nenhum produto no Carrinho
                    </div>
                    <img src={Cart} width='50' height='50' alt='cart'></img>
                </div>
            );
        } else {
            retorno = <ListaProduto noCarrinho list={this.props.dados} atualizarQtdCarrinho={this.props.atualizarQtdCarrinho} removerCarrinho={this.props.removerCarrinho} naNavbar={this.props.naNavbar}/>

            retorno.props.list.forEach(element => {
                subtotal = subtotal + element.preco * element.qtd;
            });

        } 


        return (
            <div className="container">
                <div className="tituloCarrinho">
                    <span>PRODUTOS NO CARRINHO:</span>
                </div>
                {
                    retorno
                }
                {
                    subtotal !== 0 ?
                        <div className="subtotalQuantidade"><b>SubTotal: R${
                            parseFloat((subtotal).toFixed(2))
                        }</b>
                            <div className="nav botoesCarrinho">
                                {this.props.botaoCarrinho ?
                                    <p className="nav-item button-sec botao1">
                                        <Link to="/carrinho" className="btn-secondary">Ir para o Carrinho</Link>
                                    </p> :
                                    <p className="nav-item button-sec botao1">
                                        <Link to="/lojavirtual" className="btn-secondary">Escolher mais produtos</Link>
                                    </p>
                                }

                                <p className="nav-item button-pri botao2">
                                    <Link to="#" onClick={() => { this.fecharCompra() }}>Fechar compra</Link>
                                </p>
                                {this.state.naoestalogado ?
                                    <div className="container" style={{ fontSize: '15px' }}>
                                        <p>Para finalizar a compra faça Login em sua conta! <Link to="/login">Login</Link></p>
                                        <p>Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                                    </div> : ""}
                            </div>
                        </div> : ""
                }


            </div>
        )
    }
}

export default Carrinho;