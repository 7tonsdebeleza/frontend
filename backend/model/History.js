const mongoose = require('mongoose')

const HistorySchema = new mongoose.Schema({
    userEmail:{
        require: true,
        type: String
    },
    productName:{
        required: true,
        type: String
    },
    quantity:{
        required: true,
        type: Number
    },
    data:{
        required: true,
        type: Data
    },
    address:{
        required: true,
        type: String
    },
    status:{
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model('HistorySchema',HistorySchema);