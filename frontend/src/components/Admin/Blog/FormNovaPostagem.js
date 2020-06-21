import React from 'react';
import { Link } from 'react-router-dom';
import Editor from './Editor';
import ThumbInput from '../../ThumbInput/ThumbInput';
import '../Admin.css';

const FormNovaPostagem = () => {

  // tratando submit do editor
  function submit() {
    const editor = document.getElementById('editor');
    console.log(editor.innerHTML);
  }

  return (
    <div>
      <section className='admin-form' >
        <div className='admin-form-item'>
          <label htmlFor="inputTitulo">TITULO:</label><br />
          <input id="inputTitulo" type="text" placeholder="TITULO" name="titulo" />
        </div>

        <br />

        <div className='admin-form-item'>
          <label>CAPA:</label>
          <ThumbInput />

        </div>

      </section>

      <Editor />

      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
        <p className="btn-secundaryy">
          <Link to="/admin7tons/blog"> &larr; Retornar</Link>
        </p>
        <p onClick={() => submit()} className="btn-secundaryy" >
          <Link to="#"> Publicar</Link>
        </p>
      </div>

    </div>
  )
}

export default FormNovaPostagem;