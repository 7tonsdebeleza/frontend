import React, {Component} from 'react';
import Lixeira from "../Images/lixeira.svg";

class ListarConsultas extends Component {

    //Função para apagar registro de compra no bd (implementar futuramente)
    apagarReg = (regId) =>{
        console.log("Apagando "+ regId);
    }

    render(){
        let listId = 0;
        return(
            <div className='table-responsive'>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">USUÁRIO</th>
                    <th scope="col">PRODUTO</th>
                    <th scope="col">ID</th>
                    <th scope="col">QUANTIDADE</th>
                    <th scope="col">DATA</th>
                    <th scope="col">CÓDIGO</th>
                    <th scope="col">X</th>
                </tr>
                </thead>
                <tbody>
                    {
                        //Gerando tabela por dados via props
                        this.props.compras.map((reg) => {
                            listId++;
                            return(
                                <tr key={listId}>
                                    <td>{reg.user}</td>
                                    <td>{reg.produto}</td>
                                    <td>{reg.produtoId}</td>
                                    <td>{reg.qtd}</td>
                                    <td>{reg.data}</td>
                                    <td>{reg.codigo}</td>
                                    <td>
                                        <img src={Lixeira} width={18} height={18} alt='delete icon' onClick={() =>{this.apagarReg(reg.codigo)}}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        )
    }
}

export default ListarConsultas;