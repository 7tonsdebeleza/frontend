import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Editor from './Editor';
import ThumbInput from '../../ThumbInput/ThumbInput';
import { Public } from '../../Produto/Dados';
import '../Admin.css';

export default function FormNovaPostagem({ update, match }) {

  const [capa, setCapa] = useState(null);
  const [titulo, setTiulo] = useState('');
  const [preExibe, setPreExibe] = useState('');

  function imageInput(e) {
    setCapa(e.target.files[0]);
  }

  // tratando submit do editor
  function submit() {
    const editor = document.getElementById('editor');
    console.log(editor.innerHTML);
    console.log(capa)
  }

  useEffect(() => {
    //Verificando se endereço bate com alguma publicação da lista
    if (update) {
      const adress = match.params.id;

      let post = Public.find((obj) => {
        return obj.id === adress;
      })

      if (post !== undefined) {
        setTiulo(post.titulo);
        setPreExibe(post.preExibicao)
        let editor = document.getElementById('editor');
        editor.innerHTML = post.texto;

      } else alert(`não foi encontrado uma publicação de id ${adress}`);
    }

  }, [update, match]);

  return (
    <div>
      <section className='admin-form' >

        <p><strong>{ update ? 'ATUALIZANDO POSTAGEM' : 'NOVA POSTAGEM' }</strong></p>

        <div className='admin-form-item'>
          <input id="inputTitulo" type="text" placeholder="TITULO DA PUBLICAÇÃO" name="titulo" value={titulo} onChange={(e) => setTiulo(e.target.value)} />
        </div>

        <br />

        <div className='admin-form-item'>
          <label>CAPA:</label>
          <ThumbInput onChange={imageInput} />

        </div>

        <br />

        <div className='admin-form-item'>
          <textarea id="inputDesc" type="text" placeholder="TEXTO DE PRÉ-EXIBIÇÃO" name="descricao" value={preExibe} onChange={(e) => setPreExibe(e.target.value)} />
        </div>

        <br />

        <div className='admin-form-item'>
          <label>CORPO DA PUBLICAÇÃO:</label>
        </div>


      </section>

      <Editor />

      <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
        <p className="btn-secundaryy">
          <Link to="/admin7tons/blog"> &larr; Retornar</Link>
        </p>
        <p onClick={() => submit()} className="btn-secundaryy" >
          <Link to="#">Publicar</Link>
        </p>
      </div>

    </div>
  )
}