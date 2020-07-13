import React from "react";
import { Link } from "react-router-dom";
import Question from "./Question";

const Faq = () => {
    return(
        <div className="container">
            <div className="bread">
                <Link to="/home" >Home</Link>
                <span className="arrow">/</span>
                <span>FAQ</span>
            </div>

            <h3 className="spotlight" style={tituloPeriferico}>Perguntas Frequentes </h3>
            <hr/>
            <p id="contato" className="text-center discreet-arimo" style={textoPeriferico}>
                Abaixo em nosso FAQ estão algumas preocupações comuns de nossos clientes antes de comprar um produto, se você tiver outras perguntas, por favor, basta enviá-lo para 7tonsdebeleza@gmail.com ou entre em contato por +55 (85) 9 9996.8549.
            </p>

            <div>
                <Question dropped = {true} texts = {{
                        quest: 'Como e por quê eu tenho que me cadastrar?',
                        answer: 'Para você aproveitar tudo de bom que tem aqui no site, você precisa fazer um cadastro bem simples com a gente. Isso serve para você poder interagir com os conteúdos e, claro, fazer suas comprinhas com toda segurança e conforto. Pra se cadastrar você precisa clicar em “Cadastre-se” ou em "Criar uma conta" na parte superior do site ou no menu (caso esteja utilizando seu smartphone), fazendo isso, preencha os campos em branco com os seus dados. Aqueles que tiverem um asterisco (*) são informações super importantes que você não pode deixar de colocar, tá? Quando estiver tudo preenchido clique em “Criar conta”. Tá pronto o cadastro! Você vai receber um e-mail pra confirmar tudo logo em seguida, é só esperar uns minutinhos!'
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Onde atualizo meus dados de cadastro?",
                        answer: 'Concluído seu cadastro, você deve procurar área exclusica do cliente em "Minha conta", entrando lá, você encontrar um botão escrito "Atualizar dados" onde você poderá atualizar todos os dadso que foram cadastrados!'
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Como eu compro pelo site?",
                        answer: 'É só navegar pelo site e pesquisar os produtos que você quer comprar. Encontrou? Agora é só clicar em “Adicionar ao carrinho”. quando você faz isso o produto vai diretamente pra a “sacola”, é lá que ficam os produtos que você escolheu. Pra adicionar mais produtos basta clicar em "Ver outros produtos", caso queira seguir com a compra, é só clicar em “Ir para o carrinho”. Se você já tem cadastro é só se logar, e se não tiver, agora é a hora de fazer! Só  assim você pode continuar a sua comprinha. Mas relaxa que é super. rapidinho! Depois dessa etapa de login e cadastro, vem o pagamento. Primeiro você escolhe como quer pagar, pode ser com boleto bancário, cartão de crédito, deposito em conta, transferência bancaria. Depois de efetuar o pagamento, você vai receber um e-mail com todas as etapas da compra, desde a notificação do pedido, até a confirmação de pagamento e entrega.'
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Quais são as etapas do meu pedido?",
                        answer: 'O pedido vai passa por algumas etapas depois que você finalizou a compra aqui no site, mas pode ficar tranquila, a gente vai te informar tudinho por e-mail. 1ª etapa: confirmação do pedido bom, a primeira parte é a confirmação de recebimento do seu pedido, isso acontece logo que você faz uma compra no site. 2ª etapa: confirmação de pagamento depois de receber o seu pedido aqui, a gente espera a confirmação do pagamento, que pode chegar em até 48h no caso de pagamento com cartão de crédito e débito, ou em até 3 dias se tiver optado pelo boleto. Feito    isso, seguimos pra separação do produto no estoque e envio pra transportadora. 3ª etapa: separação do produto e envio para os correios agora estamos quase lá! Depois que você pagou tudo direitinho, a gente separa o produto no  nosso estoque e já manda para os correios que vai levar a comprinha até você. Depois dessa etapa, é só esperar a data de entrega que foi passada para você na confirmação do pedido.'
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Qual o prazo de entrega?",
                        answer: "Nosso prazo de entrega muda de acordo com o endereço e modalidade de envio escolhidos por você na hora da sua compra!"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Como consigo rastrear o meu pedido?",
                        answer: 'Após a confirmação do seu pedido, você poderá acompanhar o status da entrega da sua contra na área do cliente clicando em "Minha conta", e caso preferir, pode rastrear o seu pedido diretamente no site dos Correios com o código que disponibilizados junto das informações da sua compra.'
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "O prazo de entrega conta com fim de semanas e feriados?",
                        answer: 'O prazo de entrega dos produtos é contado considerando somente dias úteis. Por isso, não estão inclusos sábados, domingos e feriados.'
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Como posso alterar o endereço de entrega do meu pedido?",
                        answer: 'Para garantir a segurança da sua comprinha, não é possível realizar nenhuma alteração depois que o seu pedido é finalizado e postado. Mas estamos aqui para te ajudar e, por isso, avaliamos cada caso separadamente, a fim de atender às necessidades dos nossos clientes da melhor forma possível. Entra em contato com a gente por meio da nossa Central de Atendimento que vamos buscar uma forma de resolver. Estamos aqui para te ajudar sempre!'
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Como sei o valor do frete?",
                        answer: 'É só colocar um produto no seu carrinho de compras e inserir o CEP de destino no campo “insira seu CEP.Depois, basta clicar em “Calcular frete”. Você ainda pode GANHAR frete grátis se a sua comprinha atingir o valor mínimo caso seja enderaço estaja em Fortaleza e/ou Região Metropolitana (Caucaia, Maracanaú). Muito amor, né? Vem conferir!'
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Vocês oferecem frete grátis?",
                        answer: "Para GANHAR frete grátis o valor mínimo do pedido será de 150 reais. Essa condição especial de frete grátis só será válida para cidade Fortaleza/CE, cidade Metropolitanas (Caucaia- Maracanaú)."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Finalizei minha compra e queria alterar a forma de pagamento?",
                        answer: "Para garantir a total segurança do seu pedido, não é possível alterar a forma de pagamento depois que você finalizar a comprinha. Se você ainda não tiver pagado  seus  mimos,  é  só  desconsiderar  esse  pedido  (será  cancelado automaticamente, não se preocupe), escolher de novo seus produtos e finalizar com a nova forma de pagamento desejada."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Posso parcelar minhas compras?",
                        answer: "Suas compras realizadas com Cartão de Crédito podem ser parceladas em até 3x sem juros. Um sonho!"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "A 7 Tons de Beleza aceita quais formas de pagamento?",
                        answer: "Você pode pagar seus mimos por Boleto Bancário, Cartão de Crédito, Depósito em Conta ou Transferência bancária. Suas comprinhas no cartão podem ser parceladas em até 3x sem juros e nas comprinhas por boleto, depósito ou transferência você ganha 5% de desconto. / *O prazo para pagamento do boleto bancário gerado é de 3 dias  úteis e o prazo para compensação da transação é de até 3 dias úteis. Os dados bancários para depósito ou transferência estão na finalização do seu pedido e o prazo para pagamento é de até 3 dias úteis. Estão disponíveis Banco do  Brasil, Caixa Econômica Federal e Bradesco. Você pode enviar o comprovante por E-mail, para 7tonsdebeleza@gmail.com, ou WhatsApp, em (85) 9 9996. 8549. Confirmaremos sua comprinha em até 48 horas úteis. / *O pagamento da sua compra no cartão de crédito poderá ser aprovado no máximo em até 3 dias úteis. Vale lembrar: o prazo de entrega do seu pedido só começa a ser contado depois que o pagamento do seu pedido for aprovado, ok?"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Nascetur ridiculus mus mauris vitae ultricies leo integer?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
                    }
                }/>
            </div>
            <br/>

        </div>
    )
}

export default Faq;


const tituloPeriferico = {
    fontSize: '20px',
    marginTop: '10px'
}

const textoPeriferico = {
    maxWidth: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '14px',
}