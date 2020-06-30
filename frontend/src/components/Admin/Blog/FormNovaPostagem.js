import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Editor from './Editor';
import ThumbInput from '../../ThumbInput/ThumbInput';
import api from '../../API/api';
import '../Admin.css';

export default function FormNovaPostagem({ update, match }) {

  const [capa, setCapa] = useState(null);
  const [titulo, setTiulo] = useState('');
  const [preExibe, setPreExibe] = useState('');
  const [alerta, setAlert] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [fetchedPost, setPost] = useState(false);

  const history = useHistory();

  function imageInput(e) {
    setCapa(e.target.files[0]);
  }

  // tratando submit do editor
  async function submit() {
    const editor = document.getElementById('editor');

    if (!titulo || !preExibe || editor.innerHTML.length === 0)
      return setAlert('Preencha todos os campos!');

    if (update) {
      const req = { titulo, preExibicao: preExibe, texto: editor.innerHTML, data: fetchedPost.data }
      const token = localStorage.getItem("@stbl/admin/user");
      setEnviando(true);
      await api.put(`/posts/${fetchedPost._id}`, req, { headers: { authorization: token } }).then(() => {
        return history.push('/admin7tons/blog');

      }).catch(error => {
        console.log(error);
        alert('Erro inesperado... tente novamente mais tarde!');

      })

      if (capa) {
        console.log('atualizando imagem...');

        let reqImg = new FormData();
        reqImg.append('img', capa);

        const token = localStorage.getItem("@stbl/admin/user");
        setEnviando(true);
        await api.post(`/posts/${fetchedPost._id}`, reqImg, { headers: { authorization: token } }).then(() => {
          return history.push('/admin7tons/blog');

        }).catch(error => {
          console.log(error);
          alert('Erro inesperado... tente novamente mais tarde!');

        });

      }
      return setEnviando(false);

    } else {

      if (!capa) return setAlert('Preencha todos os campos!');

      let novaPostagem = new FormData();
      novaPostagem.append('img', capa);
      novaPostagem.append('titulo', titulo);
      novaPostagem.append('texto', editor.innerHTML);
      novaPostagem.append('preExibicao', preExibe);

      const token = localStorage.getItem("@stbl/admin/user");
      setEnviando(true);
      await api.post('/posts', novaPostagem, { headers: { authorization: token } }).then(() => {
        return history.push('/admin7tons/blog');

      }).catch(error => {
        if (error.response) {
          console.log(error.response);
          if (error.response.status === 400)
            setAlert('O título já existe!');

        } else {
          console.log(error);
          alert('Erro inesperado... tente novamente mais tarde!')
        }

      });

      return setEnviando(false);
    }
  }

  useEffect(() => {
    async function fetchPost() {
      const adress = match.params.id;

      const post = await api.get(`/posts/${adress}`);

      if (post) {
        setTiulo(post.data.titulo);
        setPreExibe(post.data.preExibicao)
        let editor = document.getElementById('editor');
        editor.innerHTML = post.data.texto;
        setPost(post.data);

      } else alert(`não foi encontrado uma publicação de id ${adress}`);
    }

    //Verificando se endereço bate com alguma publicação da lista
    if (update) {
      fetchPost();
    }

  }, [update, match]);

  return (
    <div>
      <section className='admin-form' >

        <p><strong>{update ? 'ATUALIZANDO POSTAGEM' : 'NOVA POSTAGEM'}</strong></p>

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
          <Link to="#"> {enviando ? 'Enviando...' : 'Publicar'} </Link>
        </p>
      </div>

      {alerta ?
        <div id="alert-div-modal" className="alertacadastro"> {alerta}
          <Link className="fecharalerta" name="alerta2" onClick={() => setAlert(false)} to="#">X</Link>
        </div> : null
      }

    </div>
  )
}