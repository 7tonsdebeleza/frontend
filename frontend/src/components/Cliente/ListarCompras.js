import React, { useState, useEffect } from 'react';
import Info from "../Images/information.svg";
import Modal from "../Modal/Modal";
import api from '../API/api';

function ListarCompras({ user }) {

  const [registros, setRegistros] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function fetchRegs() {
      await api.get(`/getHistorybyID/${user._id}`).then(res => {
        console.log(res.data);
        setRegistros(res.data);

      }).catch(error => {
        console.log(error);
        alert('Erro ao tentar carregar compras... Tente novamente mais tarde!');
      });

      setLoad(true);
    }

    fetchRegs();

  }, [user]);

  let listId = 0;
  return (
    <div>
      <p><strong>COMPRAS REALIZADAS</strong></p>
      {
        !load ? <span> carregando... </span> : registros.length > 0 ?
          <table className="table">
            <thead>
              <tr>
                <th scope="col">DATA</th>
                <th scope="col">STATUS DA TRASAÇÃO</th>
                <th scope="col">STATUS DA ENTREGA</th>
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
                      <td>{reg.statusFrete ? reg.statusFrete : 'No estoque'}</td>
                      <td>Em breve</td>
                      <td>
                        <img id={"img" + listId} src={Info} width={18} height={18} style={{ cursor: 'pointer' }} alt='detalhes' />
                        <Modal listenersId={["img" + listId]}>
                          <h3 className="spotlight"> DETALHES GERAIS  </h3>
                          <section style={{ minWidth: '90%' }}>
                            <h5 className="spotlight"> DETALHES DA COMPRA </h5>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> DATA DE EFETUAÇÃO: </strong>
                                <span> {new Date(reg.date).toLocaleDateString()}</span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> FORMA DE PAGAMENTO: </strong>
                                <span> {reg.paymentMethod} </span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> NÚMERO DE PARCELAS: </strong>
                                <span> {reg.installmentCount} </span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> TAXA DE INTERMEDIAÇÃO: </strong>
                                <span> {
                                  (parseFloat(reg.intermediationRateAmount) + parseFloat(reg.intermediationFeeAmount)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                                } </span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> VALOR LÍQUIDO: </strong>
                                <span> {parseFloat(reg.netAmount).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> VALOR TOTAL: </strong>
                                <strong> {parseFloat(reg.grossAmount).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </strong>
                              </li>

                            </ul>

                            <hr />
                            <h3 className="spotlight"> PRODUTOS </h3>
                            <hr />
                            <h3 className="spotlight"> DETALHES DA ENTREGA </h3>

                          </section>
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