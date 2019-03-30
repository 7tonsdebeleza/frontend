import React, { Component } from 'react'
import Menos from "../Images/minus.svg"
import Mais from "../Images/plus.svg"

class Produto extends Component {
    constructor() {
        super();
        this.state = {
            contadorQtd: 1, /* Contador da quantidade escolhida de um produto */
            cor: ""
        }

        this.CliqueVerDetalhes = this.CliqueVerDetalhes.bind(this);
        this.decrementarQtd = this.decrementarQtd.bind(this);
        this.incrementarQtd = this.incrementarQtd.bind(this);
        this.AparecerBotaoDetalhes = this.AparecerBotaoDetalhes.bind(this);
        this.DesaparecerBotaoDetalhes = this.DesaparecerBotaoDetalhes.bind(this);

    }

    CliqueVerDetalhes = () => { /* função para abrir o modal dos produtos*/
        const modal = document.getElementById(this.props.id);
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id === this.props.id || e.target.className === 'fechar') {
                modal.classList.remove('mostrar');
            }
        })
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                modal.classList.remove('mostrar');
            }
        })
    }

    /* funções para aparecer e desaparecer o botão Ver Detalhes quando o mouse estiver em cima do produto */
    AparecerBotaoDetalhes = () => {
        const botao = document.getElementById(this.props.img);
        botao.classList.add('mostrarBotao');
    }

    DesaparecerBotaoDetalhes = () => {
        const botao = document.getElementById(this.props.img);
        botao.classList.remove('mostrarBotao');
    }

    /* funções para incrementar e decrementar a quantidade escolhida do produto */
    decrementarQtd = () => {
        if (this.state.contadorQtd === 1) {
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

    /* função para pegar o tamanho escolhido */


    render() {
        return (
            <div >
                {/* Produto: imagem, marca, titulo, preço e botao de ver detalhes*/}
                <div className="produto" onMouseOver={this.AparecerBotaoDetalhes} onMouseOut={this.DesaparecerBotaoDetalhes} >
                    <div>
                        <img src={this.props.img} alt="img" className="imagemProduto" onClick={this.CliqueVerDetalhes} />
                        <div className="divbotaoVerDetalhes">
                            <button onClick={this.CliqueVerDetalhes} className="botaoVerDetalhes" id={this.props.img}>Ver detalhes</button>

                        </div>
                    </div>
                    <div className="descricaoProduto" onClick={this.CliqueVerDetalhes}>
                        <p className="marcadescricaoProduto">{this.props.marca}</p>
                        <p className="titulodescricaoProduto">{this.props.titulo}</p>
                        <p className="precodescricaoProduto">R${this.props.preco}</p>
                    </div>
                </div>
                {/* Modal com as informações mais detalhadas do produto incluindo a opção de add ao carrinho */}
                <div id={this.props.id} className="modal-container">
                    <div className="modal">
                        <div>
                            <img src={this.props.img} alt="img" className="imagemProdutoModal" />
                        </div>
                        <div className="descricaoProdutoModal">
                            <button className="fechar">X</button>
                            <h1><b>{this.props.titulo}</b></h1>
                            <p><b>Disponibilidade:</b> { this.props.estoque ? <p style={{display: 'inline'}}>Em estoque</p> : <p style={{display: 'inline'}}>Faltando no estoque</p>}</p>
                            <p><b>Tipo de Produto:</b> {this.props.tipoProduto}</p>
                            <p><b>Marca:</b> {this.props.marca}</p>
                            <p>{this.props.descricao}</p>
                            
                            {this.props.multiColor ? 
                            <div className="botoesCor">
                                <p><b>Cor:</b> {this.state.cor} </p>
                                {/* funções para pegar o tamanho escolhido */}
                                <button className="botoesCor1" tabindex="0"
                                    onClick={() => {
                                        this.setState({ cor: "Cor de Pele" })
                                        console.log(this.state.cor);
                                    }}
                                ></button>
                                <button className="botoesCor2" tabindex="0"
                                    onClick={() => {
                                        this.setState({ cor: "Cinza" })
                                        console.log(this.state.cor);
                                    }}
                                ></button>
                                <button className="botoesCor3" tabindex="0"
                                    onClick={() => {
                                        this.setState({ cor: "Marrom" })
                                        console.log(this.state.cor);
                                    }}
                                ></button>
                                <button className="botoesCor4" tabindex="0"
                                    onClick={() => {
                                        this.setState({ cor: "Vermelho" })
                                        console.log(this.state.cor);
                                    }}
                                ></button>
                                <button className="botoesCor5" tabindex="0"
                                    onClick={() => {
                                        this.setState({ cor: "Salmão" })
                                        console.log(this.state.cor);
                                    }}
                                ></button>
                            </div> : ""}
                            

                            <span>1x de R$ {this.props.preco} sem juros</span>
                            <h2><b>R$ {this.props.preco}</b></h2>
                            <p><b>Quantidade:</b></p>
                            <div>
                                <button onClick={this.decrementarQtd} className="botoesQuantidade menos"><img src={Menos} width='15' height='15' alt='menos'></img></button>
                                {this.state.contadorQtd}
                                <button onClick={this.incrementarQtd} className="botoesQuantidade mais"><img src={Mais} width='15' height='15' alt='Mais'></img></button>
                            </div>
                            <p className="subtotalQuantidade"><b>SubTotal: R${
                                parseFloat((this.props.preco * this.state.contadorQtd).toFixed(2))
                                }</b>
                            </p>
                            
                            { this.props.estoque ? <button className="botaoAddCarrinho"> ADICIONAR AO CARRINHO</button> : <button className="botaoAddCarrinhoDisabilitado"> ADICIONAR AO CARRINHO</button>}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Produto;