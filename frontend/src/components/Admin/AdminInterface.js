import React from 'react';
import Search from '../Images/iconsearch2.png';
import Plus from '../Images/plus.svg';
import SettingIcon from '../Images/settings.svg';
import Pencil from '../Images/pencil.svg';
import { Link } from "react-router-dom";

//Compontente stateless com interface principal da tela administrativa
const AdminInterface = () =>{
    return(
        <div className='itens-container'>
            <Link to="/admin7tons/consulta"><div className='admin-item'>
                <img src={Search} width='40' height='40' alt='seach icon' />
                <span>  CONSULTAR COMPRAS</span>
            </div></Link>

            <Link to="/admin7tons/novoproduto"><div className='admin-item'>
                <img src={Plus} width='40' height='40' alt='seach icon' />
                <span>  ADICIONAR NOVO PRODUTO </span>
            </div></Link>

            <Link to="/admin7tons/editarprodutos"> <div className='admin-item'>
                <img src={SettingIcon} width='40' height='40' alt='seach icon' />
                <span> EDITAR PRODUTOS </span>
            </div></Link>

            <Link to="/admin7tons/blog"><div className='admin-item'>
                <img src={Pencil} width='40' height='40' alt='seach icon' />
                <span>  BLOG </span>
            </div> </Link>                        
        </div>

    )
}

export default AdminInterface