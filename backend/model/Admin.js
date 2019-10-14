const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    nome:{
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
    }
    },{
        timestamps: true,
        //toJSON: {virtuals: true},
        //toObject: {virtuals: true}
    }
);

module.exports = mongoose.model("Admin",AdminSchema)