const mongoose = require('mongoose');

const Estoque = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId, ref:"Produto"
    }]

});

module.exports = mongoose.model("Estoque",Estoque);