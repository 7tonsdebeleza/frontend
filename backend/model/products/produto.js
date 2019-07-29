const mongoose = require('mongoose');

const Produto = new mongoose.Schema({
    img:{
        required: true,
        type: String,
        unique: true
    },
    titulo: {
        required: true,
        type: String,
        unique: true
    },
    marca: {
        required: true,
        type: String,
    },
    preco: {
        required: true,
        type: Number,
    },
    estoque:{
        required: true,
        type: Number
    },
    tipoProduto:{
        required: true,
        type: String,
    },
    descricao:{
        required: true,
        type: String
    },
    multiColor:{
        required: true,
        type: Boolean
    }

    },{
        timestamps: true,
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    });

module.exports = mongoose.model("Produto",Produto);