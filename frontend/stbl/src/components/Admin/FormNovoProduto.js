import React, {Component} from 'react';
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
    descricao: "",
    comprimento: "",
    altura: "",
    largura: "",
    diametro: "",
    peso: "",
    alert: false,
    errorMsg: "",
  }

  atualizarInput = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
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

  imageInput = (e) =>{
    this.setState({img: e.target.files[0]});
  }

  enviar = async () =>{

    let {img, titulo, marca, preco, estoque, descricao, tipoProduto,
      comprimento, altura, largura, diametro, peso} = this.state;

    // Verificação se todos os dados foram preenchidos
    if(!img || !titulo || !marca || !preco || !estoque || !descricao || !tipoProduto
      || !comprimento || !altura || !largura || !diametro || !peso
      || !titulo.toString().trim() || !marca.toString().trim() || !preco.toString().trim()
      || !estoque.toString().trim() || !descricao.toString().trim() || !tipoProduto.toString().trim()
      || !comprimento.toString().trim() || !altura.toString().trim() || !largura.toString().trim()
      || !diametro.toString().trim() || !peso.toString().trim() )
      return this.chamarAlerta("Preencha todos os dados!");

    titulo = titulo.toString();
    if(titulo.length > 100) return this.chamarAlerta("O título deve até 100 carecteres (PagSeguro)");

    marca = marca.toString();

    if(isNaN(preco) || preco < 0) return this.chamarAlerta("Formato inválido para preço!");
    if(preco > 9999999) return this.chamarAlerta("Valor do produto não de exceder R$ 9.999.999,00 (PagSeguro)");
    preco = parseFloat(preco).toFixed(2);

    if(isNaN(estoque) || estoque < 0)
      return this.chamarAlerta("Formato inválido para quantidade em estoque!");

    estoque = parseFloat(estoque);

    if(!Number.isInteger(estoque))
      return this.chamarAlerta("Formato inválido para quantidade em estoque!");

    tipoProduto = tipoProduto.toString();

    if(isNaN(comprimento) || comprimento < 0)
      return this.chamarAlerta("Formato inválido para comprimento de embalagem (Correios)! Insira um número válido!");

    comprimento = parseFloat(comprimento);

    if(!Number.isInteger(comprimento))
      return this.chamarAlerta("Formato inválido para comprimento de embalagem (Correios)! Insira um valor inteiro!");
      
    if(isNaN(altura) || altura < 0)
      return this.chamarAlerta("Formato inválido para altura de embalagem (Correios)!");

    altura = parseFloat(altura);

    if(!Number.isInteger(altura))
      return this.chamarAlerta("Formato inválido para altura de embalagem (Correios)! Insira um valor inteiro!");

    if(isNaN(largura) || largura < 0)
      return this.chamarAlerta("Formato inválido para largura de embalagem (Correios)!");

    largura = parseFloat(largura);

    if(!Number.isInteger(largura))
      return this.chamarAlerta("Formato inválido para largura de embalagem (Correios)! Insira um valor inteiro!");

    if(isNaN(diametro) || diametro < 0)
      return this.chamarAlerta("Formato inválido para diametro de embalagem (Correios)!");

    diametro = parseFloat(diametro);

    if(!Number.isInteger(diametro))
      return this.chamarAlerta("Formato inválido para diametro de embalagem (Correios)! Insira um valor inteiro!");

    if(isNaN(peso) || peso < 0)
      return this.chamarAlerta("Formato inválido para peso do produto (Correios)!");

    peso = parseFloat(peso);

    if(!Number.isInteger(peso))
      return this.chamarAlerta("Formato inválido para peso do produto (Correios)! Insira um valor inteiro!");

    if(peso > 30000) return this.chamarAlerta("O produto deve ter peso máximo de até 30kg (Correios)!");

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
    novoProduto.append('diametro', comprimento);
    novoProduto.append('peso', peso);

    api.post("/criarproduto",novoProduto).then(res => {
      if(res.data === "Imagem já existente!" || res.data === "Titulo já existente!"){
        return this.setState({alert: res.data});

      } else{
        console.log(res.data);
        alert("Novo produto criado com exito! Esta página será recarregada...");
        return window.location.reload(true);

      }

    }).catch(e => {
      console.log(e);
      return this.chamarAlerta("Erro inesperado... Tente novamente mais tarde!");
    })

  }


  render(){
    const categorias = ['Categoria 1', 'Categoria 2', 'Categoria 3'];
        
    return(
      <div className='admin-form'>
        <p><strong>FORMULÁRIO DE CADASTRO DE NOVO PRODUTO</strong></p>

        <form className='admin-form'>
          <div className='admin-form-item'>
            <label htmlFor="inputTitulo">TITULO:</label><br/>
            <input id="inputTitulo" type="text" placeholder="TITULO" name="titulo" value={this.state.titulo} onChange={this.atualizarInput}/>
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputMarca">MARCA:</label><br/>
            <input id="inputMarca" type="text" placeholder="MARCA" name="marca" value={this.state.marca} onChange={this.atualizarInput}/>
          </div>            

          <div className='admin-form-item'>
            <label htmlFor="inputPreco">PREÇO:</label><br/>
            <input id="inputPreco" type="number" placeholder="00.00" name="preco" value={this.state.preco} onChange={this.atualizarInput}/>
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputQtd">QUANTIDADE EM ESTOQUE:</label><br/>
            <input id="inputQtd" type="number" min="0" step="1" placeholder="0" name="estoque" value={this.state.estoque} onChange={this.atualizarInput}/>
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputTipo">CATEGORIA:</label><br/>
            <select id="inputTipo" type="text" placeholder="TIPO" name="tipoProduto" value={this.state.tipoProduto} onChange={this.atualizarInput}>
              <option key={0} value={''}></option>
              {
                categorias.map(cat => {
                  return(<option key={cat} value={cat}> {cat} </option>)
                })
              }

            </select>
          </div>

          <br/>

          <div className='admin-form-item'>
            <label htmlFor="inputDesc">DESCRIÇÃO:</label><br/>
            <textarea id="inputDesc" type="text" placeholder="DESCRIÇÃO DO PRODUTO" name="descricao" value={this.state.descricao} onChange={this.atualizarInput}/>
          </div>

          <br/>

          <div className='admin-form-item'>
            <label>IMAGEM:</label>
            <ThumbInput onChange={this.imageInput}/>
                       
          </div>
                    
        </form>

        <hr/>
        <p><strong>DADOS DA ENCOMENDA</strong></p>

        <form className='admin-form'>
          <div className='admin-form-item'>
            <label htmlFor="inputComprimento">COMPRIMENTO (cm):</label><br/>
            <input id="inputComprimento" type="number" min="0" step="1" name="comprimento" value={this.state.comprimento} onChange={this.atualizarInput}/>
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputAltura">ALTURA (cm):</label><br/>
            <input id="inputAltura" type="number" min="0" step="1" name="altura" value={this.state.altura} onChange={this.atualizarInput}/>
          </div>

          <div className='admin-form-item'>
            <label htmlFor="inputLargura">LARGURA (cm):</label><br/>
            <input id="inputLargura" type="number" min="0" step="1" name="largura" value={this.state.largura} onChange={this.atualizarInput}/>
          </div>

          {
            this.state.formato !== 3 ?
            <div className='admin-form-item'>
              <label htmlFor="inputDiametro">DIAMETRO (cm):</label><br/>
              <input id="inputDiametro" type="number" min="0" step="1" name="diametro" value={this.state.diametro} onChange={this.atualizarInput}/>
            </div>
            : null
          }

          <div className='admin-form-item'>
            <label htmlFor="inputPeso">PESO (g):</label><br/>
            <input id="inputPeso" type="number" min="0" step="1" name="peso" value={this.state.peso} onChange={this.atualizarInput}/>
          </div>

        </form>

        <div className='admin-form-item'>
          <button className='btn-secundaryy' onClick={() =>{this.enviar()}}>Enviar</button>
          {
            this.state.alert ? 
            (<div id="alert-div" className="alertacadastro">{this.state.alert}
              <Link className="fecharalerta" onClick={() => this.setState({alert: null}) } to="#">X</Link>
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