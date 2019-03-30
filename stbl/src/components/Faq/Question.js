import React, { Component } from 'react';
import './QuestionStyle.css';

class Question extends Component {
    state = {
        dropped: this.props.dropped //Estado para determinar se resposta é visível ou não, recebe valor default na props
    }

    show = () =>{
        //Função para alternar estado da visibilidade da resposta
        this.setState({
            dropped: this.state.dropped ? false : true,
        })
    }

    render(){
        let answer; //Receberá props de resposta se estado estiver visível, receberá null caso contrário
        let textAction; //Texto complementar (mostrar ou esconder)
        let dinamicBg; //Variável para controle do background dinâmico
        let animation; //Variável para controle da animação de sugir resposta

        if(this.state.dropped){
            //State true, answer recebe props e estrutura para jsx
            answer = (
                <div className="d-flex justify-content-between btnQuestionText">
                        <div className="">
                            <p className="badge badge-success">Resposta</p>
                        </div>
                        <div className="questionText">
                            <p>
                                {this.props.texts.answer}
                            </p>
                        </div>
                </div>);

            //Texto muda para "esconder"
            textAction = "Esconder";

            //Background muda para tema dark
            dinamicBg = {
                color: '#f8f8f7',
                backgroundColor: 'rgb(52, 58, 64)'
            };

            //Animação surgindo
            animation = {
                transform: 'scaleY(1)',
            };

        } else {

            //State false, answer vazia
            answer = (null);

            //Texto muda para "mostrar"
            textAction = "Mostrar";

            //Desfazendo animação
            animation = {
                transform: 'scaleY(0)',
            };

            //Background muda para tela light
            dinamicBg = {
                color: '#222222',
                backgroundColor: '#f8f8f7'
            }
        }

        return(
            <div>
                <button onClick = {() => {this.show()}} className='btnQuestion' style={dinamicBg}>
                    <div className="d-flex justify-content-between btnQuestionText">
                        <div className="">
                            <p className="badge badge-danger">Pergunta</p>
                        </div>
                        <div className="questionText">
                            <p>
                                {this.props.texts.quest}
                            </p>
                        </div>
                        <span className='statusQuestion'>
                            {textAction}
                        </span>   
                    </div>
                </button>
                <div className='answerAnimation' style={animation}>{answer}</div>
                
                
            </div>
        )
    }
}

export default Question;