function Buscador(busca, dados){
    //Lista de dados de saída:
    let resultado = [];

    //Lista de subpesquisas:
    let subPesquisas = busca.split(' ');

    dados.map((produto) => {
        let flag = true;
        let i = 0;

        //Checando se produto possui todas as subpesquisas da busca
        while(flag && i < subPesquisas.length){
            if(!checkExist(subPesquisas[i], produto)){
                flag = false;
            }

            i++;
        }

        if(flag){
            resultado.push(produto);
        }
        
    });

    return resultado;

}
export default Buscador;

//Subfunção para checar se string está presente nos dados
function checkExist(string, dado){
    if(dado.titulo.toLowerCase().search(string) != -1 || dado.marca.toLowerCase().search(string) != -1 || dado.descricao.toLowerCase().search(string) != -1 || dado.tipoProduto.toLowerCase().search(string) != -1){
        return true;
    }

    return false;
}

