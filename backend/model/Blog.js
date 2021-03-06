const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    titulo:{
        unique: true,
        require: true,
        type: String
    },
    capa:{
        required: true,
        type: String,
    },
    data:{
        required: true,
        type: Date
    },
    preExibicao:{
        required: true,
        type: String
    },
    texto:{
        required: true,
        type: String
    }
    },
    {      
    timestamps: true,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})

BlogSchema.virtual('capa_url').get(function(){
    return `http://localhost:3333/files/${this.capa}`
})

module.exports = mongoose.model("Blog",BlogSchema);
