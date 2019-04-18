import React, { Component } from 'react';
import ListaProduto from './ListaProduto';

class Busca extends Component {
    state = {
        pesquisa: this.props.pesquisa.toLowerCase(),
        dados: this.props.dados,
    }

    componentDidMount(){
        let novaLista = [];
        this.props.dados.map((produto) => {
            if(produto.titulo.toLowerCase().search(this.state.pesquisa) != -1 || produto.marca.toLowerCase().search(this.state.pesquisa) != -1 || produto.descricao.toLowerCase().search(this.state.pesquisa) != -1 || produto.tipoProduto.toLowerCase().search(this.state.pesquisa) != -1){
                novaLista.push(produto);
            }
        });

        this.setState({dados: novaLista});
    }

    render(){
        return(
            <div>
                <p>Exibindo resultados para a pesquisa '{this.state.pesquisa}'</p>
                {
                    (this.state.dados.length > 0) ? <ListaProduto list={this.state.dados} addCarrinho={this.props.addCarrinho}/> : <p>Nenhum resultado encontrado!</p>
                }
                
            </div>
            
        )
    }
}

export default Busca;