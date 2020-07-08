import React, { Component } from 'react';
import Menos from "../Images/minus.svg";
import Mais from "../Images/plus.svg";
import Lixeira from "../Images/lixeira.svg";
import { Link } from "react-router-dom";
import makeup from '../Images/makeup.svg'

class Produto extends Component {
    state = {
        cor: ""
    }

    /* função para abrir o modal dos produtos*/
    CliqueVerDetalhes = (ProdutoId) => {
        const modal = document.getElementById(ProdutoId);
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id === ProdutoId || e.target.className === 'fechar' || e.target.className === 'irlojavirtual') {
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
    AparecerBotaoDetalhes = (BotaoId) => {
        const botao = document.getElementById(BotaoId);
        botao.classList.add('mostrarBotao');
    }

    DesaparecerBotaoDetalhes = (BotaoId) => {
        const botao = document.getElementById(BotaoId);
        botao.classList.remove('mostrarBotao');
    }

    attQtd = async (qtda) => {
        const produto = this.props.dados;
        await this.props.attQtdItem(qtda, produto);
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

    cover = (e) => {
        e.target.src = makeup;
        e.target.width = 60;
    }

    render() {

        //Ids dinâmicos dependentes do local do produto para evitar conflito de modal
        let ProdutoId;
        let BotaoId;

        if (this.props.naNavbar) {
            ProdutoId = this.props.dados.id + "naNavbar";
        } else if (this.props.noCarrinho) {
            ProdutoId = this.props.dados.id + "noCarrinho";
        } else {
            ProdutoId = this.props.dados.id;
        }

        BotaoId = ProdutoId + "Bta";

        console.log(this.props.dados);

        return (
            <div>
                {/* Produto: imagem, marca, titulo, preço e botao de ver detalhes*/}
                <div className="produto" onMouseOver={() => this.AparecerBotaoDetalhes(BotaoId)} onMouseOut={() => this.DesaparecerBotaoDetalhes(BotaoId)} >
                    <div>
                        <img src={this.props.dados.img} alt="img" className="imagemProduto" onClick={() => this.CliqueVerDetalhes(ProdutoId)} onError={this.cover} />
                        <div className="divbotaoVerDetalhes">
                            <button onClick={() => this.CliqueVerDetalhes(ProdutoId)} className="botaoVerDetalhes" id={BotaoId}>Ver detalhes</button>

                        </div>
                    </div>
                    <div className="descricaoProduto" onClick={() => this.CliqueVerDetalhes(ProdutoId)}>
                        <p className="marcadescricaoProduto">{this.props.dados.marca}</p>
                        <p className="titulodescricaoProduto">{this.props.dados.titulo}</p>
                        <p className="precodescricaoProduto">R${parseFloat(this.props.dados.preco).toFixed(2)}</p>
                    </div>
                    {

                        //Botões de edição que aparecem somente no produto do carrinho
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
                <div id={ProdutoId} className="modal-container">
                    <div className="modal">
                        <div>
                        {this.props.dados.novidade ? <span className="botaoAddCarrinho" style={{ background: '#e95144' }} > NOVIDADE </span> : null}
                        {this.props.dados.promocao ? <span className="botaoAddCarrinho" style={{ background: '#e95144' }} > PROMOÇÃO ESPECIAL </span> : null}

                        </div>
                        <div>
                            <img src={this.props.dados.img} alt="img" className="imagemProdutoModal" onError={this.cover} />
                        </div>
                        <div className="descricaoProdutoModal">
                            <button className="fechar">X</button>
                            <h1><b>{this.props.dados.titulo}</b></h1>
                            <div><b>Disponibilidade:</b> {this.props.dados.estoque !== 0 ? <p style={{ display: 'inline' }}>Em estoque</p> : <div style={{ display: 'inline' }}>Faltando no estoque</div>}</div>
                            <p><b>Tipo de Produto:</b> {this.props.dados.tipoProduto}</p>
                            <p><b>Marca:</b> {this.props.dados.marca}</p>
                            <p>{this.props.dados.descricao}</p>

                            <h2><b>R$ {parseFloat(this.props.dados.preco).toFixed(2)}</b></h2>


                            {this.props.dados.estoque !== 0 ? this.props.dados.noCarrinho ?
                                <div>
                                    <button className="botaoAddCarrinhoDisabilitado"> PRODUTO ADICIONADO AO CARRINHO</button>
                                    <div className="nav botoesCarrinho">
                                        <p className="nav-item button-pri botaomodal1">
                                            <Link to="/lojavirtual" className="irlojavirtual">Ver outros produtos</Link>
                                        </p>
                                        <p className="nav-item button-pri botaomodal2">
                                            <Link to="/carrinho" >Ir para o carrinho</Link>
                                        </p>
                                    </div>
                                </div> :
                                <button className="botaoAddCarrinho" onClick={() => this.addCarrinho()}> ADICIONAR AO CARRINHO</button> :
                                <div>
                                    <button className="botaoAddCarrinhoDisabilitado"> SEM ESTOQUE </button>
                                    <div className="nav botoesCarrinho">
                                        <p className="nav-item button-pri botaomodal1">
                                            <Link to="/lojavirtual" className="irlojavirtual">Ver outros produtos</Link>
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