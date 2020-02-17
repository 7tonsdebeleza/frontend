import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ThumbInput from '../ThumbInput/ThumbInput';
import Modal from "../Modal/Modal";
import api from "../API/api";

class ProdutoEditavel extends Component {

  state = {
    dadosProduto: this.props.dados,
    id: this.props.dados.id,
    img: this.props.dados.img,
    titulo: this.props.dados.titulo,
    marca: this.props.dados.marca,
    preco: this.props.dados.preco,
    estoque: this.props.dados.estoque,
    tipoProduto: this.props.dados.tipoProduto,
    descricao: this.props.dados.descricao,
    comprimento: this.props.dados.comprimento,
    altura: this.props.dados.altura,
    largura: this.props.dados.largura,
    diametro: this.props.dados.diametro,
    peso: this.props.dados.peso,
    newImage: null,
    alert: null,
    
  }

  chamarAlerta = (msg) => {
    this.setState({
      alert: msg,
    }, () => 
    {
      let alertDiv = document.getElementById("alert-div");
      if (alertDiv) alertDiv.scrollIntoView();
    });
  }

  CliqueVerDetalhes = (ProdutoId) => { /* função para abrir o modal dos produtos*/
    const modal = document.getElementById(ProdutoId);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
      if (e.target.id === ProdutoId || e.target.className === 'fechar') {
        modal.classList.remove('mostrar');
      }
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        modal.classList.remove('mostrar');
      }
    });
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
  removerItem = async (id) =>{
    //PopUp de confimação
    const res = await api.post("/removerproduto",{"_id":id});
    console.log(res);

    //####### Caso dê certo, callback abaixo:
    alert("Produto foi removido com êxito! Esta pagina será recarregada...");
    window.location.reload();

    //###### Caso não dê certo, callback abaixo:
    //this.setState({alert:true, errorMsg: "Não foi possível remover este item, tente novamente mais tarde"})
  }

  //######### Salvar atualizações feitas
  salvar = async () =>{

    let { titulo, marca, preco, estoque, descricao, tipoProduto,
      comprimento, altura, largura, diametro, peso} = this.state;

    //Verificando se algum campo foi deixado vazio antes de atualizar dados:
    if( !titulo || !marca || !preco || !estoque || !descricao || !tipoProduto
      || !comprimento || !altura || !largura || !diametro || !peso
      || !titulo.toString().trim() || !marca.toString().trim() || !preco.toString().trim()
      || !estoque.toString().trim() || !descricao.toString().trim() || !tipoProduto.toString().trim()
      || !comprimento.toString().trim() || !altura.toString().trim() || !largura.toString().trim()
      || !diametro.toString().trim() || !peso.toString().trim() ){
      
      if(this.state.newImage !== null){
        const id = this.state.id
        const data = new FormData();
        data.append('img',this.state.newImage)

        await api.post("/atualizarimagem",data,{
          headers: {id}
        });
      }

      if(this.state.titulo !== this.props.dados.titulo){
        await api.post("/atualizartitulo",{"id":this.state.id,"novo_titulo":this.state.titulo})
      }

      if(this.state.marca !== this.props.dados.marca){
        await api.post("/atualizarmarca",{"id":this.state.id,"nova_marca":this.state.marca})
      }

      if(this.state.preco !== this.props.dados.preco){
        await api.post("/atualizarpreco",{"id":this.state.id,"novo_preco":this.state.preco})
      }

      if(this.state.estoque !== this.props.dados.estoque){
        await api.post("/atualizarestoque",{"id":this.state.id,"novo_estoque":this.state.estoque})
      }

      if(this.state.descricao !== this.props.dados.descricao){
        await api.post("/atualizardescricao",{"id":this.state.id,"nova_descricao":this.state.descricao})
      }

      if(this.state.tipoProduto !== this.props.dados.tipoProduto){
        await api.post("/atualizartipo",{"id":this.state.id,"novo_tipo":this.state.tipoProduto})
      }

      alert("Produto atualizado! Esta página será recarregada...");
      window.location.reload(true);

      //######### Caso ocorra algum erro, mudar state para alerta de erro
    } else {
      this.setState({
        alert: true,
        errorMsg: "Todos os campos de texto devem estar preenchidos para essa ação"
      })
    }
  }

  atualizarInput = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  imageInput = (e) =>{
    this.setState({newImage: e.target.files[0]});
  }

  render() {

    //Ids dinâmicos dependentes do local do produto para evitar conflito de modal
    let ProdutoId = this.props.dados.id;
    let BotaoId = ProdutoId + "Bta";
    let BotaoModal = ProdutoId + "Btamodal";
    let BotaoModalCancel = ProdutoId + "BtamodalCancel";

    const categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3'];
        
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
            <div><img src={this.props.dados.img} alt="img" className="imagemProdutoModal" /></div>
            <div className="descricaoProdutoModal">
              <p>
                <b>Título:</b>
                <input className='admin-form' type='text' value={this.state.titulo} name="titulo" onChange={this.atualizarInput}/>
              </p>
                            
              <p>
                <b>Tipo de Produto:</b>
                <select  className='admin-form' type="text" placeholder="TIPO" name="tipoProduto" value={this.state.tipoProduto} onChange={this.atualizarInput}>
                  <option key={0} value={''}></option>
                  {
                    categorias.map(cat => {
                      return(<option key={cat} value={cat}> {cat} </option>)
                    })
                  }
                </select>
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
                <b>Preco (R$):</b>
                <input className='admin-form' type='number' value={this.state.preco} name="preco" onChange={this.atualizarInput}/>
              </p>

              <p>
                <b>IMAGEM:</b>
                <ThumbInput onChange={this.imageInput}/>
              </p>

              <p>
                <b>Comprimento:</b>
                <input className='admin-form' type='number' value={this.state.comprimento} name="comprimento" onChange={this.atualizarInput}/>
              </p>

              <p>
                <b>Altura (cm):</b>
                <input className='admin-form' type='number' value={this.state.altura} name="altura" onChange={this.atualizarInput}/>
              </p>

              <p>
                <b>Largura (cm):</b>
                <input className='admin-form' type='number' value={this.state.largura} name="largura" onChange={this.atualizarInput}/>
              </p>

              <p>
                <b>Diametro (cm):</b>
                <input className='admin-form' type='number' value={this.state.diametro} name="diametro" onChange={this.atualizarInput}/>
              </p>

              <p>
                <b>Peso (g):</b>
                <input className='admin-form' type='number' value={this.state.peso} name="peso" onChange={this.atualizarInput}/>
              </p>

              <button onClick={() =>{this.salvar()}}>Enviar</button>
              <button id={BotaoModal}>Remover item</button>

              <Modal listenersId={[BotaoModal, BotaoModalCancel]} actived={false}>
                <h3>Tem certeza que deseja remover este item?</h3>
                <p>O produto será removido completamnte do catálogo da loja virtual e não poderá ser recuperado!</p>
                <div><button onClick={() =>{this.removerItem(this.props.dados.id)}}>Continuar</button></div>
                <div><button id={BotaoModalCancel} >Cancelar</button></div>
              </Modal>

              {
                this.state.alert ? 
                  (<div id="alert-div" className="alertacadastro">{this.state.alert}
                    <Link className="fecharalerta" onClick={() => this.setState({alert: false}) } to="#">X</Link>
                  </div>) : null
              }
                            
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProdutoEditavel;