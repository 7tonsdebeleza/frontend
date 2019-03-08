import React, { Component } from 'react'

class Produto extends Component {
    constructor() {
        super();
        this.state = {
            contadorQtd: 1
        }

        this.CliqueVerDetalhes = this.CliqueVerDetalhes.bind(this);
        this.decrementarQtd = this.decrementarQtd.bind(this);
        this.incrementarQtd = this.incrementarQtd.bind(this);
        this.AparecerBotaoDetalhes = this.AparecerBotaoDetalhes.bind(this);
        this.DesaparecerBotaoDetalhes = this.DesaparecerBotaoDetalhes.bind(this);
    }

    CliqueVerDetalhes = () => {
        const modal = document.getElementById(this.props.id);
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id == this.props.id || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        })
    }

    AparecerBotaoDetalhes = () => {
        const botao = document.getElementById(this.props.img);
        botao.classList.add('mostrarBotao');
    }

    DesaparecerBotaoDetalhes = () => {
        const botao = document.getElementById(this.props.img);
        botao.classList.remove('mostrarBotao');
    }



    decrementarQtd = () => {
        if (this.state.contadorQtd == 1) {
            return;
        }
        this.setState({
            contadorQtd: this.state.contadorQtd - 1,
        });
    }

    incrementarQtd = () => {
        this.setState({
            contadorQtd: this.state.contadorQtd + 1,
        });
    }

    render() {
        return (
            <div >
                <div className="produto" onMouseOver={this.AparecerBotaoDetalhes} onMouseOut={this.DesaparecerBotaoDetalhes}>
                    <div>
                        <img src={this.props.img} alt="img" className="imagemProduto"  
                         />
                        <div className="divbotaoVerDetalhes">
                            <button onClick={this.CliqueVerDetalhes} className="botaoVerDetalhes" id={this.props.img}>Ver detalhes</button>
                        </div>
                    </div>
                    <div className="descricaoProduto">
                        <p>{this.props.marca}</p>
                        <p>{this.props.titulo}</p>
                        <p>R${this.props.preco}</p>
                    </div>
                </div>
                <div id={this.props.id} className="modal-container">
                    <div className="modal">
                        <div>
                            <img src={this.props.img} alt="img" className="imagemProdutoModal" />
                        </div>
                        <div>
                            <button className="fechar">X</button>
                            <h1>{this.props.titulo}</h1>
                            <p>Disponibilidade: {this.props.estoque}</p>
                            <p>Tipo de Produto: {this.props.tipoProduto}</p>
                            <p>Marca: {this.props.marca}</p>
                            <p>{this.props.descricao}</p>
                            <p>Escolha o tamanho:</p>
                            <button>PP</button><button>P</button><button>M</button><button>G</button><button>GG</button>
                            <h1>R${this.props.preco}</h1>
                            <div>
                                <p>Quantidade: </p>
                                <button onClick={this.decrementarQtd}>-</button>
                                {this.state.contadorQtd}
                                <button onClick={this.incrementarQtd}>+</button>
                            </div>
                            <p>SubTotal: R${this.props.preco * this.state.contadorQtd}</p>
                            <button>Adicionar ao Carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Produto;