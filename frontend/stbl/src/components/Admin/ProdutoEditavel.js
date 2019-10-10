import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone';
import upload from "../Images/upload.svg";
import './Admin.css';

class ProdutoEditavel extends Component {

    /*
        State:
            - dadosProdutos: guarda um objeto com todos os dados de um produto a ser editado ou excluido
            - newImage: guardará arquivo de imagem caso atualização seja feita
            - alert: boolano que ficará true quando houver algum erro no processo de edição ou exclusão
            - errorMsg: guardará string com mensagem de erro quando ocorrer.
    */
    state = {
        dadosProduto: this.props.dados,
        newImage: null,
        alert: false,
        errorMsg: " ",
    }

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

    //######### Remover item do banco de dados (caso seje necessário outra informação além do id, basca pegar do state)
    removerItem = (id) =>{
        //PopUp de confimação

        console.log("remover item "+id+" do banco de dados");
        //####### Caso dê certo, callback abaixo:
        alert("Este produto foi removido do banco de dados");

        //###### Caso não dê certo, callback abaixo:
        //this.setState({alert:true, errorMsg: "Não foi possível remover este item, tente novamente mais tarde"})
    }

    //######### Salvar atualizações feitas
    salvar = () =>{
        //Verificação de campos nulos
        //Verificar se imagem será atualizada para gerar novo link antes da att
    }

    atualizarInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    imageIput = (img) =>{
        this.setState({newImage: img[0]});
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
                                <input className='admin-form' type='text' value={this.state.dadosProduto.titulo} name="titulo" onChange={this.atualizarInput}/>
                            </p>

                            <p>
                                <b>ID:</b>
                                <input className='admin-form' type='text' value={this.state.dadosProduto.id} name="id" onChange={this.atualizarInput}/>
                            </p>   

                            <p>
                                <b>Tipo de Produto:</b>
                                <input className='admin-form' type='text' value={this.state.dadosProduto.tipoProduto} name="tipoProduto" onChange={this.atualizarInput}/> 
                            </p>

                            <p>
                                <b>Marca:</b>
                                <input className='admin-form' type='text' value={this.state.dadosProduto.marca} name="marca" onChange={this.atualizarInput}/>
                            </p>
                            
                            <p>
                                <b>Descrição:</b>
                                <textarea className='admin-form' type='text' value={this.state.dadosProduto.descricao} name="descricao" onChange={this.atualizarInput}/>
                            </p>

                            <p>
                                <b>Quantidade em estoque:</b>
                                <input className='admin-form' type='number' value={this.state.dadosProduto.estoque} name="estoque" onChange={this.atualizarInput}/>

                            </p>

                            <p>
                                <b>Preco:</b>
                                <input className='admin-form' type='number' value={this.state.dadosProduto.preco} name="preco" onChange={this.atualizarInput}/>
                            </p>

                            <Dropzone onDrop={acceptedFiles => this.imageIput(acceptedFiles)}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                    <div className="Dropzone-field" {...getRootProps()}>
                                        <input {...getInputProps()} type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.atualizarInput} />
                                        {this.state.newImage !== null? (<p>{this.state.newImage.path}</p>) : <img src={upload} className="Upload-icon" alt="upload icon" />}
                                        <p>Clique aqui ou arraste uma nova imagem</p>
                                    
                                    </div>
                                    </section>
                                )}
                            </Dropzone> 

                            <button onClick={() =>{this.salvar()}}>Enviar</button>
                            <button onClick={() =>{this.removerItem(this.props.dados.id)}}>Remover item</button>

                            {
                                this.state.alert ? 
                                    (<div className="alertacadastro">{this.state.errorMsg}
                                        <Link className="fecharalerta" onClick={() => this.setState({alert: false}) } to="#">X</Link>
                                    </div>)
                                : null
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProdutoEditavel;