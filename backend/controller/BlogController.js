const Blog = require("../model/Blog");
const fs = require('fs');


module.exports = {
    async store(req,res){
        try{
            const img = req.file.filename
            
            const data = new Date()

            const { titulo, preExibicao, texto } = req.body

            const procura_titulo = await Blog.findOne({titulo})

            if(procura_titulo){
                fs.unlink(`./uploads/${img}`,(err)=>{
                    if(err){
                        return res.send(err)
                    }
                })
                
                return res.status(400).send('Titulo já existente')
            }

            const post = await Blog.create({
                titulo,
                capa: img,
                data,
                preExibicao,
                texto
            })

            return res.send(post)

            //Verificar no front se a resposta tem o campo errors
            //se tiver, retornar mensagem
        }catch(e){
            return res.send(e)
        }
    },

    async index(req,res){
        const { pagina } = req.query

        const posts = await Blog.find().populate().sort({updatedAt: -1}).limit(20).skip(10 * (pagina - 1));

        return res.send(posts);
    },

    async show(req,res){
        try{
            const { id } = req.params

            const post = await Blog.findById({_id:id})
    
            //Se tiver resultado
            if(post){
                return res.send(post)
            }
            
            //Caso seja requisição vazia
            return res.status(404).send()
        }
        catch(e){
            //Caso o ID esteja em formato errado ou requisição falhe
            res.status(400).send('Erro na requisição')
        }
    },

    async destroy(req,res){
        try{
            const { id } = req.params

            const post = await Blog.findByIdAndDelete({_id: id})
    
            if(!post){
                return res.status(404).send('Post com esse ID inexistente')
            }
            
            const name = post.capa

            fs.unlink(`./uploads/${name}`,(err)=>{
                if(err){
                    return res.send(err)
                }
            })
            
            return res.send(post)
        }catch(e){
            //Caso o ID esteja em formato errado ou requisição falhe
            res.status(400).send('Erro na requisição')
        }
    },

    async update(req,res){
        try{
            const { id } = req.params
            
            const {titulo, data, preExibicao, texto} = req.body
            
            await Blog.findByIdAndUpdate({_id: id}, {$set: {titulo, data, preExibicao, texto}}, {new:true}, (err,doc)=>{
                if(err){
                    return res.status(500).send(err)
                }
                
                return res.send(doc)
        
            })
        }catch(e){
            console.log(e)
            //Caso o ID esteja em formato errado ou requisição falhe
            return res.status(400).send('Erro na requisição')    
        }       
    },

    async UpdateImage(req,res){
        const { id } = req.params

        const imgPath = req.file.filename

        const post = await Blog.findById({_id:id})

        const capaAntiga = post.capa

        await Blog.findByIdAndUpdate({_id: id},{$set: {capa:imgPath}},{new: true}, (err,doc)=>{
            if(err){
                return res.status(500).send(err)
            }
            fs.unlink(`./uploads/${capaAntiga}`,(err)=>{
                if(err){
                    return res.status(500).send(err)
                }
            })
    
            return res.send(doc)
    
        })
    }
}