const Produto = require('../../model/products/produto');
const Estoque = require('../../model/products/estoque');


class ProductController{
    async store(req,res){
        //Procura a box fixa de Produtos criada no banco
        const estoque = await Estoque.findById("5d28b8942b448c14d4d54eee"); 

        try{

            const produto = await Produto.create({
                img: req.body.img,
                titulo: req.body.titulo,
                marca: req.body.marca,
                preco: req.body.preco,
                estoque: req.body.estoque,
                tipoProduto: req.body.tipoProduto,
                descricao: req.body.descricao,
                multiColor: req.body.multicolor
            });

            estoque.products.push(produto);

            await estoque.save();

            return res.json(produto);

        }catch(err){
            return res.send(err.message)
        }
    }

    async show(req,res){
        const estoque = await Estoque.findById("5d28b8942b448c14d4d54eee").populate({
            path: 'products',
            options: {sort: {createdAt: -1}}
        });

        return res.json(estoque);
    }


    async comprar(req,res){
        //recebe o titulo do produto e a quantidade
        const estoque = Produto.findOne({titulo: req.body.titulo}, (err,data) =>{
            //Se for solicitado mais do que a quantidade em estoque
            if(data.estoque >= req.body.quantidade){
                Produto.findOneAndUpdate({titulo:data.titulo}, {$set: {estoque: data.estoque - req.body.quantidade}}, 
                    {new: true}, (err,doc) =>{
                    if(err){
                        return res.send(err)
                    }
                    
                    if(doc.estoque == 0){
                        Produto.findOneAndUpdate({titulo:data.titulo}, {$set: {disponivel: false}}, 
                            {new: true}, (err,doc) =>{
                            if(err){
                                return res.send(err)
                            }
                        })                        
                    }

                    //Melhorar posteriormente, dependendo do retorno exigido pela API de pagamento
                    return res.json(doc)
                })
            }else{
                return res.send("erro! quantidade em estoque menor do que a solicitada")
            }

        })
    }

    //Recebe o nome e o novo nome para atualizar pelo req
    //atualiza em seguida no banco de dados
    async atualizarNome(req,res){
        const produto_atualizado = Produto.findOne({titulo: req.body.titulo}, (err,data) =>{
                Produto.findOneAndUpdate({titulo:data.titulo}, {$set: {titulo: req.body.novo_titulo}}, 
                    {new: true}, (err,doc) =>{
                    if(err){
                        return res.send(err)
                    }
                    //Melhorar posteriormente, dependendo do retorno exigido pela API de pagamento
                    return res.json(doc)
                }
            )}
        )
    }

    //Recebe o nome e a nova marca para atualizar pelo req
    //atualiza em seguida no banco de dados
    async atualizarMarca(req,res){
        const produto_atualizado = Produto.findOne({titulo: req.body.titulo}, (err,data) =>{
                Produto.findOneAndUpdate({titulo:data.titulo}, {$set: {marca: req.body.nova_marca}}, 
                    {new: true}, (err,doc) =>{
                    if(err){
                        return res.send(err)
                    }
                    //Melhorar posteriormente, dependendo do retorno exigido pela API de pagamento
                    return res.json(doc)
                }
            )}
        )
    }

    //Recebe o nome e o novo preco para atualizar pelo req
    //atualiza em seguida no banco de dados
    async atualizarPreco(req,res){
        const produto_atualizado = Produto.findOne({titulo: req.body.titulo}, (err,data) =>{
                Produto.findOneAndUpdate({titulo:data.titulo}, {$set: {preco: req.body.novo_preco}}, 
                    {new: true}, (err,doc) =>{
                    if(err){
                        return res.send(err)
                    }
                    //Melhorar posteriormente, dependendo do retorno exigido pela API de pagamento
                    return res.json(doc)
                }
            )}
        )
    }

    //Recebe o nome e o novo estoque para atualizar pelo req
    //atualiza em seguida no banco de dados
    async atualizarEstoque(req,res){
        const produto_atualizado = Produto.findOne({titulo: req.body.titulo}, (err,data) =>{            
            Produto.findOneAndUpdate({titulo:data.titulo}, {$set: {estoque: req.body.novo_estoque}}, 
                    {new: true}, (err,doc) =>{
                    if(err){
                        return res.send(err)
                    }

                    //Melhorar posteriormente, dependendo do retorno exigido pela API de pagamento
                        return res.json(doc)
                }
            )}
        )}


    //Recebe o nome e a nova descrição para atualizar pelo req
    //atualiza em seguida no banco de dados
    async atualizarDescricao(req,res){
        const produto_atualizado = Produto.findOne({titulo: req.body.titulo}, (err,data) =>{
                Produto.findOneAndUpdate({titulo:data.titulo}, {$set: {descricao: req.body.nova_descricao}}, 
                    {new: true}, (err,doc) =>{
                    if(err){
                        return res.send(err)
                    }
                    //Melhorar posteriormente, dependendo do retorno exigido pela API de pagamento
                    return res.json(doc)
                }
            )}
        )
    }

}

module.exports = new ProductController;