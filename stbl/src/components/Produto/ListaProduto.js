import React, { Component } from 'react'
import Produto from "./Produto"


class ListaProduto extends Component {
    render() {
        return (
            <div>
                <div className="listaProduto">
                <ul className="nav container d-flex">
                    {/*<Produto id={id} img={img} titulo={titulo} estoque={estoque} tipoProduto={tipoProduto}
          marca={marca} preco={preco} descricao={descricao} tamanho={tamanho} quantidade={quantidade}
    noCarrinho={noCarrinho}/> multiColor={true}*/}
                    <li className="pro nav-item">
                    <Produto id={"id1"} img={"https://qbbr.vteximg.com.br/arquivos/ids/160367-1000-1000/batom-liquido-mate-metalico-azuluz-aberto.jpg?v=636247775539130000"} titulo={"Batom Líquido Mate Metálico Azuluz"}
                        marca={"Avon"} preco={27.99} estoque={"Em estoque"} tipoProduto={"Batom"} descricao={"O batom líquido mate metálico tem alta cobertura, longa duração e pigmentos metálicos intensos para os lábios. Além disso, ele não escorre e nem transfere. São 5 cores lindas pra você se jogar!"} multiColor={true}/>
                        </li>
                    <li className="pro nav-item">
                    <Produto id={"id2"} img={"https://qbbr.vteximg.com.br/arquivos/ids/160437-1000-1000/batom-liquido-mate-metalico-vermeluz-aberto.jpg?v=636259455546800000"} titulo={" Líquido Mate Metálico Vermeluz"}
                        marca={"Avon"} preco={227.99} estoque={"Em estoque"} tipoProduto={"Batom"} descricao={"O batom líquido mate metálico tem alta cobertura, longa duração e pigmentos metálicos intensos para os lábios. Além disso, ele não escorre e nem transfere. São 5 cores lindas pra você se jogar!"} multiColor={true} />
                    </li>
                    <li className="pro nav-item">
                    <Produto id={"id3"} img={"https://qbbr.vteximg.com.br/arquivos/ids/156065-1000-1000/primer-instamatte-quem-disse-berenice-30g_1_812781.jpg?v=636046099692370000"} titulo={"Primer Instamatte 30g"}
                        marca={"Quem disse berenice"} preco={237.99} estoque={"Em estoque"} tipoProduto={"Creme para a pele"} descricao={"O primer Instamatte é uma inovação pra quem curte ficar bem na foto. Ele é um primer que matifica a pele instantaneamente. Outra super novidade é o efeito blur (se fala blâr) que disfarça as marquinhas e ruguinhas através de partículas difusoras de luz. Sua pele lisinha e sem brilho, pra você fica bem na foto e na festa! Se joga."} multiColor={false} />
                    </li>
                    <li className="pro nav-item">
                    <Produto id={"id4"} img={"https://qbbr.vteximg.com.br/arquivos/ids/157964-1000-1000/hidratante-facial-tchau-pros-poros_814491.jpg?v=636069540312330000"} titulo={"Hidratante Facial Tchau Poros 40Ml"}
                        marca={"Natura"} preco={954.99} estoque={"Em estoque"} tipoProduto={"Hidratante"} descricao={"Hidratante facial Antioxidante. Efeito detox hidratação até 30 horas. Aumento de colágeno – que deixa a pele mais firme."} multiColor={false}/>
                    </li>
                    <li className="pro nav-item">
                    <Produto id={"id5"} img={"https://qbbr.vteximg.com.br/arquivos/ids/156687-1000-1000/Blush-quem-disse-berenice_1_810125.jpg?v=636046197936000000"} titulo={"Blush QDB"}
                        marca={"Natura"} preco={1165.99} estoque={"Em estoque"} tipoProduto={"Blush"} descricao={"A gente adora blush. Afinal, uma corzinha nas bochechas levanta qualquer astral, não é mesmo? Então resolvemos criar várias cores pra você experimentar e variar. Por ter uma textura super fininha o blush QDB tem uma ótima fixação na pele dá aquele efeito natural e saudável. Viva!!"} multiColor={true}/>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}

export default ListaProduto;