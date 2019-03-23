import React, { Component } from 'react';

class Question extends Component {
    state = {
        dropped: this.props.dropped
    }

    show = () =>{
        this.setState({
            dropped: this.state.dropped ? false : true,
        })
    }

    render(){
        let answer;

        if(this.state.dropped){
            answer = (<div><p>{this.props.texts.answer}</p></div>)
        } else {
            answer = (null)
        }

        return(
            <div>
                <button onClick = {() => {this.show()}} style={btnQuestion}>
                <div className="d-flex justify-content-between">
                    <div className="">
                        <p className="badge badge-danger">Question</p>
                    </div>
                    <div className="">
                        <p>
                            {this.props.texts.quest}
                        </p>
                    </div>
                    <span>
                        Mostrar
                    </span>   
                </div>
                </button>

                {answer}
                
            </div>
        )
    }
}

export default Question;

const btnQuestion = {
    width: "100%",
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#f8f8f7',
    border: 'none',
    boxShadow: '0 1px 1px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.19)'
}

