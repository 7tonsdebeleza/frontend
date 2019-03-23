import React from "react";
import Question from "./Question";

const Faq = () => {
    return(
        <div className="container">
            <h3 className="spotlight" style={tituloPeriferico}>Perguntas Frequentes </h3>
            <hr/>
            <p className="text-center discreet-arimo">
                Abaixo em nosso FAQ estão algumas preocupações comuns de nossos clientes antes de comprar um produto, se você tiver outras perguntas, por favor, basta enviá-lo para support@email.com.
            </p>

            <p>
                <Question dropped = {true} texts = {{
                        quest: "Quest test",
                        answer: "Answer test"
                    }
                }/>
                
            </p>

        </div>
    )
}

export default Faq;


const tituloPeriferico = {
    fontSize: '20px',
    marginTop: '10px'
}