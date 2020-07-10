import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import queryString from 'query-string';
import ListaProduto from './ListaProduto';
import api from '../API/api';

//import Buscador from './Buscador';

class Busca extends Component {
    state = {
        pesquisa: '',
        dados: [],
        carregando: true,
        pagina: 1
    }

    fetchProdutos = async () => {
        this.setState({ dados: [] });

        await api.get(`/mostrarprodutopornome/${this.state.pesquisa}/1`).then(res => {
            res.data.forEach((obj) => {
                //Remove o path da imagem e seta como o link dela
                obj.img = obj.img_url;
            });

            this.setState({ dados: res.data });
        }).catch(error => {
            console.log(error);
            alert('Falha ao tentar carregar produtos, tente novamente mais tarde...');
        });

        this.setState({ carregando: false });
    }

    getQuery = () => {
        const values = queryString.parse(this.props.location.search);
        this.setState({ pesquisa: values.q }, () => this.fetchProdutos());
    }

    componentWillReceiveProps() {
        this.getQuery();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.getQuery();
        }
    }

    componentDidMount() {
        const fetchNextPage = async () =>{
            const page = this.state.pagina;
            const produtos = this.state.dados;
    
            await api.get(`/mostrarprodutopornome/${this.state.pesquisa}/${page + 1}`).then(res => {
                if (res.data.length > 0) {
                    res.data.forEach((obj) => {
                        //Remove o path da imagem e seta como o link dela
                        obj.img = obj.img_url;
                    });
    
                    const newProdutos = produtos.concat(res.data);
                    this.setState({ pagina: page + 1, dados: newProdutos });
    
                }
            }).catch(error => {
                console.log(error);
    
            });
        }
    

        this.getQuery();
        window.onscroll = async () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                await fetchNextPage();
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="shopify-section col-xs-12 col-sm-9 col-main" style={{
                    marginTop: '20px'
                }}>
                    <div className="page-header">
                        <h1><span>EXIBINDO RESULTADOS PARA PESQUISA '{this.state.pesquisa}'</span></h1>
                    </div>
                </div>

                <hr />
                {
                    this.state.carregando ? <p className="bread">CARREGANDO...</p> : this.state.dados.length > 0 ?
                        <ListaProduto list={this.state.dados} addCarrinho={this.props.addCarrinho} atualizarQtdCarrinho={this.props.atualizarQtdCarrinho} attQtdItem={this.props.attQtdItem} removerCarrinho={this.props.removerCarrinho} carrinho={this.props.carrinho} />
                        : <p className="bread">NENHUM RESULTADO ECONTRADO...</p>
                }

            </div>

        )
    }
}

export default withRouter(Busca);