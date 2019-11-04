const User = require("../model/User")
const bcrypt = require("bcrypt")
const data = require('../data/data')

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
    }
}