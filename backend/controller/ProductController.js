const Product = require("../model/Product")

module.exports = {
    async Store(req,res){
        try{
            const {img, titulo, marca, preco, estoque, tipoProduto, descricao} = req.body;
            const procura_imagem = await Product.findOne({img})
            const procura_titulo = await Product.findOne({titulo})

            if(procura_imagem){
                return res.send("Imagem já existente!")
            }
            if(procura_titulo){
                return res.send("Titulo já existente!")
            }

            
            const product = await Product.create({
                img,
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

        const product = await Product.findOneAndUpdate({"_id":id},{"titulo":novo_titulo},{new:true});

        return res.send(product)
    },

    async UpdateMarca(req,res){
        const {id, nova_marca} = req.body

        const product = await Product.findOneAndUpdate({"_id":id},{"marca":nova_marca},{new:true});

        return res.send(product);
    },

    async UpdatePrice(req,res){
        const {id, novo_preco} = req.body

        const product = await Product.findOneAndUpdate({"_id":id},{"preco":novo_preco},{new:true});
        
        return res.send(product)
    },

    async UpdateEstoque(req,res){
        const {id, novo_estoque} = req.body

        const product = await Product.findOneAndUpdate({"_id":id},{"estoque":novo_estoque},{new:true});

        return res.send(product)
    },

    async UpdateDescription(req,res){
        const {id, nova_descricao} = req.body

        const product = await Product.findOneAndUpdate({"_id":id},{"descricao":nova_descricao},{new:true});

        return res.send(product)
    },

    async UpdateType(req,res){
        const {id, novo_tipo} = req.body

        const product = await Product.findOneAndUpdate({"_id":id},{"tipoProduto":novo_tipo},{new:true});

        return res.send(product)
    }
}