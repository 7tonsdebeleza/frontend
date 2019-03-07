import React, { Component } from 'react'
import Produto from "./Produto"
import deadpool from "./imgs/deadpool.jpg"
import flash from "./imgs/flash.jpg"
import supergirl from "./imgs/supergirl.jpg"


class TesteProduto extends Component {
    render() {
        return (
            <div>
                <div>
                    {/*<Produto id={id} img={img} titulo={titulo} estoque={estoque} tipoProduto={tipoProduto}
          marca={marca} preco={preco} descricao={descricao} tamanho={tamanho} quantidade={quantidade}
    noCarrinho={noCarrinho}/>*/}
                    <Produto id={"id1"} img={deadpool} titulo={"titulo"}
                        marca={"marca"} preco={27.99} estoque={"Em estoque"} tipoProduto={"Camisa Masculina"} descricao={"descricaoooooo"} />
                    <Produto id={"id2"} img={flash} titulo={"titulo2"}
                        marca={"marca2"} preco={227.99} estoque={"Em estoque2"} tipoProduto={"Camisa Masculina2"} descricao={"descricaoooooo2"} />
                    <Produto id={"id3"} img={supergirl} titulo={"titulo3"}
                        marca={"marca3"} preco={237.99} estoque={"Em estoque3"} tipoProduto={"Camisa Masculina3"} descricao={"descricaoooooo3"} />

                </div>
            </div>
        )
    }
}

export default TesteProduto;