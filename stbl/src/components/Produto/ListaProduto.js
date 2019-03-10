import React, { Component } from 'react'
import Produto from "./Produto"
import mulhermaravilha from "./imgs/mulhermaravilha.jpg"
import flash from "./imgs/flash.jpg"
import supergirl from "./imgs/supergirl.jpg"
import ligadajustica from "./imgs/ligadajustica.jpg"
import moletommaravilha from "./imgs/moletommaravilha.jpg"


class ListaProduto extends Component {
    render() {
        return (
            <div>
                <div className="listaProduto">
                    {/*<Produto id={id} img={img} titulo={titulo} estoque={estoque} tipoProduto={tipoProduto}
          marca={marca} preco={preco} descricao={descricao} tamanho={tamanho} quantidade={quantidade}
    noCarrinho={noCarrinho}/>*/}
                    <Produto id={"id1"} img={ligadajustica} titulo={"Camiseta Liga da Justiça"}
                        marca={"Louis Vuitton"} preco={27.99} estoque={"Em estoque"} tipoProduto={"Camisa 1"} descricao={"descricaoooooo"} />
                    <Produto id={"id2"} img={flash} titulo={"Camiseta Flash"}
                        marca={"Nike"} preco={227.99} estoque={"Em estoque2"} tipoProduto={"Camisa 2"} descricao={"descricaoooooo2"} />
                    <Produto id={"id3"} img={supergirl} titulo={"Camiseta Super Girl"}
                        marca={"Adidas"} preco={237.99} estoque={"Em estoque3"} tipoProduto={"Camisa 3"} descricao={"descricaoooooo3"} />
                    <Produto id={"id4"} img={mulhermaravilha} titulo={"Camiseta M. Maravilha"}
                        marca={"Gucci"} preco={954.99} estoque={"Em estoque4"} tipoProduto={"Camisa 4"} descricao={"descricaoooooo4"} />
                    <Produto id={"id5"} img={moletommaravilha} titulo={"Moletom M. Maravilha"}
                        marca={"LaCoste"} preco={1165.99} estoque={"Em estoque5"} tipoProduto={"Moletom"} descricao={"Moletom foda"} />
                </div>
            </div>
        )
    }
}

export default ListaProduto;