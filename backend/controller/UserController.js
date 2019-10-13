const User = require("../model/User")

module.exports = {
    async Store(req,res){
        const {nome,sobrenome,email,password} = req.body
        
        let user = await User.findOne({email})

        if(!user){
            user = await User.create({
                nome,
                sobrenome,
                email,
                password,
                carrinho: []
            })
        }

        return res.json(user)
    }
}