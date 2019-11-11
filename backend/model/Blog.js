const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    capa:{
        unique: true,
        require: true,
        type: String
    },
    titulo:{
        unique: true,
        required: true,
        type: String
    },
    data:{
        require: true,
        type: Date
    },
    texto:{
        required: true,
        type: String
    },
    preExibição:{
        required: true,
        type: String
    },
    local:{
        required: true,
        unique: true,
        type: String
    }
    },{
    timestamps: true,
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})


BlogSchema.virtual('capa_url').get(function(){
    return `http://localhost:3333/files/${this.capa}`
})

module.exports = mongoose.model("Blog",BlogSchema);
