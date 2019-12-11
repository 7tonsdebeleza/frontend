const Admin = require("../model/Admin")

module.exports = {
    async Store(req,res){
        const {nome,email,password} = req.body
        
        let admin = await Admin.findOne({email, password})

        if(!admin){
            admin = await Admin.create({
                nome,
                email,
                password
            })
        }

        return res.json(admin)
    },

    async Find(req,res){
        const {email, senha} = req.body;

        let response = await Admin.findOne({email});

        if(!response){
            return res.send("Email inválido!")
        }

        if(response.password == senha){
            return res.send(response);
        }

        return res.send("Senha inválida!");
    },

    //Função retorna um token para autenicação
    async Sign(req,res){
        const {email,senha} = req.body
        
        let response = await User.findOne({email});

        if(!response){
            return res.send("Email inválido!")
        }

        const senha_criptografada =  bcrypt.compareSync(senha,response.password)

        if(!senha_criptografada){
            return res.send("Senha inválida!")
        }

        const token = jwt.sign(response, process.env.SECRET_KEY, {expiresIn: '7d'})
        return res.send({token: token})

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