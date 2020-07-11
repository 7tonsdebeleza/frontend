import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ListaProduto from '../Produto/ListaProduto';
import api from '../API/api';
import makeup from '../Images/makeup.svg';
import '../LojaVirtual/lojaVirtualStyle.css';

export default function ProdutoDetalhes(props) {

  const [carregando, setCarregando] = useState(true);
  const [produto, setProduto] = useState({});
  const [noCarrinho, setNoCarrinho] = useState(false);
  const [relacionados, setRelacionados] = useState([]);

  const history = useHistory();

  function cover(e) {
    e.target.src = makeup;
    e.target.width = 60;
  }

  function addCarrinho() {
    let dados = produto;
    dados.qtd = 1;
    dados.noCarrinho = true;
    setNoCarrinho(true);
    //Eviando dados para pai:
    props.addCarrinho(dados);
  }

  useEffect(() => {
    async function fetchProduto() {
      const id = props.match.params.id
      if (id) {
        await api.get(`/mostrarprodutosporid/${id}`).then(async res => {
          if (!res.data) {
            history.push('/lojavirtual');
          } else {
            // Chegando se produt está no carrinho global
            const finded = props.carrinho.find(item => item._id === res.data._id);
            setNoCarrinho(finded ? true : false);
            console.log(res.data);
            setProduto(res.data);
            

            await api.get(`/mostrarprodutopornome/${res.data.titulo}/1`).then(resRel => {
              const newRelacionados = [];

              resRel.data.forEach(item => {
                if(relacionados.length < 5 && item._id !== res.data._id){
                  item.img = item.img_url;
                  newRelacionados.push(item);
                }
              });

              setRelacionados(newRelacionados);

            }).catch(error => {
              console.log(error);

            })

          };

        }).catch(error => {
          console.log(error);
          alert('falha ao tentar carregar produto, tente novamente mais tarde');

        })

      } else {
        history.push('/lojavirtual');
      }

      setCarregando(false);
    }

    fetchProduto();
    // eslint-disable-next-line
  }, [props.match])

  if (carregando) return <div className="container" ><br /><header className="page-header"><h1> carregando... </h1></header>
  </div>

  return (
    <div className="container" >
      <br />
      <header className="page-header"><h1> detalhes do produto </h1></header>
      <hr />
      <section>
        <div>
          {produto.novidade ? <span className="botaoAddCarrinho" style={{ background: '#e95144' }} > NOVIDADE </span> : null}
          {produto.promocao ? <span className="botaoAddCarrinho" style={{ background: '#e95144' }} > PROMOÇÃO ESPECIAL </span> : null}
        </div>

        <div>
          <img src={produto.img_url} alt="img" className="imagemProdutoModal" onError={cover} />
        </div>

        <div className="descricaoProdutoModal page-header">
          <h1><b>{produto.titulo}</b></h1>
          <div><b>Disponibilidade:</b> {produto.estoque !== 0 ? <p style={{ display: 'inline' }}>Em estoque</p> : <div style={{ display: 'inline' }}>Faltando no estoque</div>}</div>
          <p><b>Tipo de Produto:</b> {produto.tipoProduto}</p>
          <p><b>Marca:</b> {produto.marca}</p>
          <p>{produto.descricao}</p>
          <hr/>
          <h5> <b> Dados da embalagem </b></h5>
          <p> <b> Altura: </b> {produto.altura} cm </p>
          <p> <b> Comprimento: </b> {produto.comprimento} cm </p>
          <p> <b> Largura: </b> {produto.largura} cm </p>
          <p> <b> Peso: </b> {produto.peso} g </p>

          <h2><b> Valor: R$ {parseFloat(produto.preco).toFixed(2)}</b></h2>

          {produto.estoque !== 0 ? noCarrinho ?
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
            <button className="botaoAddCarrinho" onClick={() => addCarrinho()}> ADICIONAR AO CARRINHO</button> :
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
      </section>

      <header className="page-header"><h1> Produtos relacionados </h1></header>
      <hr/>

      <ListaProduto list={relacionados} addCarrinho={props.addCarrinho} atualizarQtdCarrinho={props.atualizarQtdCarrinho} attQtdItem={props.attQtdItem} removerCarrinho={props.removerCarrinho} carrinho={props.carrinho}/>
      
    </div>
  )
}