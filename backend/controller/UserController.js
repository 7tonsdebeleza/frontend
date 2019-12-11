const User = require("../model/User")
const bcrypt = require("bcrypt")
const data = require('../data/data')
const jwt = require('jsonwebtoken');

process.env.SECRET_KEY = 'secret7tons';

module.exports = {
    async Store(req,res){
        const {nome,sobrenome,email,password} = req.body
        
        let user = await User.findOne({email})

        if(!user){
            user = await User.create({
                nome,
                sobrenome,
                email,
                password:bcrypt.hashSync(password, data.salt),
                carrinho: []
            })
        }

        return res.json(user)
    },

    async adicionarCarrinho(req,res){

        //Função que verifica a existencia do item no carrinho
        //Caso existe incrementa a quantidade
        //Caso contrario, apenas adiciona no carrinho
        function adicionaNoCarrinho(carrinho, id, quantidade){
            let itemNoCarrinho = false

            let temp = carrinho.map(function(arrayItem){
                if(arrayItem[0] == id){
                    arrayItem[1] = arrayItem[1] + quantidade
                    itemNoCarrinho = true
                }
            })

            if(itemNoCarrinho == true){
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
                    let novo_carrinho = adicionaNoCarrinho(carrinho_antigo, id ,quantidade)

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
                    

        }catch(error){
            return res.send(error)
        }
    },

    async removerCarrinho(req,res){
            
        function removerDoCarrinho(lista, elemento){
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
                    let novo_carrinho = removerDoCarrinho(carrinho_antigo, id)

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
    },

    
    async Login(req,res){
        const {email,senha} = req.body
        
        let response = await User.findOne({email});

        if(!response){
            return res.send("Email inválido!")
        }

        const senha_criptografada =  bcrypt.compareSync(senha,response.password)

        if(senha_criptografada){
            return res.send(response)
        }

        return res.send("Senha inválida!");
    },

    //Função retorna um token para autenicação
    async Sign(req,res){
        const {email,senha} = req.body
        
        User.where({email: email}).findOne((e, data) => {
            //Casos de erro ao procurar usuário
            if(e) return res.send({error: e});
            if(!data) return res.send("Email inválido!")
            
            const senha_criptografada =  bcrypt.compareSync(senha,data.password)

            if(!senha_criptografada){
                return res.send("Senha inválida!")
            }

            //Gerando token com dados do usuário encontrado
            jwt.sign(data.toJSON(), process.env.SECRET_KEY, {expiresIn: '7d'}, (err, token) => {
                if(err){
                    console.log(err)
                    return res.send({error: "Erro inesperado..."})
                } 
                return res.send({token: token})
            })

        });

    },

    //Função para autenticação de tokens
    Auth(req, res){
        //Decodificando token
        jwt.verify(req.body.headers['Authorization'], process.env.SECRET_KEY, (err, decode) =>{
            if(err){
                //Caso em que token se expirou ou houve algum erro interno
                return res.send({error: err})
            }

            //Buscando dados do usuário
            User.where({email: decode.email}).findOne((e, data) => {
                if(e) return res.send({error: e})
                if(!data) return res.send("Usuário não encontrado")
                return res.send(data)
            })

        })
    },
         
}
