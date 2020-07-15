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
                        quest: "Como funciona o pagamento com Cartão de Crédito?",
                        answer: "Você pode pagar com cartões de crédito das bandeiras visa, mastercard, hipercard, elo, amex e diners club,Cielo e o valor pode ser dividido em até 03 vezes sem juros, com parcelas mínimas de R$ 50,00."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Como funciona o pagamento com Boleto Bancário?",
                        answer: "É muito fácil pagar com boleto bancário! Primeiro, você precisa imprimir o boleto clicando no botão imprimir no boleto que aparece quando você finaliza o seu pedido, ou na seção meus pedidos, ou ainda no email que a gente vai te mandar confirmando a sua encomenda. Depois disso, é só pagar no seu banco ou pela internet, no home banking. O seu pagamento é validado em até três dias úteis, e o prazo estimado de entrega começa a valer a partir dessa data, tá? O prazo para pagamento está descrito no seu boleto e se não for pago é cancelado automaticamente. Se for cancelado não tem como emitir a segunda via, aí você tem que ir até o seu carrinho de compras de novo, e fazer uma nova compra. Ah, caso o vencimento caia em um final de semana ou feriado, pode pagar no dia útil seguinte."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Como faço para imprimir a 2ª via e/ou prorrogar de boleto?",
                        answer: 'Para 2 vias é só entrar na área "meus pedidos" no nosso site, e ao lado do pedido clicar na opção "imprimir boleto". Ah, você também pode imprimir pela opção de "imprimir boleto" que aparece no e-mail de "pedido recebido". Caso a data de vencimento do boleto já tenha ultrapassado, ele ficará inválido e o seu pedido é cancelado automaticamente. Nesse caso, é só fazer um novo pedido.'
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Onde eu pago o boleto bancário?",
                        answer: "Até a data de vencimento o boleto bancário pode ser pago em qualquer banco ou pela sua internet banking."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Como faço para cancelar o boleto?",
                        answer: "Não  precisa nem pedir o cancelamento do boleto, o pedido é cancelado automaticamente no caso de não pagamento. Ah, não se preocupa que neste caso não tem cobrança de nenhuma taxa de multa."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Vocês possuem algum desconto?",
                        answer: <p> Nossa loja é recheada de produtos, promoções e descontos incríveis! Pra checar todos  as  promoçõe  s  que  estão  ativas  no  momento,  é  só  acessar <Link to={'/lojavirtual/Promoções'}> Nossas promoções</Link>. Corre pra aproveitar! </p>
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Como faço para cancelar meu pedido?",
                        answer: "É importante a gente te falar que todos os pedidos passam por uma avaliação. Fez o pedido, mas desistiu? Se você quiser cancelar o seu pedido voçê pode! Depois do cancelamento faremos o estorno do valor para a sua conta. Vale lembrar que o valor devolvido é sempre o valor do pedido mais o frete, ou seja. O valor da sua NFe, ok?"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Como sei se o meu pedido já foi enviado?",
                        answer: 'Após concluir sua compra, acompanhe o status do seu pedido em "minha conta"!'
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Vocês vendem em atacado?",
                        answer: "No momento não trabalhamos com condições especiais para atacado. Assim, por não existir uma quantidade mínima ou máxima de compra por produtos, você pode adquirir quantas unidades desejar. Além disso, nossos produtos  já são super baratinhos e sempre oferecemos descontos e promoções incríveis no site!Más no futuro ire mos atender nosso cliente também no atacado."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Como solicitar a troca/devolução?",
                        answer: "Você pode solicitar a troca ou devolução de um produto entrando em contato com a gente por meio da nossa Central de Atendimento, em até 7 dias após o recebimento. O item para troca não pode ter marcas de uso e precisa estar com a embalagem intacta. Vamos te enviar um código de postagem para que você nos mande o produto por uma agência dos correios (exceto compras de Fortaleza – CE). Assim que ele chegar ao nosso centro de distribuição, vamos analisar e efetuar a restituição de acordo com a sua escolha no momento da solicitação. Qualquer dúvida, é só falar com a gente que com certeza vamos te ajudar! Não se preocupe que iremos retira o pedido no local de entrega sem nenhum custo. Depois que o seu pedido/produto voltar para a gente, vamos fazer o estorno do valor para sua conta, ou enviar um vale no valor da sua compra ou se preferir um produto novinho para você. Vale lembrar que o valor devolvido é sempre o valor do pedido mais o frete, ou seja, o valor da sua NFe, ok?"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Quais os motivos que posso solicitar troca/ devolução do produto?",
                        answer: "Seu produto pode ser trocado se estiver danificado, algum defeito de fábrica. Também podemos trocar o mimo caso você se arrependa da comprinha ou tenha recebido o produto errado. Estamos sempre aqui para te ajudar da melhor forma possível."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Em que condições o produto deverá estar para realizar troca/devolução?",
                        answer: "Para realizar troca ou devolução de um produto, com exceção daquele que apresentar defeito de fábrica, é preciso que ele esteja com o lacre intacto, dentro da embalagem original e sem indícios de uso ou estrago por mau uso. Se você tiver dúvidas sobre algum produto que comprou e deseja trocar ou devolver, é só falar com a gente que vamos te ajudar!"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Fiz minha compra pelo site e queria muito trocar na loja. Dá para fazer isso?",
                        answer: "Será um prazer em receber você, em nossa loja, só apresentar sua nota fiscal (impressa). Vamos trocar para vocês! Para dar tudo certo, o produto precisa estar lacrado e sem marcas de uso, tudo certo? Então tá."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Tenho quantos dias para trocar um produto comprado na loja física? É se tiver comprado no site, prazo mudar?",
                        answer: "Você tem até 07 dias para trocar um produto na loja física. É só apresentar a sua nota fiscal ou o número do CPF, que vamos encontrar sua compra no sistema e realizar a troca. O produto precisa estar lacrado e sem marcas de uso. Se a compra tiver sido feita pelo site, o prazo será de 15 dias corridos."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Recebi e não gostei. E agora?",
                        answer: "Se você não gostou do produto, não tem problema. Em caso de arrependimento de compras, a gente troca qualquer produto em até 7 dias depois da entrega. Se ele tiver algum defeito aparente, o prazo é de 15 dias contado da data de entrega. Basta entrar em contato pelo nosso email e a gente te ensina na o passo a passo para devolver o seu produto e você pode escolher entre trocar por outro que tenha sua cara e o mesmo valorou receber seu dinheiro de volta. Só não esquece de enviar o produto com a nota fiscal, tá?"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "O produto chegou com defeito, o que eu faço?",
                        answer: "O produto chegou com defeito? Não tem problema, a gente troca por outro em até 15 dias depois da entrega. É só ligar pra gente ou mandar e-mail. A gente te ensina o passo a passo para você devolver o produto, daí você pode escolher entre trocar por outro produto que você goste e o mesmo valor ou receber seu dinheiro de volta. Só não esquece de enviar o produto junto com a nota fiscal, tá?"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Como faço para escolher a cor da minha base?",
                        answer: "Sabendo a base que você costuma usar (e que a gente venda na nossa loja) e a que você deseja comprar e experimentar, podemos comparar as duas e te dizer qual tom (das opções que a nova base possui) mais se aproxima à sua pele. Todas as tonalidades são formadas pela mistura de quatro cores: branco, preto, vermelho e amarelo. A única diferença é a concentração das cores. Exemplo: uma base ou pó bege claro tem bem mais branco do que preto em sua formação.Estamos aqui para te ajudar de todas as formas possíveis, é só entrar em contato com a gente por meio do Whats (85) 9 9996854."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Cor do fundo?",
                        answer: "Tom de fundo da sua pele. Algumas peles têm tom de fundo amarelado, outras, rosado. Para saber o seu, aí vai uma dica: se quando toma sol você se bronzeia, seu tom de fundo tende a ser amarelado, mas se você fica com a pele vermelha, deve ter tom de fundo rosado. Outra opção é fazer o teste do apertão: aperte de leve o maxilar (abaixo da maçã do rosto) com o dedo indicador por 5 segundos. Quando soltar, veja como ficou: se ficar claro – é provável que seu tom de fundo seja amarelado, se ficar avermelhado, seu tom de fundo deve ser rosado."
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Comprei uma base e ficou no tom errado. Como faço para corrigir?",
                        answer: "Se você comprou uma base e ela não está no tom certinho da sua pele, é possível reaproveitar esse produto usando de muitas outras formas. Podemos te ajudar! Se a base ficou mais escura, é só misturá-la com uma base ou corretivo de cor clara até chegar ao tom da sua pele. O mesmo vale para bases claras que você quer escurecer. Outra dica é aplicar bases mais escuras como contorno facial e bases mais claras como corretivo. Aqui na 7 Tons de Beleza, você ainda encontra produtos mágicos que corrigem o tom da sua base, a deixando mais clara ou escura de acordo com a sua necessidade se continuar com dúvidas, é só falar com a gente, iremos amar falar com você, através do watts (85) 9 9996.8549!"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Uniformizar ou Equilibrar?",
                        answer: "Já sabe seu tom e seu fundo? Ótimo, o próximo passo é experimentar a base ou pó na pele do rosto. Escolha duas ou três opções que parecem mais próximas ao seu tom e passe um pouco no maxilar. Veja qual das cores combina mais e escolha."
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
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada?",
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
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada?",
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