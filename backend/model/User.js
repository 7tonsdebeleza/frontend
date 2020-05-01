const mongoose = require("mongoose");

const FreteSchema = require('./Frete');

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
        required: true,
        type: String,
        unique: false, 
    },
    phoneNumber: {
        required: true,
        type: String,
        unique: false,
    },
    cep: {
        required: true,
        type: String,
        unique: false,
    },
    frete:{
        type: FreteSchema,
        required: true
    },
    carrinho: {
        type: []
    },
    emailConfirmado:{
        required: true,
        type: Boolean
    },
    senhaAntiga:{
        required: true,
        type: String
    }

    },{
        timestamps: true,
        //toJSON: {virtuals: true},
        //toObject: {virtuals: true}
    }
);

module.exports = mongoose.model("User",UserSchema)