import React, { Component } from 'react';
import './Admin.css';

class ProdutoEditavel extends Component {

    state = {...this.props.dados}

    //State guarda informações que já existem dos dados para serem editadas

    CliqueVerDetalhes = (ProdutoId) => { /* função para abrir o modal dos produtos*/
        const modal = document.getElementById(ProdutoId);
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id === ProdutoId || e.target.className === 'fechar') {
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

    removerItem = (id) =>{
        console.log("remover item "+id+" do banco de dados");
    }

    salvar = () =>{
        console.log(this.state.titulo);
    }

    atualizarInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        //Ids dinâmicos dependentes do local do produto para evitar conflito de modal
        let ProdutoId = this.props.dados.id;
        let BotaoId = ProdutoId + "Bta";
        
        return (
            <div >
                {/* Produto: imagem, marca, titulo, preço e botao de ver detalhes*/}
                <div className="produto" onMouseOver={() => this.AparecerBotaoDetalhes(BotaoId)} onMouseOut={() => this.DesaparecerBotaoDetalhes(BotaoId)} >
                    <div>
                        <img src={this.props.dados.img} alt="img" className="imagemProduto" onClick={() => this.CliqueVerDetalhes(ProdutoId)} />
                        <div className="divbotaoVerDetalhes">
                            <button onClick={() => this.CliqueVerDetalhes(ProdutoId)} className="botaoVerDetalhes" id={BotaoId}>Editar</button>

                        </div>
                    </div>
                    <div className="descricaoProduto" onClick={() => this.CliqueVerDetalhes(ProdutoId)}>
                        <p className="marcadescricaoProduto">{this.props.dados.marca}</p>
                        <p className="titulodescricaoProduto">{this.props.dados.titulo}</p>
                        <p className="precodescricaoProduto">R${this.props.dados.preco}</p>
                    </div>


                </div>
                {/* Modal com as informações mais detalhadas do produto a serem editadas*/}
                <div id={ProdutoId} className="modal-container">
                    <div className="modal admin-form">
                        <div>
                            <img src={this.props.dados.img} alt="img" className="imagemProdutoModal" />
                        </div>
                        <div className="descricaoProdutoModal">
                            <p>
                                <b>Título:</b>
                                <input className='admin-form' type='text' value={this.state.titulo} name="titulo" onChange={this.atualizarInput}/>
                            </p>

                            <p>
                                <b>ID:</b>
                                <input className='admin-form' type='text' value={this.state.id} name="id" onChange={this.atualizarInput}/>
                            </p>   

                            <p>
                                <b>Tipo de Produto:</b>
                                <input className='admin-form' type='text' value={this.state.tipoProduto} name="tipoProduto" onChange={this.atualizarInput}/> 
                            </p>

                            <p>
                                <b>Marca:</b>
                                <input className='admin-form' type='text' value={this.state.marca} name="marca" onChange={this.atualizarInput}/>
                            </p>
                            
                            <p>
                                <b>Descrição:</b>
                                <textarea className='admin-form' type='text' value={this.state.descricao} name="descricao" onChange={this.atualizarInput}/>
                            </p>

                            <p>
                                <b>Quantidade em estoque:</b>
                                <input className='admin-form' type='number' value={this.state.estoque} name="estoque" onChange={this.atualizarInput}/>

                            </p>

                            <p>
                                <b>Preco:</b>
                                <input className='admin-form' type='number' value={this.state.preco} name="preco" onChange={this.atualizarInput}/>
                            </p>

                            <label htmlFor="inputImg">Enviar nova imagem:</label>
                            <input type="file" id="inputImg"/>

                            <button onClick={() =>{this.salvar()}}>Enviar</button>
                            <button onClick={() =>{this.removerItem(this.state.id)}}>Remover item</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProdutoEditavel;