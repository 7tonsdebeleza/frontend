import React from 'react';
import Info from "../Images/information.svg";
import Modal from "../Modal/Modal";

const ListarCompras = (props) =>{
    let listId = 0;
    return(<div>
        <p><strong>COMPRAS REALIZADAS</strong></p>

            {
                props.compras && props.compras.length > 0 ?
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">DATA</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">CÓDIGO</th>
                        <th scope="col">DATALHES</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            //Gerando tabela por dados via props
                            props.compras.map((reg) => {
                                listId++;
                                return(
                                    <tr key={listId}>
                                        <td>{reg.id}</td>
                                        <td>{reg.data}</td>
                                        <td>{reg.status}</td>
                                        <td>{reg.codigo}</td>
                                        <td>
                                            <img id={"img"+listId} src={Info} width={18} height={18} style={{cursor: 'pointer'}} alt='detalhes'/>
                                            <Modal listenersId={["img"+listId]}>
                                                <h3>detalhes aqui...</h3>
                                            </Modal>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                :
                <em>Nenhum registro de compra encontrado</em>
            }
            
    </div>)
}

export default ListarCompras;