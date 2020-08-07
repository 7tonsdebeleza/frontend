import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Info from "../Images/information.svg";
import Modal from "../Modal/Modal";
import api from '../API/api';

function ListarCompras({ user }) {

  const [registros, setRegistros] = useState([]);
  const [load, setLoad] = useState(false);

  function traduzirStatusTrans(code) {
    switch (code) {
      case '1':
        return 'Aguardando pagamento';

      case '2':
        return 'Em análise';

      case '3':
        return 'Pago';

      case '4':
        return 'Disponível';

      case '5':
        return 'Em disputa';

      case '6':
        return 'Devolvida';

      case '7':
        return 'Cancelada';

      case '8':
        return 'Debitada';

      default:
        return 'Indefinido';

    }
  }

  function traduzirFormaPagamento(code) {
    switch (code) {
      case '1':
        return 'Cartão de crétido';

      case '2':
        return 'Boleto';

      case '3':
        return 'Débito online (TEF)';

      case '4':
        return 'Saldo PagSeguro';

      case '7':
        return 'Depóstio em Conta';

      default:
        return 'Indefinido';

    }
  }

  function traduzirCodPagamento(cod) {
    const meio = meiosDePagamento.find((meio) => meio.cod === cod)
    if(meio) return `- ${meio.text}`
    else return null
  }

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
                      <td>{traduzirStatusTrans(reg.status)}</td>
                      <td>{!!reg.statusFrete.trim() ? reg.statusFrete : 'No estoque'}</td>
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
                                <strong> EMAIL FORNECIDO NA COMPRA: </strong>
                                <span> {reg.senderEmail} </span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> TELEFONE FORNECIDO NA COMPRA: </strong>
                                <span> {reg.senderPhoneAreaCode} {reg.senderPhoneNumber} </span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> STATUS DA TRANSAÇÃO: </strong>
                                <strong> {traduzirStatusTrans(reg.status)} </strong>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> FORMA DE PAGAMENTO: </strong>
                                <span> {traduzirFormaPagamento(reg.paymentMethod)} {traduzirCodPagamento(reg.paymentCod)}  </span>
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

                            {!!reg.paymentLink.trim() ? <a href={reg.paymentLink} target='_blank' rel="noopener noreferrer"> Imprimir boleto </a> : null }

                            <hr />
                            <h3 className="spotlight"> PRODUTOS </h3>

                            <table className="table">
                              <thead >
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">TÍTULO</th>
                                  <th scope="col">QUANTIDADE</th>
                                  <th scope="col">VALOR</th>
                                  <th scope="col">LINK</th>
                                </tr>
                              </thead>

                              <tbody>
                                {
                                  reg.items.map((item, index) => {
                                    return <tr key={index}>
                                      <td> {index + 1} </td>
                                      <td> {item.description._text} </td>
                                      <td> {item.quantity._text} </td>
                                      <td> <strong> {parseFloat(item.amount._text).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} </strong> </td>
                                      <td> <Link to={`/produtos/${item.id._text}`}> Ver produto </Link> </td>

                                    </tr>
                                  })
                                }
                              </tbody>
                            </table>


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

const meiosDePagamento = [
  { cod: '101', text: 'Visa' },
  { cod: '102', text: 'MasterCard' },
  { cod: '103', text: 'American Express' },
  { cod: '104', text: 'Diners' },
  { cod: '105', text: 'Hipercard' },
  { cod: '106', text: 'Aura' },
  { cod: '107', text: 'Elo' },
  { cod: '108', text: 'PLENOCard' },
  { cod: '109', text: 'PersonalCard' },
  { cod: '110', text: 'JCB' },
  { cod: '111', text: 'Discover' },
  { cod: '112', text: 'BrasilCard' },
  { cod: '113', text: 'FORTBRASIL' },
  { cod: '114', text: 'CARDBAN' },
  { cod: '115', text: 'VALECARD' },
  { cod: '116', text: 'Cabal' },
  { cod: '117', text: 'Mais' },
  { cod: '118', text: 'Avista' },
  { cod: '119', text: 'GRANDCARD' },
  { cod: '120', text: 'Sorocred' },
  { cod: '122', text: 'Up Policard' },
  { cod: '123', text: 'Banese Card' },
  { cod: '201', text: 'Bradesco' },
  { cod: '202', text: 'Santander' },
  { cod: '301', text: 'Bradesco' },
  { cod: '302', text: 'Itaú' },
  { cod: '303', text: 'Unibanco' },
  { cod: '304', text: 'Banco do Brasil' },
  { cod: '305', text: 'Banco Real' },
  { cod: '306', text: 'Banrisul' },
  { cod: '307', text: 'HSBC' },
  { cod: '701', text: 'Banco Brasil' },
]

export default ListarCompras;