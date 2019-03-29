import React, { Component } from 'react'
import Produto from "./Produto"
import mulhermaravilha from "./imgs/mulhermaravilha.jpg"
import flash from "./imgs/flash.jpg"
import supergirl from "./imgs/supergirl.jpg"
import batomliquidomatemetalico from "./imgs/batom-liquido-mate-metalico-azuluz.jpg"
import moletommaravilha from "./imgs/moletommaravilha.jpg"


class ListaProduto extends Component {
    render() {
        return (
            <div>
                <div className="listaProduto">
                <ul className="nav container d-flex">
                    {/*<Produto id={id} img={img} titulo={titulo} estoque={estoque} tipoProduto={tipoProduto}
          marca={marca} preco={preco} descricao={descricao} tamanho={tamanho} quantidade={quantidade}
    noCarrinho={noCarrinho}/>*/}
                    <li className="pro nav-item"><Produto id={"id1"} img={batomliquidomatemetalico} titulo={"Batom Líquido Mate Metálico Azuluz"}
                        marca={"Avon"} preco={27.99} estoque={"Em estoque"} tipoProduto={"Batom"} descricao={"O batom líquido mate metálico tem alta cobertura, longa duração e pigmentos metálicos intensos para os lábios. Além disso, ele não escorre e nem transfere. São 5 cores lindas pra você se jogar!"} /></li>
                    <li className="pro nav-item"><Produto id={"id2"} img={flash} titulo={"Camiseta Flash"}
                        marca={"Nike"} preco={227.99} estoque={"Em estoque2"} tipoProduto={"Camisa 2"} descricao={"descricaoooooo2"} /></li>
                    <li className="pro nav-item"><Produto id={"id3"} img={supergirl} titulo={"Camiseta Super Girl"}
                        marca={"Adidas"} preco={237.99} estoque={"Em estoque3"} tipoProduto={"Camisa 3"} descricao={"descricaoooooo3"} /></li>
                    <li className="pro nav-item"><Produto id={"id4"} img={mulhermaravilha} titulo={"Camiseta M. Maravilha"}
                        marca={"Gucci"} preco={954.99} estoque={"Em estoque4"} tipoProduto={"Camisa 4"} descricao={"descricaoooooo4"} /></li>
                    <li className="pro nav-item"><Produto id={"id5"} img={moletommaravilha} titulo={"Moletom M. Maravilha"}
                        marca={"LaCoste"} preco={1165.99} estoque={"Em estoque5"} tipoProduto={"Moletom"} descricao={"Moletom foda"} /></li>
                </ul>
                </div>
            </div>
        )
    }
}

export default ListaProduto;