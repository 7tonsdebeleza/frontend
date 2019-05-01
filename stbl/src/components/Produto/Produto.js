import React, { Component } from 'react'
import Menos from "../Images/minus.svg"
import Mais from "../Images/plus.svg"
import Lixeira from "../Images/lixeira.svg"
import { Link } from "react-router-dom";

class Produto extends Component {
    constructor() {
        super();
        this.state = {

            cor: ""
        }

        this.CliqueVerDetalhes = this.CliqueVerDetalhes.bind(this);
        this.AparecerBotaoDetalhes = this.AparecerBotaoDetalhes.bind(this);
        this.DesaparecerBotaoDetalhes = this.DesaparecerBotaoDetalhes.bind(this);

    }

    CliqueVerDetalhes = () => { /* função para abrir o modal dos produtos*/
        const modal = document.getElementById(this.props.dados.id);
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id === this.props.dados.id || e.target.className === 'fechar') {
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
        const botao = document.getElementById(this.props.dados.img);
        botao.classList.add('mostrarBotao');
    }

    DesaparecerBotaoDetalhes = () => {
        const botao = document.getElementById(this.props.dados.img);
        botao.classList.remove('mostrarBotao');
    }

    /* funções para incrementar e decrementar a quantidade escolhida do produto */


    attQtd = (qtda) => {

        //Testando se entrada é negativa, caso positivo, impedir decrementação negativa
        if (qtda < 0) {
            if (this.props.dados.qtd === 1) {
                return;
            }
        }


        this.props.dados.qtd = this.props.dados.qtd + qtda;
        //Eviando dados para pai:
        //console.log(this.props.dados);

        this.props.atualizarQtdCarrinho(qtda);


        //verificar se a qtd esta certa
    }

    addCarrinho = () => {

        let dados = this.props.dados;
        dados.qtd = 1;
        dados.noCarrinho = true;
        dados.cor = this.state.cor;


        //Eviando dados para pai:
        this.props.addCarrinho(dados);

    }

    removerCarrinho = () => {
        let dados = this.props.dados;
        this.props.removerCarrinho(dados);

    }


    render() {
        return (
            <div >
                {/* Produto: imagem, marca, titulo, preço e botao de ver detalhes*/}
                <div className="produto" onMouseOver={this.AparecerBotaoDetalhes} onMouseOut={this.DesaparecerBotaoDetalhes} >
                    <div>
                        <img src={this.props.dados.img} alt="img" className="imagemProduto" onClick={this.CliqueVerDetalhes} />
                        <div className="divbotaoVerDetalhes">
                            <button onClick={this.CliqueVerDetalhes} className="botaoVerDetalhes" id={this.props.dados.img}>Ver detalhes</button>

                        </div>
                    </div>
                    <div className="descricaoProduto" onClick={this.CliqueVerDetalhes}>
                        <p className="marcadescricaoProduto">{this.props.dados.marca}</p>
                        <p className="titulodescricaoProduto">{this.props.dados.titulo}</p>
                        <p className="precodescricaoProduto">R${this.props.dados.preco}</p>
                    </div>
                    {
                        this.props.noCarrinho ?
                            <div>
                                <button onClick={() => this.attQtd(-1)} className="botoesQuantidade menos"><img src={Menos} width='15' height='15' alt='menos'></img></button>
                                {this.props.dados.qtd}
                                <button onClick={() => this.attQtd(1)} className="botoesQuantidade mais"><img src={Mais} width='15' height='15' alt='Mais'></img></button>
                                <img onClick={() => this.removerCarrinho()} className="iconelixeira" src={Lixeira} width='25' height='25' alt='lixeira'></img>
                            </div> : ""
                    }


                </div>
                {/* Modal com as informações mais detalhadas do produto incluindo a opção de add ao carrinho */}
                <div id={this.props.dados.id} className="modal-container">
                    <div className="modal">
                        <div>
                            <img src={this.props.dados.img} alt="img" className="imagemProdutoModal" />
                        </div>
                        <div className="descricaoProdutoModal">
                            <button className="fechar">X</button>
                            <h1><b>{this.props.dados.titulo}</b></h1>
                            <p><b>Disponibilidade:</b> {this.props.dados.estoque ? <p style={{ display: 'inline' }}>Em estoque</p> : <p style={{ display: 'inline' }}>Faltando no estoque</p>}</p>
                            <p><b>Tipo de Produto:</b> {this.props.dados.tipoProduto}</p>
                            <p><b>Marca:</b> {this.props.dados.marca}</p>
                            <p>{this.props.dados.descricao}</p>

                            {this.props.dados.multiColor ?
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


                            <span>1x de R$ {this.props.dados.preco} sem juros</span>
                            <h2><b>R$ {this.props.dados.preco}</b></h2>


                            {this.props.dados.estoque ? this.props.dados.noCarrinho ?
                                <div>
                                    <button className="botaoAddCarrinhoDisabilitado"> PRODUTO ADICIONADO AO CARRINHO</button>
                                    <div className="nav botoesCarrinho">
                                        <p className="nav-item button-pri botaomodal1">
                                            <Link to="/lojavirtual" >Ver outros produtos</Link>
                                        </p>
                                        <p className="nav-item button-pri botaomodal2">
                                            <Link to="/carrinho" >Ir para o carrinho</Link>
                                        </p>
                                    </div>
                                </div> :
                                <button className="botaoAddCarrinho" onClick={() => this.addCarrinho()}> ADICIONAR AO CARRINHO</button> :
                                <div>
                                    <button className="botaoAddCarrinhoDisabilitado"> SEM ESTOQUE :(</button>
                                        <div className="nav botoesCarrinho">
                                        <p className="nav-item button-pri botaomodal1">
                                            <Link to="/lojavirtual" >Ver outros produtos</Link>
                                        </p>
                                        <p className="nav-item button-pri botaomodal2">
                                            <Link to="/carrinho" >Ir para o carrinho</Link>
                                        </p>
                                    </div>
                                </div>
                            }


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Produto;