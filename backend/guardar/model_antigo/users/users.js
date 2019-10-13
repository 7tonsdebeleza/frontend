const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    usuario: [{
        type: mongoose.Schema.Types.ObjectId, ref:"User"
    }]

});

module.exports = mongoose.model("Users",Users);