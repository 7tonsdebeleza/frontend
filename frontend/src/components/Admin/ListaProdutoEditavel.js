import React, { Component } from 'react';
import ProdutoEditavel from "./ProdutoEditavel";
import { Link } from "react-router-dom";
import Search2 from '../Images/iconsearch2.png';
//import Buscador from '../Produto/Buscador';
import api from '../API/api';

class ListaProdutoEditavel extends Component {
    /*
        State:
            - produtos: guarda uma lista de objetos que cotem as informações dos produtos, varia de acordo com a pesquisa feita, default será uma lista com todos os produtos.
            - pesquisa: manipula a string a ser passada para o Buscador
            - pesquisado: guarda a string da última pesquisa feita para ser indicada na interface.

    */
    state = {
        produtos: [],
        pesquisa: "",
        pesquisado: ''
    }

    //Atualização de input de pesquisa
    inputPesquisa = (e) => {
        this.setState({
            pesquisa: e.target.value
        });
    }

    //Gerar novo filtro de pesquisa
    pesquisar = async () => {
        await api.get(`/mostrarprodutopornome/${this.state.pesquisa}/1`).then(res => {
            res.data.forEach((obj) => {
                //Remove o path da imagem e seta como o link dela
                obj.img = obj.img_url;
            });

            this.setState({ produtos: res.data });
        }).catch(error => {
            console.log(error);
            alert('Falha ao tentar carregar produtos, tente novamente mais tarde...');
        });

        this.setState({ pesquisado: this.state.pesquisa });

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

        api.get('/mostrartodosprodutos/1').then(res => {
            res.data.map((obj) => {
                //Remove o path da imagem e seta como o link dela
                obj.img = obj.img_url;
                return true
            });

            this.setState({ produtos: res.data });

        }).catch(e => {
            console.log(e);
            alert("Erro ao tentar carregar produtos... Tente novamente mais tarde!");

        });

    }

    render() {
        return (
            <div>
                <div className='admin-form'>
                    <p>PESQUISAR:</p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                        <input id="adminPesquisa" type='text' value={this.state.pesquisa} onChange={this.inputPesquisa} />
                        <img onClick={() => { this.pesquisar(this.state.pesquisa) }} width='20' height='20' style={{ marginLeft: '10px' }} src={Search2} alt='pesquisa' />
                    </div>
                    <p>Exibindo resultados para '{this.state.pesquisado}':</p>
                </div>


                <div className="listaProduto">
                    <ul className="nav container d-flex">

                        {
                            this.state.produtos.map((dados) => {
                                return (
                                    <li className="pro nav-item" key={dados.id}>
                                        <ProdutoEditavel dados={dados} />
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