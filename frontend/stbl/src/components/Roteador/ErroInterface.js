import React from "react";
import logo from "../Images/logo.png";

const ErroInterface = () => {
    return(
        <div className="notfound">
            <h1>Erro inesperado... :(</h1>
            <h2>Sentimos muito pelo incoveniente</h2>
            <div>
                <p>Tente novamente mais tarde, ou entre em contato por (85) 9 9996.8549</p>
                <p><img width={80} height={80} src={logo} alt="7 Tons de Beleza"/></p>
            </div>
        </div>
    )    
}

export default ErroInterface;