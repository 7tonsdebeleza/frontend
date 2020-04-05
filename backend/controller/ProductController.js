const Product = require("../model/Product");
const fs = require('fs');

module.exports = {
    async Store(req,res){
        try{
            const img = req.file
            const imgPath = img.filename
            
            const {titulo, marca, preco, estoque, tipoProduto, descricao, novidade = true, promocao = false,
                peso =" ", formato =" ", comprimento =" ", altura =" ", largura =" ", diametro =" "}
                 = req.body;
            
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
                descricao,
                peso,
                formato,
                comprimento,
                altura,
                largura,
                diametro,
                novidade,
                promocao
            },(e)=>{console.log(e)})
            
            return res.send(product)
        
        }catch(e){
            return res.send(e)
        }
    },

    async Comprar(req,res){
        const { items } = req.body;
        /*
         Model: id
                description
                quantity
                amount
        */

        items.map(async (item)=>{
            try{
                await Product.findByIdAndUpdate({_id: item.id},(err,data)=>{
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

                    return res.send({error: `Quantidade insiponível em estoque para produto de ID:${data.id}`})
                })

            }catch(e){
                return e
            }
        })

        /*
        console.log("O estoque dos itens a seguir deve ser atualziado no BD:")
        console.table(items);
        
        // Retorno para PagSeguro não spamar
        return res.send("Status de transação paga salvo com estoque atualizado");
        
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
        })*/

    },

    async Show(req,res){
        const produtos = await Product.find().populate().sort({updatedAt: -1});

        return res.send(produtos);
    },

    async ShowTipo(req,res){
        const produtos = await Product.find({"tipoProduto":req.body.tipo});

        return res.send(produtos);
    },

    async ShowByNewer(req,res){
        const produtos = await Product.find({"novidade": true});

        return res.json(produtos)
    },

    async ShowByPromotion(req,res){
        const produtos = await Product.find({"promocao": true});

        return res.json(produtos)
    },

    async Destroy(req,res){

        const {_id} = req.body
        const produto = await Product.findByIdAndDelete({_id})

        const name = produto.img

        fs.unlink(`./uploads/${name}`,(err)=>{
            if(err){
                return res.send(err)
            }
        })

        return res.send(produto)
    },
    
    async UpdateImage(req,res){
        const {id}  = req.headers;
        const img = req.file
        const imgPath = img.filename

        const produto = await Product.findById({_id:id})

        const oldName = produto.img

        await Product.findByIdAndUpdate({_id: id},{$set: {img:imgPath}},{new: true}, (err,doc)=>{
                if(err){
                    return res.send(err)
                }
                fs.unlink(`./uploads/${oldName}`,(err)=>{
                    if(err){
                        return res.send(err)
                    }
                })
        
                return res.send(doc)
        
            })
        
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

    async UpdatePeso(req,res){
        const {id, novo_peso} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {peso: novo_peso}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdateFormato(req,res){
        const {id, novo_formato} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {formato: novo_formato}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdateComprimento(req,res){
        const {id, novo_comprimento} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {comprimento: novo_comprimento}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdateAltura(req,res){
        const {id, nova_altura} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {altura: nova_altura}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdateLargura(req,res){
        const {id, nova_largura} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {largura: nova_largura}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdateDiametro(req,res){
        const {id, novo_diametro} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {diametro: novo_diametro}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdateNovidade(req,res){
        const {id, novidade} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {novidade}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

    async UpdatePromocao(req,res){
        const {id, promocao} = req.body

        Product.findByIdAndUpdate({_id: id},{$set: {promocao}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    },

}