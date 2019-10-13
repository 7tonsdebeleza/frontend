const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
    }

    },{
        timestamps: true,
        toJSON: {virtuals: true},
        toObject: {virtuals: true}
    }
);

module.exports = mongoose.model("Product",ProductSchema);