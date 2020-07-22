import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ListarCompras from "./ListarCompras";

class Cliente extends Component {

    state = {
        compras: []
    }

    componentDidMount() {
        //##### Carregar as compras no bd
        this.setState({ compras: testeCompras })
    }

    render() {
        return (
            <div className="login container">
                <div className="bread">
                    <Link to="/home" >Home</Link>
                    <span className="arrow">/</span>
                    <span>Minha conta</span>
                </div>
                <div className="criar-conta login">
                    <header className="page-header">
                        <h1>Área do Cliente</h1>
                    </header>
                    <p className="title">
                        Bem vindo(a) <b>{this.props.user.nome}</b>!
                        <span className="btn-secundaryy" style={{ float: "right", marginTop: '4px', marginBottom: '4px' }}>
                            <Link to="/cliente/atualizar"> Atualizar suas informações </Link>
                        </span>
                    </p>

                </div>
                <ListarCompras compras={this.state.compras} user={this.props.user} />

                <hr />

            </div>
        )
    }
}

const testeCompras = [
    {
        id: 1,
        data: "19/10/2019",
        status: "a caminho",
        codigo: "#1"
    },

    {
        id: 2,
        data: "17/10/2019",
        status: "entregue",
        codigo: "#2"
    },

    {
        id: 3,
        data: "17/10/2019",
        status: "entregue",
        codigo: "#3"
    },
]






export default Cliente