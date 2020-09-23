import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ThumbInput from '../ThumbInput/ThumbInput';
import Modal from "../Modal/Modal";
import makeup from '../Images/makeup.svg';
import api from "../API/api";

class ProdutoEditavel extends Component {

  state = {
    dadosProduto: this.props.dados,
    id: this.props.dados.id,
    img: this.props.dados.img,
    titulo: this.props.dados.titulo,
    marca: this.props.dados.marca,
    preco: this.props.dados.preco,
    promocao: this.props.dados.promocao,
    novidade: this.props.dados.novidade,
    estoque: this.props.dados.estoque,
    tipoProduto: this.props.dados.tipoProduto,
    descricao: this.props.dados.descricao,
    comprimento: this.props.dados.comprimento,
    altura: this.props.dados.altura,
    largura: this.props.dados.largura,
    peso: this.props.dados.peso,
    newImage: null,
    alert: null,

    atualizando: false,

  }

  cover = (e) => {
    e.target.src = makeup;
    e.target.width = 60;
  }

  chamarAlerta = (msg) => {
    this.setState({
      alert: msg,
    }, () => {
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

  // Remover item do banco de dados
  removerItem = async (id) => {
    //PopUp de confimação
    const token = localStorage.getItem("@stbl/admin/user");
    const res = await api.post("/removerproduto", { "_id": id }, { headers: { authorization: token } });

    if (res.data._id) {
      alert("Produto foi removido com êxito! Esta pagina será recarregada...");
      window.location.reload();
    } else {
      this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!")
    }

  }

  // Salvar atualizações feitas
  salvar = async () => {

    let { titulo, marca, preco, estoque, descricao, tipoProduto,
      comprimento, altura, largura, peso, promocao, novidade } = this.state;

    let erro = false;

    //Verificando se algum campo foi deixado vazio antes de atualizar dados:
    if (titulo && marca && preco && estoque && descricao && tipoProduto
      && comprimento && altura && largura && peso
      && titulo.toString().trim() && marca.toString().trim() && preco.toString().trim()
      && estoque.toString().trim() && descricao.toString().trim() && tipoProduto.toString().trim()
      && comprimento.toString().trim() && altura.toString().trim() && largura.toString().trim()
      && peso.toString().trim()) {

      titulo = titulo.toString();
      if (titulo.length > 100) return this.chamarAlerta("O título deve até 100 carecteres (PagSeguro)");

      marca = marca.toString();

      if (isNaN(preco) || preco < 0) return this.chamarAlerta("Formato inválido para preço!");
      if (preco > 10000) return this.chamarAlerta("Valor do produto não de exceder R$ 10.000,00 (Correios)");
      preco = parseFloat(preco).toFixed(2);

      if (isNaN(estoque) || estoque < 0)
        return this.chamarAlerta("Formato inválido para quantidade em estoque!");
      estoque = parseFloat(estoque);
      if (!Number.isInteger(estoque))
        return this.chamarAlerta("Formato inválido para quantidade em estoque!");

      tipoProduto = tipoProduto.toString();

      if (isNaN(comprimento) || comprimento < 0)
        return this.chamarAlerta("Formato inválido para comprimento de embalagem (Correios)! Insira um número válido!");

      comprimento = parseFloat(comprimento);

      if (!Number.isInteger(comprimento))
        return this.chamarAlerta("Formato inválido para comprimento de embalagem (Correios)! Insira um valor inteiro!");

      if (comprimento > 105)
        return this.chamarAlerta("O comprimento não pode exceder 105cm (Correios).");

      if (isNaN(altura) || altura < 0)
        return this.chamarAlerta("Formato inválido para altura de embalagem (Correios)!");

      altura = parseFloat(altura);

      if (!Number.isInteger(altura))
        return this.chamarAlerta("Formato inválido para altura de embalagem (Correios)! Insira um valor inteiro!");

      if (altura > 105)
        return this.chamarAlerta("A altura não pode exceder 105cm (Correios).");

      if (isNaN(largura) || largura < 0)
        return this.chamarAlerta("Formato inválido para largura de embalagem (Correios)!");

      largura = parseFloat(largura);

      if (!Number.isInteger(largura))
        return this.chamarAlerta("Formato inválido para largura de embalagem (Correios)! Insira um valor inteiro!");

      if (largura > 105)
        return this.chamarAlerta("A largura não pode exceder 105cm (Correios).");

      if (comprimento + altura + largura > 200)
        return this.chamarAlerta("A soma resultante do comprimento + largura + altura não deve superar a 200cm (Correios)")

      if (isNaN(peso) || peso < 0)
        return this.chamarAlerta("Formato inválido para peso do produto (Correios)!");

      peso = parseFloat(peso);

      if (!Number.isInteger(peso))
        return this.chamarAlerta("Formato inválido para peso do produto (Correios)! Insira um valor inteiro!");

      if (peso > 30000) return this.chamarAlerta("O produto deve ter peso máximo de até 30kg (Correios)!");

      const token = localStorage.getItem("@stbl/admin/user");

      if (this.state.newImage !== null) {

        this.setState({ atualizando: true });

        const id = this.state.id;
        const data = new FormData();
        data.append('img', this.state.newImage);


        const res = await api.post("/atualizarimagem", data, {
          headers: {
            authorization: token,
            id
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }

      }

      if (titulo !== this.props.dados.titulo && !erro) {
        const res = await api.post("/atualizartitulo", { "id": this.state.id, "novo_titulo": titulo }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      if (marca !== this.props.dados.marca && !erro) {
        const res = await api.post("/atualizarmarca", { "id": this.state.id, "nova_marca": marca }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      if (preco !== this.props.dados.preco && !erro) {
        const res = await api.post("/atualizarpreco", { "id": this.state.id, "novo_preco": preco }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      if (estoque !== this.props.dados.estoque && !erro) {
        const res = await api.post("/atualizarestoque", { "id": this.state.id, "novo_estoque": estoque }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      if (descricao !== this.props.dados.descricao && !erro) {
        const res = await api.post("/atualizardescricao", { "id": this.state.id, "nova_descricao": descricao }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      if (tipoProduto !== this.props.dados.tipoProduto && !erro) {
        const res = await api.post("/atualizartipo", { "id": this.state.id, "novo_tipo": tipoProduto }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      promocao = promocao === 'on' || promocao === true ? true : false;
      if (promocao !== this.props.dados.promocao && !erro) {
        const res = await api.post("/atualizarpromocao", { "id": this.state.id, "promocao": promocao }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      novidade = novidade === 'on' || novidade === true ? true : false;
      if (novidade !== this.props.dados.novidade && !erro) {
        const res = await api.post("/atualizarnovidade", { "id": this.state.id, "novidade": novidade }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      if (comprimento !== this.props.dados.comprimento && !erro) {
        const res = await api.post("/atualizarcomprimento", { "id": this.state.id, "novo_comprimento": comprimento }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      if (altura !== this.props.dados.altura && !erro) {
        const res = await api.post("/atualizaraltura", { "id": this.state.id, "nova_altura": altura }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      if (largura !== this.props.dados.largura && !erro) {
        const res = await api.post("/atualizarlargura", { "id": this.state.id, "nova_largura": largura }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      if (peso !== this.props.dados.peso && !erro) {
        const res = await api.post("/atualizarpeso", { "id": this.state.id, "novo_peso": peso }, {
          headers: {
            authorization: token
          }
        });

        if (!res.data.id) {
          this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
          erro = true;
        }
      }

      if (!erro) {
        alert("Produto atualizado! Esta página será recarregada...");
        window.location.reload(true);
      }

      this.setState({ atualizando: false });

    } else {
      this.chamarAlerta("Preencha todos os campos!");
    }
  }

  atualizarInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  atualizarInputCheckbox = (e) => {
    console.log(e.target.value)
    let last = this.state[e.target.name];
    this.setState({
      [e.target.name]: last ? false : true,
    })
  }

  imageInput = (e) => {
    this.setState({ newImage: e.target.files[0] });
  }

  render() {

    //Ids dinâmicos dependentes do local do produto para evitar conflito de modal
    let ProdutoId = this.props.dados.id;
    let BotaoId = ProdutoId + "Bta";
    let BotaoModal = ProdutoId + "Btamodal";
    let BotaoModalCancel = ProdutoId + "BtamodalCancel";

    const categorias = ['Cuidados com a pele', 'Pincéis', 'Boca', 'Pó', 'Bases', 'Paletas', 'Olhos', 'Primer', 'Iluminador', 'Blushs', 'Fixador'];

    return (
      <div >
        {/* Produto: imagem, marca, titulo, preço e botao de ver detalhes*/}
        <div className="produto" onMouseOver={() => this.AparecerBotaoDetalhes(BotaoId)} onMouseOut={() => this.DesaparecerBotaoDetalhes(BotaoId)} >
          <div>
            <img src={this.props.dados.img} alt="img" className="imagemProduto" onError={this.cover} onClick={() => this.CliqueVerDetalhes(ProdutoId)} />
            <div className="divbotaoVerDetalhes">
              <button onClick={() => this.CliqueVerDetalhes(ProdutoId)} className="botaoVerDetalhes" id={BotaoId}>Editar</button>

            </div>
          </div>
          <div className="descricaoProduto" onClick={() => this.CliqueVerDetalhes(ProdutoId)}>
            <p className="marcadescricaoProduto">{this.props.dados.marca}</p>
            <p className="titulodescricaoProduto">{this.props.dados.titulo}</p>
            <p className="precodescricaoProduto">R${parseFloat(this.props.dados.preco).toFixed(2)}</p>
          </div>

        </div>
        {/* Modal com as informações mais detalhadas do produto a serem editadas*/}
        <div id={ProdutoId} className="modal-container">
          <div className="modal admin-form">
            <div><img src={this.props.dados.img} alt="img" className="imagemProdutoModal" onError={this.cover} /></div>
            <div className="descricaoProdutoModal">
              <p>
                <b>Título:</b>
                <input className='admin-form' type='text' value={this.state.titulo} name="titulo" onChange={this.atualizarInput} />
              </p>

              <p>
                <b>Categoria:</b>
                <select className='admin-form' type="text" placeholder="TIPO" name="tipoProduto" value={this.state.tipoProduto} onChange={this.atualizarInput}>
                  <option key={0} value={''}></option>
                  {
                    categorias.map(cat => {
                      return (<option key={cat} value={cat}> {cat} </option>)
                    })
                  }
                </select>
              </p>

              <p>
                <b>Marca:</b>
                <input className='admin-form' type='text' value={this.state.marca} name="marca" onChange={this.atualizarInput} />
              </p>

              <p>
                <b>Descrição:</b>
                <textarea className='admin-form' type='text' value={this.state.descricao} name="descricao" onChange={this.atualizarInput} />
              </p>

              <p>
                <b>Quantidade em estoque:</b>
                <input className='admin-form' type='number' value={this.state.estoque} name="estoque" onChange={this.atualizarInput} />

              </p>

              <p>
                <b>Preco (R$):</b>
                <input className='admin-form' type='number' value={this.state.preco} name="preco" onChange={this.atualizarInput} />
              </p>

              <p>
                <b>Em promoção:</b>
                <input className='admin-form' type='checkbox' checked={this.state.promocao} name="promocao" onClick={this.atualizarInputCheckbox} />
              </p>

              <p>
                <b>Novidade:</b>
                <input className='admin-form' type='checkbox' checked={this.state.novidade} name="novidade" onClick={this.atualizarInputCheckbox} />
                <em>Produtos marcados como novidade aparecem em destaque na sua página inicial.</em>
              </p>

              <p>
                <b>IMAGEM:</b>
                <ThumbInput onChange={this.imageInput} />
              </p>

              <p>
                <b>Comprimento:</b>
                <input className='admin-form' type='number' value={this.state.comprimento} name="comprimento" onChange={this.atualizarInput} />
              </p>

              <p>
                <b>Altura (cm):</b>
                <input className='admin-form' type='number' value={this.state.altura} name="altura" onChange={this.atualizarInput} />
              </p>

              <p>
                <b>Largura (cm):</b>
                <input className='admin-form' type='number' value={this.state.largura} name="largura" onChange={this.atualizarInput} />
              </p>

              <p>
                <b>Peso (g):</b>
                <input className='admin-form' type='number' value={this.state.peso} name="peso" onChange={this.atualizarInput} />
              </p>

              <button onClick={() => { this.salvar() }}>Enviar</button>
              {this.state.atualizando ? <em> Enviando dados... </em> : null}
              <button id={BotaoModal}>Remover item</button>

              <Modal listenersId={[BotaoModal, BotaoModalCancel]} actived={false}>
                <h3>Tem certeza que deseja remover este item?</h3>
                <p>O produto será removido completamente do catálogo da loja virtual e não poderá ser recuperado!</p>
                <div><button onClick={() => { this.removerItem(this.props.dados.id) }}>Continuar</button></div>
                <div><button id={BotaoModalCancel} >Cancelar</button></div>
              </Modal>

              {
                this.state.alert ?
                  (<div id="alert-div" className="alertacadastro">{this.state.alert}
                    <Link className="fecharalerta" onClick={() => this.setState({ alert: false })} to="#">X</Link>
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