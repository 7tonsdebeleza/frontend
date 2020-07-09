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
                Abaixo em nosso FAQ estão algumas preocupações comuns de nossos clientes antes de comprar um produto, se você tiver outras perguntas, por favor, basta enviá-lo para support@email.com.
            </p>

            {/*Abaixo, lista com perguntas estáticas em lorem ipsum
                escalável para renderização dinâmica com bd pelo componente <Question/> e suas props
                , caso precise.
            */}

            <div>
                <Question dropped = {true} texts = {{
                        quest: "Nascetur ridiculus mus mauris vitae ultricies leo integer?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Dolor morbi non arcu risus quis varius quam quisque. Id porta nibh venenatis cras sed felis eget velit aliquet?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Imperdiet dui accumsan sit amet nulla facilisi morbi tempus?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Massa enim nec dui nunc?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Vestibulum lectus mauris ultrices eros in cursus turpis massa?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
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
                        quest: "Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
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
                        quest: "Netus et malesuada fames ac turpis egestas maecenas pharetra?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
                    }
                }/>
            </div>
            <br/>
            <div>
                <Question dropped = {false} texts = {{
                        quest: "Pellentesque habitant morbi tristique senectus et netus et?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
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
                        quest: "Vulputate mi sit amet mauris commodo quis imperdiet massa. Egestas integer eget aliquet nibh praesent tristique?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
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
                        quest: "Malesuada fames ac turpis egestas sed tempus urna et. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Magna eget est lorem ipsum dolor sit?",
                        answer: "Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Erat velit scelerisque in dictum non. Dolor sit amet consectetur adipiscing"
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