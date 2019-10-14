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
    }
}