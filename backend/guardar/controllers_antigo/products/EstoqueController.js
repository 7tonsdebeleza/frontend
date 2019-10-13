const Estoque = require("../../model/products/estoque");

class EstoqueController{
    async store(req,res){
        const estoque = await Estoque.create({title: "Estoque"});

        return res.json(estoque);
    }

    async show(req,res){
        const estoque = await Estoque.findById("5ceab8aa40dc8a3b2c4ce3d2").populate({
            path: 'products',
            options: {sort: {createdAt: -1}}
        });

        return res.json(estoque);
    }
}

module.exports = new EstoqueController;