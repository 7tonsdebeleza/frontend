const Product = require("../model/Product")

module.exports = {
    async Store(req,res){
        try{
            const img = req.file
            const imgPath = img.filename
            
            const {titulo, marca, preco, estoque, tipoProduto, descricao} = req.body;
            
            const procura_imagem = await Product.findOne({img:imgPath})
            const procura_titulo = await Product.findOne({titulo})

            if(procura_imagem){
                return res.send("Imagem já existente!")
            }
            if(procura_titulo){
                return res.send("Titulo já existente!")
            }
            
            const product = await Product.create({
                img:imgPath,
                titulo,
                marca,
                preco,
                estoque,
                tipoProduto,
                descricao
            })
            
            
            return res.send(product)
        
        }catch(e){
            return res.send(e)
        }
    },

    async Comprar(req,res){
        const estoque = Product.findById({_id: req.body.id}, (err,data) =>{
            if(data.estoque >= req.body.quantidade){
                Product.findByIdAndUpdate({_id: req.body.id},{$set: {estoque: data.estoque - req.body.quantidade}},
                    {new: true},(err,doc) =>{
                        if(err){
                            return res.send(err)
                        }

                        return res.send(doc)
                    }
                )
            }
        })

    },

    async Show(req,res){
        const produtos = await Product.find().populate().sort({updatedAt: -1});

        return res.send(produtos);
    },

    async ShowTipo(req,res){
        const produtos = await Product.find({"tipoProduto":req.body.tipo});

        return res.send(produtos);
    },

    async Destroy(req,res){

        const {_id} = req.body
        const produto = await Product.findByIdAndDelete({_id})

        return res.send(produto)
    },

    async UpdateTitle(req,res){
        const {id, novo_titulo} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {titulo: novo_titulo}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdateMarca(req,res){
        const {id, nova_marca} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {marca: nova_marca}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdatePrice(req,res){
        const {id, novo_preco} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {preco: novo_preco}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdateEstoque(req,res){
        const {id, novo_estoque} = req.body
        
        Product.findByIdAndUpdate({_id: id},{$set: {estoque: novo_estoque}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdateDescription(req,res){
        const {id, nova_descricao} = req.body
        
        Product.findByIdAndUpdate({_id: id},{$set: {descricao: nova_descricao}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdateType(req,res){
        const {id, novo_tipo} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {tipoProduto: novo_tipo}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    
}