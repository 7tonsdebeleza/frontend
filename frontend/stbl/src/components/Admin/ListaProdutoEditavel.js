import React, { Component } from 'react';
import ProdutoEditavel from "./ProdutoEditavel";
import { Link } from "react-router-dom";
import Search2 from '../Images/iconsearch2.png';
import Buscador from '../Produto/Buscador';

class ListaProdutoEditavel extends Component {
    /*
        State:
            - produtos: guarda uma lista de objetos que cotem as informações dos produtos, varia de acordo com a pesquisa feita, default será uma lista com todos os produtos.
            - pesquisa: manipula a string a ser passada para o Buscador
            - pesquisado: guarda a string da última pesquisa feita para ser indicada na interface.

    */
    state = {
        produtos: this.props.list,
        pesquisa: "",
        pesquisado: ''
    }

    //Atualização de input de pesquisa
    inputPesquisa = (e) =>{
        this.setState({
            pesquisa: e.target.value
        })
    }

    //Gerar novo filtro de pesquisa
    pesquisar = (busca) =>{
        let novaLista = Buscador(busca, this.props.list);
        this.setState({
            produtos: novaLista,
            pesquisado: this.state.pesquisa
        });
    }

    componentDidMount() {
        //tigger para chamar pesquisa após 'enter'
        let input = document.getElementById("adminPesquisa");

        input.addEventListener("keyup", (event) => {
            // codigo 13 para enter
            if (event.keyCode === 13) {
              // Clicando no icone de lupa de pesquisa
              this.pesquisar(this.state.pesquisa);
            }
        });

    }

    render() {
        return (
            <div>
                <div className='admin-form'>
                    <p>PESQUISAR:</p>
                    <input className='admin-form' id="adminPesquisa" type='text' value={this.state.pesquisa} onChange={this.inputPesquisa}/>
                    <img className='admin-pesquisa' onClick={() => { this.pesquisar(this.state.pesquisa) }} width='20' height='20' src={Search2} alt='pesquisa'/>
                    <p>Exibindo resultados para '{this.state.pesquisado}':</p>
                </div>
                

                <div className="listaProduto">
                <ul className="nav container d-flex">

                    {
                        this.state.produtos.map((dados) => {
                            return(
                                <li className="pro nav-item" key={dados.id}>
                                    <ProdutoEditavel dados={dados}/>
                                </li>
                            )
                        })
                    }
                    
                </ul>
                </div>
                <p className="btn-secundaryy">
                    <Link to="/admin7tons"> &larr; Retornar</Link>
                </p>
            </div>
        )
    }
}

export default ListaProdutoEditavel;