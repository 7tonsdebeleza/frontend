import React from 'react';
import ListaProduto from '../Produto/ListaProduto';
import Cart from '../Images/cart.svg'
import { Link } from "react-router-dom";
//Usando ListaProdutos provisoamente para mostrar produtos adicionados ao carrinho.

const Carrinho = (props) =>{
  let subtotal = 0;
  props.dados.forEach(element => {
    subtotal = subtotal + element.preco * element.qtd;
  });

  return(
    <div className="container">
      <div className="tituloCarrinho"> <span>PRODUTOS NO CARRINHO:</span> </div> 
    
    { props.dados.length === 0 ?
    
      <div className="container defaultCarrinho">
        <div> Nenhum produto no Carrinho </div>
        <img src={Cart} width='50' height='50' alt='cart'></img>
      </div>

      :

      <ListaProduto noCarrinho list={props.dados} atualizarQtdCarrinho={props.atualizarQtdCarrinho} removerCarrinho={props.removerCarrinho} naNavbar={props.naNavbar}/>

    }
          
    {
      subtotal !== 0 ?
        <div className="subtotalQuantidade">
          <b>SubTotal: R${ parseFloat(subtotal).toFixed(2)}</b>

          <div className="nav botoesCarrinho">
            {
              props.botaoCarrinho ? // Link exibido no minicarrinho da navbar
                <p className="nav-item button-sec botao1">
                  <Link to="/carrinho" className="btn-secondary">Ir para o Carrinho</Link>
                </p> :

                <p className="nav-item button-sec botao1">
                  <Link to="/lojavirtual" className="btn-secondary">Escolher mais produtos</Link>
                </p>
            }

            {
              props.logado ?

              <p className="nav-item button-pri botao2">
                <Link to="/checkout">Fechar compra</Link>
              </p>
              
              :
              <div className="container" style={{ fontSize: '15px' }}>
                <p>Para finalizar a compra faça Login em sua conta! <Link to="/login">Login</Link></p>
                <p>Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
              </div>
            }
          </div>
        </div> : null
    }
  </div>    
  );
};

export default Carrinho;