const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    nome:{
        required: true,
        type: String,
    },
    sobrenome:{
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String,
        unique: false,
    },
    phoneAreaCode: {
        required: false,
        type: String,
        unique: false, 
    },
    phoneNumber: {
        required: false,
        type: String,
        unique: false,
    },
    cep: {
        required: false,
        type: String,
        unique: false,
    },
    carrinho: {
        type: []
    }

    },{
        timestamps: true,
        //toJSON: {virtuals: true},
        //toObject: {virtuals: true}
    }
);

module.exports = mongoose.model("User",UserSchema)