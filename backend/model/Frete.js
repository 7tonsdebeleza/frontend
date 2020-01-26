const mongoose = require('mongoose')

const FreteSchema = new mongoose.Schema({
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
    }
})

module.exports = FreteSchema;