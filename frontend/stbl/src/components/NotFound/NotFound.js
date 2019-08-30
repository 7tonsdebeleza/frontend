import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="notfound">
            <h1>Página nao encontrada :(</h1>
            <h2>Sentimos muito pelo incoveniente</h2>
            <div>
                <p>Algumas razões para isso acontecer:</p>
                <ul>
                    <li>A página pode ter sido removida;</li>
                    <li>A página pode estar temporariamente indisponível;</li>
                    <li>Você pode ter digitado o endereço errado.</li>
                </ul>
            </div>

            <p className="button-pri botaovoltarhome">
                <Link to="/home">Voltar para Página inicial!<span/></Link>
            </p>
        </div>
    )    
}

export default NotFound;