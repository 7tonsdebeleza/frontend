import React, { Component } from 'react'

class Produto extends Component {
    constructor() {
        super();
        this.state = { 
            contadorQtd: 1, /* Contador da quantidade escolhida de um produto */
            tamanhoRoupa: ""
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
            if(event.key === 'Escape'){
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
                        <img src={this.props.img} alt="img" className="imagemProduto" onClick={this.CliqueVerDetalhes}/>
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
                            <h1>{this.props.titulo}</h1>
                            <p><b>Disponibilidade:</b> {this.props.estoque}</p>
                            <p><b>Tipo de Produto:</b> {this.props.tipoProduto}</p>
                            <p><b>Marca:</b> {this.props.marca}</p>
                            <p>{this.props.descricao}</p>
                            <p>Escolha o tamanho:</p>
                            
                            <div className="botoesTamanho">
                            {/* funções para pegar o tamanho escolhido */}
                            <button tabindex="0" 
                            onClick={() => {
                                this.setState({tamanhoRoupa: "PP"})
                                console.log(this.state.tamanhoRoupa);
                            }}
                            >PP</button>
                            <button tabindex="0" 
                            onClick={() => {
                                this.setState({tamanhoRoupa: "P"})
                                console.log(this.state.tamanhoRoupa);
                            }}
                            >P</button>
                            <button tabindex="0" 
                            onClick={() => {
                                this.setState({tamanhoRoupa: "M"})
                                console.log(this.state.tamanhoRoupa);
                            }}
                            >M</button>
                            <button tabindex="0" 
                            onClick={() => {
                                this.setState({tamanhoRoupa: "G"})
                                console.log(this.state.tamanhoRoupa);
                            }}
                            >G</button>
                            <button tabindex="0" 
                            onClick={() => {
                                this.setState({tamanhoRoupa: "GG"})
                                console.log(this.state.tamanhoRoupa);
                            }}
                            >GG</button>
                            </div>

                            <h2><b>R${this.props.preco}</b></h2>
                            <p><b>Quantidade:</b></p>
                            <div>
                                <button onClick={this.decrementarQtd} className="botoesQuantidade"><i className="fa fa-minus" aria-hidden="true"></i></button>
                                {this.state.contadorQtd}
                                <button onClick={this.incrementarQtd} className="botoesQuantidade"><i className="fa fa-plus" aria-hidden="true"></i></button>
                            </div>
                            <p className="subtotalQuantidade"><b>SubTotal: R${this.props.preco * this.state.contadorQtd}</b></p>
                            <button><p><i className="botaoAddCarrinho fas fa-cart-plus fa-1x"></i> ADICIONAR AO CARRINHO</p></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Produto;