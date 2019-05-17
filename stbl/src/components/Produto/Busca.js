import React, { Component } from 'react';
import ListaProduto from './ListaProduto';
import Buscador from './Buscador';

class Busca extends Component {
    state = {
        pesquisa: this.props.pesquisa.toLowerCase(),
        dados: this.props.dados,
    }

    componentDidMount(){
        let novaLista = Buscador(this.state.pesquisa, this.state.dados);
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