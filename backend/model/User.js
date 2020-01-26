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
    type: {
        required: true,
        type: String,
        unique: false,
    },
    street: {
        required: true,
        type: String,
        unique: false,
    },
    number: {
        required: true,
        type: String,
        unique: false,
    },
    complement: {
        required: true,
        type: String,
        unique: false,
    },
    district: {
        required: true,
        type: String,
        unique: false,
    },
    postalCode: {
        required: true,
        type: String,
        unique: false,
    },
    city: {
        required: true,
        type: String,
        unique: false,
    },
    state: {
        required: true,
        type: String,
        unique: false,
    },
    country: {
        required: true,
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