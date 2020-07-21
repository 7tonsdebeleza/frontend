import React, { useState, useEffect } from 'react';
import Info from "../Images/information.svg";
import Modal from "../Modal/Modal";
import api from '../API/api';

function ListarCompras({ user }) {

  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    async function fetchRegs(){
      await api.get(`/getHistorybyID/${user._id}`).then(res => {
        setRegistros(res.data);

      }).catch(error => {
        console.log(error);
        alert('Erro ao tentar carregar compras... Tente novamente mais tarde!');
      })
    }

    fetchRegs();

  }, [user]);

  let listId = 0;
  return (
    <div>
      <p><strong>COMPRAS REALIZADAS</strong></p>
      {
        registros.length > 0 ?
          <table className="table">
            <thead>
              <tr>
                <th scope="col">DATA</th>
                <th scope="col">STATUS DE TRASAÇÃO</th>
                <th scope="col">STATUS DE ENTREGA</th>
                <th scope="col">CÓDIGO DE RASTREIO</th>
                <th scope="col">DATALHES</th>
              </tr>
            </thead>

            <tbody>
              {
                //Gerando tabela por dados via props
                registros.map((reg) => {
                  listId++;
                  return (
                    <tr key={listId}>
                      <td>{new Date(reg.date).toLocaleDateString()}</td>
                      <td>
                        {
                          parseInt(reg.status) === 1 ? 'Aguardando pagamento' :
                          parseInt(reg.status) === 2 ? 'Em análise' :
                          parseInt(reg.status) === 3 ? 'Pago' :
                          parseInt(reg.status) === 4 ? 'Disponível' :
                          parseInt(reg.status) === 5 ? 'Em disputa' :
                          parseInt(reg.status) === 6 ? 'Devolvida' :
                          parseInt(reg.status) === 7 ? 'Cancelada' :
                          parseInt(reg.status) === 8 ? 'Debitda' :
                          'Retenção temporária'
                        }
                      </td>
                      <td>{reg.statusFrete ? reg.statusFrete : 'No estoque' }</td>
                      <td>Em breve</td>
                      <td>
                        <img id={"img" + listId} src={Info} width={18} height={18} style={{ cursor: 'pointer' }} alt='detalhes' />
                        <Modal listenersId={["img" + listId]}>
                          <h3>detalhes aqui...</h3>
                        </Modal>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table> : <em>Nenhum registro de compra encontrado</em>
      }

    </div>
  )
}

export default ListarCompras;