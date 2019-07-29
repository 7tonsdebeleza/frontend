const Users = require("../../model/users/users");

class UsersController{
    async store(req,res){
        const users = await Users.create({title: "Usuarios"});

        return res.json(users);
    }

    async show(req,res){
        const users = await Users.findById("5d28a384fc838637ec16a333").populate({
            path: 'usuario',
            options: {sort: {createdAt: -1}}
        });

        return res.json(users);
    }
}

module.exports = new UsersController;