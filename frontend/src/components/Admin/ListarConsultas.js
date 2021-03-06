import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Info from "../Images/information.svg";
import Modal from "../Modal/Modal";
import api from '../API/api';

function ListarConsultas() {

  const [registros, setRegistros] = useState([]);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);

  const [statusDeEntrega, setStatusEntrega] = useState('');
  const [codRastreio, setCodRastreio] = useState('');
  const [enviandoStatus, setEnviandoStatus] = useState(false);

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
    if (meio) return `- ${meio.text}`
    else return null
  }

  async function attStatusDeEntrega(code) {
    const token = localStorage.getItem("@stbl/admin/user");

    if (statusDeEntrega) {
      setEnviandoStatus(true);
      try {
        await api.put('/updateStatusFrete', { code, statusFrete: statusDeEntrega }, { headers: { authorization: token } });
        return window.location.reload();

      } catch (e) {
        console.log(e.response);
        alert('Falha inespereada... Tente novamente mais tarde.');

      }

    }

    setEnviandoStatus(false);

  }

  async function attCodRastreio(regCod) {
    const token = localStorage.getItem("@stbl/admin/user");

    if (codRastreio) {
      setEnviandoStatus(true);
      try {
        await api.put('/updateStatusFrete', { code: regCod, statusFrete: 'Postado nos Correios' }, { headers: { authorization: token } });
        await api.put('/updateCodRastreio', { code: regCod, codRastreio }, { headers: { authorization: token } });
        return window.location.reload();

      } catch (e) {
        console.log(e.response);
        alert('Falha inespereada... Tente novamente mais tarde.');

      }

    }

    setEnviandoStatus(false);

  }

  async function estornar(regCod) {
    const token = localStorage.getItem("@stbl/admin/user");

    setEnviandoStatus(true);
    try {
      await api.post('/pagseguro/estornar', { transData: { code: regCod } }, { headers: { authorization: token } });
      return window.location.reload();

    } catch (e) {
      console.log(e.response);
      alert('Falha inespereada... Tente novamente mais tarde.');

    }


    setEnviandoStatus(false);

  }

  useEffect(() => {
    async function rastrear(cod) {
      const res = await api.get(`/tracking/${cod}`);
      if (res) return res.data[0];
      else return null;
    }

    async function fetchNextPage() {
      await api.get(`/getAllHistory/${page}`).then(async res => {
        if (res.data.length > 0) {
          const newRegs = registros.concat(res.data);
          const promises = await newRegs.map(async reg => {
            //reg.codRastreio = 'PW935793588BR';
            if (!!reg.codRastreio.trim()) {
              reg.rastreio = await rastrear(reg.codRastreio);
            }
            return true
          });

          await Promise.all(promises);
          setRegistros(newRegs);
          setPage(page + 1);

        }

      }).catch(error => {
        console.log(error);
        alert('Erro ao tentar carregar compras... Tente novamente mais tarde!');
      });

    }

    async function fetchPage1() {
      if (registros.length === 0 && page === 1) {
        await fetchNextPage();
        setLoad(true);

      }
    };

    async function watchScroll() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        await fetchNextPage();
      }
    }

    fetchPage1();
    window.onscroll = watchScroll;

    // eslint-disable-next-line
  }, [page]);

  let listId = 0;
  return (
    <div className='table-responsive'>
      <p><strong>COMPRAS REALIZADAS</strong></p>
      {
        !load ? <span> carregando... </span> : registros.length > 0 ?
          <table className="table">
            <thead>
              <tr>
                <th scope="col">USUÁRIO</th>
                <th scope="col">DATA</th>
                <th scope="col">STATUS DA TRASAÇÃO</th>
                <th scope="col">STATUS DA ENTREGA</th>
                <th scope="col">CÓDIGO DE RASTREIO</th>
                <th scope="col">DETALHES</th>
              </tr>
            </thead>

            <tbody>
              {
                //Gerando tabela por dados via props
                registros.map((reg) => {
                  listId++;
                  return (
                    <tr key={listId}>
                      <td> <strong>{reg.senderEmail}</strong></td>
                      <td>{new Date(reg.date).toLocaleDateString()}</td>
                      <td>{traduzirStatusTrans(reg.status)}</td>
                      <td>{!reg.statusFrete || !!reg.statusFrete.trim() ? reg.statusFrete : 'No estoque'}</td>
                      <td>{!!reg.codRastreio.trim() ? reg.codRastreio : <i> Indisponível no momento </i>}</td>
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
                            <hr />

                            {!!reg.paymentLink.trim() ? <a href={reg.paymentLink} target='_blank' rel="noopener noreferrer" style={{ float: 'right' }} > Imprimir boleto &rarr; </a> : null}

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

                            <ul className="list-group list-group-flush">
                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> ESTADO: </strong>
                                <span> {reg.shippingState}</span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> CIDADE: </strong>
                                <span> {reg.shippingCity}</span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> BAIRRO: </strong>
                                <span> {reg.shippingDistrict}</span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> CEP: </strong>
                                <span> {reg.shippingPostalCode}</span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> RUA: </strong>
                                <span> {reg.shippingStreet}</span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> NÚMERO: </strong>
                                <span> {reg.shippingNumber}</span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> COMPLEMENTO: </strong>
                                <span> {reg.shippingComplement ? reg.shippingComplement : <i> nenhum </i>}</span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> VALOR DO FRETE: </strong>
                                <span>{parseFloat(reg.shippingCost).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> STATUS DA ENTREGA: </strong>
                                <span>{!reg.statusFrete || !!reg.statusFrete.trim() ? reg.statusFrete : 'No estoque'}</span>
                              </li>

                              <li className="list-group-item d-flex justify-content-between align-items-center">
                                <strong> CÓDIGO DE RASTREIO: </strong>
                                <span>{!!reg.codRastreio.trim() ? reg.codRastreio : <i> Indisponível no momento </i>}</span>
                              </li>
                            </ul>

                            <hr />

                            {!!reg.codRastreio.trim() ? <a href={'https://www2.correios.com.br/sistemas/rastreamento/'} target='_blank' rel="noopener noreferrer" style={{ float: 'right' }} > Rastrear via Correios &rarr; </a> : null}

                            <span className="btn-secundaryy" >
                              <button id={"btn-att-entrega" + listId} > ATUALIAZAR STATUS DE ENTREGA </button>
                              <br />
                              <button id={"btn-att-cod" + listId} > INSERIR CÓDIGO DE RASTREIO </button>
                              <br />
                              {
                                // estornamento só pode ser feito nesses status (pago, em disputa, disponível)
                                reg.status === "3" || reg.status === "4" || reg.status === "5" ?
                                  <button id={"btn-estornar" + listId} > ESTORNAR TRASAÇÃO DO PEDIDO </button> : null
                              }

                            </span>

                          </section>
                        </Modal>
                        <Modal listenersId={["btn-att-entrega" + listId]}>
                          <h3> Selecione o status abaixo, esta informação será atualizada na área do cliente!</h3>

                          <label>Status</label>
                          <div>
                            <select type="text" placeholder="status" value={statusDeEntrega} onChange={(e) => setStatusEntrega(e.target.value)} >
                              <option key={1} value={''}></option>
                              <option key={2} value={'No estoque'}> No estoque </option>
                              <option key={3} value={'Postado nos correios'}> Postado nos correios </option>
                              <option key={4} value={'Entregue pela 7 tons'}> Entregue pela 7 tons </option>

                            </select>
                          </div>

                          <span className="btn-secundaryy" >
                            <button onClick={() => attStatusDeEntrega(reg.code)} > {enviandoStatus ? 'ENVIANDO...' : 'ENVIAR'} </button>
                          </span>

                        </Modal>
                        <Modal listenersId={["btn-att-cod" + listId]}>
                          <h3> Insira o código de rastreio dos correios, esta informação será atualizada na área do cliente!</h3>

                          <label>Código de rastreio</label>
                          <div>
                            <input className="inputt" type="text" onChange={(e) => setCodRastreio(e.target.value)} value={codRastreio} />
                          </div>

                          <span className="btn-secundaryy" >
                            <button onClick={() => attCodRastreio(reg.code)} > {enviandoStatus ? 'ENVIANDO...' : 'ENVIAR'} </button>
                          </span>

                        </Modal>
                        <Modal listenersId={["btn-estornar" + listId]}>
                          <h3> Tem certeza que deseja estornar essa transação?</h3>
                          <p> Essa ação anula a transação feita na PagSeguro! </p>

                          <span className="btn-secundaryy" >
                            <button onClick={() => estornar(reg.code)} > {enviandoStatus ? 'PROCESSANDO...' : 'CONFIRMAR'} </button>
                          </span>

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


export default ListarConsultas;