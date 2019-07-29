const User = require('../../model/users/user');
const Users = require('../../model/users/users');

const Produto = require('../../model/products/produto');

const bcrypt = require('bcrypt')

//salt insere elementos aleatorios, aumentando a aleatoriedade
const salt = bcrypt.genSaltSync(10)

class UserController{
    async store(req,res){
        //Procura a box fixa de Usuarios criada no banco
        const users = await Users.findById("5d337d6e467d702fd0414187"); 

        const senha_criptografada = bcrypt.hashSync(req.body.password,salt)
        
        const user = await User.create({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            password: senha_criptografada,
            carrinho: []
        });

        users.usuario.push(user);

        await users.save();

        return res.json(user);
    }

    //Supõe que o parametro de identificação do usuario será passado no req
    //Assim como o parametro de indetificação do produto e a quantidade
    async adicionaCarrinho(req,res){

        //Função que verifica a existencia do item no carrinho
        //Caso existe incrementa a quantidade
        //Caso contrario, apenas adiciona no carrinho
        function adicionar_carrinho(carrinho, id, quantidade){
            let verificador = false
            
            let temp = carrinho.map(function(posicao){
                if(posicao[0] == id){
                    posicao[1] = posicao[1] + quantidade
                    verificador = true
                }
            })
            if(verificador == true){
                return carrinho
            }
            carrinho.push([id,quantidade])
            return carrinho
        }

        try{
            //Encontra o usuario e o produto
            const usuario = await User.findOne({email: req.body.email}, (err,data_user) => {
                Produto.findOne({titulo: req.body.titulo}, (err,data_produto) => {
                    
                    //Armazena as informações temporariamente
                    //para que seja enviado para a função adicionar_carrinho
                    let id = data_produto._id
                    id = id.toString()
                    let quantidade = req.body.quantidade

                    let carrinho_antigo = [...data_user.carrinho]
                    let novo_carrinho = adicionar_carrinho(carrinho_antigo, id ,quantidade)

                    //Atualiza o carrinho no banco de dados
                    User.findOneAndUpdate({email: req.body.email}, {$set: {carrinho: novo_carrinho}}, 
                        {new: true}, (err,doc) =>{
                            if(err){
                                return res.send(err)
                            }
                            
                            return res.json(doc)
                        })    
                    })    
            })
        
        }catch(err){
            return res.send(err)
        }   
    }

    //Supõe que o parametro de identificação do usuario e do produto
    //serão passados no req, eliminando o elemento do carrinho
    async removerCarrinho(req,res){
        
        function remover_carrinho(lista, elemento){
            let remover
            let index
            lista.map(function(posicao){
                if(posicao[0] == elemento){
                    remover = posicao
                }
                index = lista.indexOf(remover)
            })
            if(index != -1){
                lista.splice(index,1)
            }
            return lista
        }
        
        try{
            //Encontra o usuario e o produto
            const usuario = await User.findOne({email: req.body.email}, (err,data_user) => {
                Produto.findOne({titulo: req.body.titulo}, (err,data_produto) => {
                    
                    //Armazena as informações temporariamente
                    //para que seja enviado para a função remover_carrinho
                    let id = data_produto._id
                    id = id.toString()

                    let carrinho_antigo = [...data_user.carrinho]
                    let novo_carrinho = remover_carrinho(carrinho_antigo, id)

                    //Atualiza o carrinho no banco de dados
                    User.findOneAndUpdate({email: req.body.email}, {$set: {carrinho: novo_carrinho}}, 
                        {new: true}, (err,doc) =>{
                            if(err){
                                return res.send(err)
                            }
                            
                            return res.json(doc)
                        })    
                    })    
            })
        
        }catch(err){
            return res.send(err)
        }

    }
    
    async logar(req, res){
        const senha_criptografada = bcrypt.hashSync(req.body.password,salt)
        const usuario = await User.findOne({email: req.body.email}, (err, data_user)=>{
            console.log(data_user)
            console.log(senha_criptografada)
            if(data_user.password == senha_criptografada){
                return res.send("logado")
            }else{
                return res.send("Erro, login ou senha invalidos")
            }
        })
        
    }
}

module.exports = new UserController;