import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ThumbInput from '../ThumbInput/ThumbInput';
import api from "../API/api";
import './Admin.css';

class FormNovoProduto extends Component {
  state = {
    img: null,
    titulo: "",
    marca: "",
    preco: '',
    estoque: '',
    tipoProduto: "",
    promocao: false,
    descricao: "",
    comprimento: "",
    altura: "",
    largura: "",
    peso: "",
    alert: false,
    errorMsg: "",

    carregando: false,
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

  chamarAlerta = (msg) => {
    this.setState({
      alert: msg,
    }, () => {
      let alertDiv = document.getElementById("alert-div");
      if (alertDiv) alertDiv.scrollIntoView();
    });
  }

  imageInput = (e) => {
    this.setState({ img: e.target.files[0] });
  }

  enviar = async () => {

    let { img, titulo, marca, preco, estoque, descricao, tipoProduto,
      comprimento, altura, largura, peso, promocao } = this.state;

    // Verificação se todos os dados foram preenchidos
    if (!img || !titulo || !marca || !preco || !estoque || !descricao || !tipoProduto
      || !comprimento || !altura || !largura || !peso
      || !titulo.toString().trim() || !marca.toString().trim() || !preco.toString().trim()
      || !estoque.toString().trim() || !descricao.toString().trim() || !tipoProduto.toString().trim()
      || !comprimento.toString().trim() || !altura.toString().trim() || !largura.toString().trim()
      || !peso.toString().trim())
      return this.chamarAlerta("Preencha todos os dados!");

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
      return this.chamarAlerta("A soma resultante do comprimento + largura + altura não deve superar a 200cm (Correios)");

    if (isNaN(peso) || peso < 0)
      return this.chamarAlerta("Formato inválido para peso do produto (Correios)!");

    peso = parseFloat(peso);

    if (!Number.isInteger(peso))
      return this.chamarAlerta("Formato inválido para peso do produto (Correios)! Insira um valor inteiro!");

    if (peso > 30000) return this.chamarAlerta("O produto deve ter peso máximo de até 30kg (Correios)!");

    promocao = promocao === 'on' || promocao === true ? true : false;

    let novoProduto = new FormData();
    novoProduto.append('img', img);
    novoProduto.append('titulo', titulo);
    novoProduto.append('marca', marca);
    novoProduto.append('descricao', descricao);
    novoProduto.append('preco', preco);
    novoProduto.append('estoque', estoque);
    novoProduto.append('tipoProduto', tipoProduto);
    novoProduto.append('comprimento', comprimento);
    novoProduto.append('altura', altura);
    novoProduto.append('largura', largura);
    novoProduto.append('peso', peso);
    novoProduto.append('promocao', promocao);

    this.setState({ carregando: true });

    const token = localStorage.getItem("@stbl/admin/user");

    await api.post("/criarproduto", novoProduto, { headers: { authorization: token } }).then(res => {
      // ###### analisar respostas 
      if (res.data === "Imagem já existente!" || res.data === "Titulo já existente!") {
        return this.setState({ alert: res.data });

      } else {
        alert("Novo produto criado com exito!");

      }

    }).catch(e => {
      console.log(e);
      return this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");

    });

    this.setState({ carregando: false });

  }


  render() {
    const categorias = ['Cuidados com a pele', 'Pincéis', 'Boca', 'Pó', 'Bases', 'Paletas', 'Olhos', 'Primer', 'Iluminador', 'Blushs', 'Fixador'];

    return (
      <div className='admin-form'>
        <p><strong>FORMULÁRIO DE CADASTRO DE NOVO PRODUTO</strong></p>

        <form className='admin-form'>
          <div className='admin-form-item'>
            <label htmlFor="inputTitulo">TITULO:</label><br />
            <input id="inputTitulo" type="text" placeholder="TITULO" name="titulo" value={this.state.titulo} onChange={this.atualizarInput} />
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputMarca">MARCA:</label><br />
            <input id="inputMarca" type="text" placeholder="MARCA" name="marca" value={this.state.marca} onChange={this.atualizarInput} />
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputPreco">PREÇO:</label><br />
            <input id="inputPreco" type="number" placeholder="00.00" name="preco" value={this.state.preco} onChange={this.atualizarInput} />
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputQtd">QUANTIDADE EM ESTOQUE:</label><br />
            <input id="inputQtd" type="number" min="0" step="1" placeholder="0" name="estoque" value={this.state.estoque} onChange={this.atualizarInput} />
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputTipo">CATEGORIA:</label><br />
            <select id="inputTipo" type="text" placeholder="TIPO" name="tipoProduto" value={this.state.tipoProduto} onChange={this.atualizarInput}>
              <option key={0} value={''}></option>
              {
                categorias.map(cat => {
                  return (<option key={cat} value={cat}> {cat} </option>)
                })
              }

            </select>
          </div>

          <div className='admin-form-item' >
            <label htmlFor="inputProm">PRODUTO EM PROMOÇÃO:</label>
            <input id="inputProm" type="checkbox" value={this.props.promocao} name="promocao" onClick={this.atualizarInputCheckbox} />
          </div>

          <br />

          <div className='admin-form-item'>
            <label htmlFor="inputDesc">DESCRIÇÃO:</label><br />
            <textarea id="inputDesc" type="text" placeholder="DESCRIÇÃO DO PRODUTO" name="descricao" value={this.state.descricao} onChange={this.atualizarInput} />
          </div>

          <br />

          <div className='admin-form-item'>
            <label>IMAGEM:</label>
            <ThumbInput onChange={this.imageInput} />

          </div>

        </form>

        <hr />
        <p><strong>DADOS DA ENCOMENDA</strong></p>

        <form className='admin-form'>
          <div className='admin-form-item'>
            <label htmlFor="inputComprimento">COMPRIMENTO (cm):</label><br />
            <input id="inputComprimento" type="number" min="0" step="1" name="comprimento" value={this.state.comprimento} onChange={this.atualizarInput} />
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputAltura">ALTURA (cm):</label><br />
            <input id="inputAltura" type="number" min="0" step="1" name="altura" value={this.state.altura} onChange={this.atualizarInput} />
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputLargura">LARGURA (cm):</label><br />
            <input id="inputLargura" type="number" min="0" step="1" name="largura" value={this.state.largura} onChange={this.atualizarInput} />
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputPeso">PESO (g):</label><br />
            <input id="inputPeso" type="number" min="0" step="1" name="peso" value={this.state.peso} onChange={this.atualizarInput} />
          </div>

        </form>

        <div className='admin-form-item'>
          <button className='btn-secundaryy' onClick={() => { this.enviar() }}> {this.state.carregando ? "Enviando..." : "Enviar"} </button>
          {
            this.state.alert ?
              (<div id="alert-div" className="alertacadastro">{this.state.alert}
                <Link className="fecharalerta" onClick={() => this.setState({ alert: null })} to="#">X</Link>
              </div>)
              : null
          }
        </div>

        <p className="btn-secundaryy">
          <Link to="/admin7tons"> &larr; Retornar</Link>
        </p>
      </div>

    )
  }
}

export default FormNovoProduto;