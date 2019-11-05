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

ProductSchema.virtual('img_url').get(function(){
    return `http://localhost:3333/files/${this.img}`
})

module.exports = mongoose.model("Product",ProductSchema);