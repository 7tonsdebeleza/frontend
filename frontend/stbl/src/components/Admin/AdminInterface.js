import React from 'react';
import Search from '../Images/iconsearch2.png';
import Plus from '../Images/plus.svg';
import SettingIcon from '../Images/settings.svg';
import Pencil from '../Images/pencil.svg';

//Compontente stateless com interface principal da tela administrativa
//Herda as funções de respostas da interface
const AdminInterface = (props) =>{
    return(
        <div className='itens-container'>
            <div className='admin-item' onClick={() => {props.callback(2) }}>
                <img src={Search} width='40' height='40' alt='seach icon' />
                <span>CONSULTAR COMPRAS</span>
            </div>

            <div className='admin-item' onClick={() => {props.callback(3) }}>
                <img src={Plus} width='40' height='40' alt='seach icon' />
                <span>ADICIONAR NOVO PRODUTO</span>
            </div>

            <div className='admin-item' onClick={() => {props.callback(4) }}>
                <img src={SettingIcon} width='40' height='40' alt='seach icon' />
                <span>EDITAR PRODUTOS</span>
            </div>

            <div className='admin-item' onClick={() => {props.callback(5) }}>
                <img src={Pencil} width='40' height='40' alt='seach icon' />
                <span>BLOG</span>
            </div>                        
        </div>

    )
}

export default AdminInterface