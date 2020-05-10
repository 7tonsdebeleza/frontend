import React, { Component } from 'react';
import ListaProduto from './ListaProduto';
import Buscador from './Buscador';

class Busca extends Component {
    state = {
        pesquisa: this.props.pesquisa.toLowerCase().replace(/%20/g, " "),
        dados: this.props.dados,
    }

    componentDidMount(){
        let novaLista = Buscador(this.state.pesquisa, this.state.dados);
        this.setState({dados: novaLista});
    }

    render(){
        return(
            <div className="container">
                <div style={{
                    marginTop: '20px'
                }}>
                    <div className="page-header">
                        <h1><span>EXIBINDO RESULTADOS PARA '{this.state.pesquisa}'</span></h1>
                    </div>
                </div>
                
                {
                    (this.state.dados.length > 0) ? <ListaProduto list={this.state.dados} addCarrinho={this.props.addCarrinho}/> : <p className="bread">NENHUM RESULTADO ECONTRADO...</p>
                }
                
            </div>
            
        )
    }
}

export default Busca;