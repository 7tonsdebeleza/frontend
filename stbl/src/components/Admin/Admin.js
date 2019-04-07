import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Admin extends Component{
    state = {
        formNewPro: false
    }

    expandirPro = () =>{
        this.setState({
            formNewPro: this.state.formNewPro ? false : true
        })
    }

    render(){
        let formNewPro;
        //Guardará formulário de produtos, permitindo exibir e ocultar.

        if(this.state.formNewPro){
            formNewPro = (<form>

                <label>Título:</label><em>*&nbsp;&nbsp;</em>
                <div >
                    <input className="inputt" type="text" aria-describedby="emailHelp" name="email"></input>
                </div>

                <label>Tipo:</label><em>*&nbsp;&nbsp;</em>
                <div>
                    <input className="inputt" type="text" name="senha"></input>
                </div>

                <label>Marca:</label><em>*&nbsp;&nbsp;</em>
                <div>
                    <input className="inputt" type="text" name="senha"></input>
                </div>

                <label>Descrição:</label><em>*&nbsp;&nbsp;</em>
                <div>
                    <input className="inputt" type="text" name="senha"></input>
                </div>

                <label>Estoque:</label><em>*&nbsp;&nbsp;</em>
                <div>
                    <input className="inputt" type="number" name="senha"></input>
                </div>

                <label>Imagem:</label><em>*&nbsp;&nbsp;</em>
                <div>
                    <input className="inputt" type="file" name="senha"></input>
                </div>

                <p className="btn-secundaryy">
                    <button>Enviar</button>
                    <em className="obrigatorio">(* obrigatório)</em>
                </p>

            </form>);
        } else {
            formNewPro = (null)
        }

        return(
            <div className="login container">
                    <div className="bread">
                        <Link to="/home" >Home</Link>
                        <span className="arrow">/</span>
                        <span>Área Administrativa</span>
                    </div>
                    <div className="criar-conta login">
                        <header className="page-header">
                            <h1 className>Área Administrativa</h1>
                        </header>
                        <p className="title">Área exclusiva para administração da loja virtual 7 Tons de Beleza.</p>

                        <div className="btn-secundaryy">
                            <button onClick={() => {this.expandirPro()}}>Adicionar novo produto</button>
                            <p style={{marginTop:'-2%'}}>Adicionar informações para um novo produto</p>
                        </div>

                        {
                            formNewPro
                            /*Exibe um formulário para coleta de dados do novo produto assim que botão for assionado*/
                        }

                        <div className="btn-secundaryy">
                            <button>Atualizar produtos</button>
                            <p style={{marginTop:'-2%'}}>Remover, atualizar estoque e outras informações</p>

                            {/*Buscar lista de produtos no banco de dados, criar componte de produto editável*/}
                        </div>

                        <div className="btn-secundaryy">
                            <button>Consultar históricos</button>
                            <p style={{marginTop:'-2%'}}>Registros de compras e demais atividades</p>

                            {/*Buscar registros no banco de dados e exibir lista*/}
                        </div>

                    </div>
                </div>
        )
    }
}

export default Admin;