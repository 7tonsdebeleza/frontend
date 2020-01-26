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

/*
code: data.transaction.code._text,
        date: data.transaction.date._text,
        reference: data.transaction.reference._text,
        status: data.transaction.status._text,

       paymentMethod: data.transaction.paymentMethod.type._text,
       grossAmount: data.transaction.grossAmount._text,
       discountAmount: data.transaction.discountAmount._text,
       intermediationRateAmount: data.transaction.creditorFees.intermediationRateAmount._text,
       intermediationFeeAmount: data.transaction.creditorFees.intermediationFeeAmount._text,
       netAmount: data.transaction.netAmount._text,
       extraAmount: data.transaction.extraAmount._text,
       installmentCount: data.transaction.installmentCount._text,
       itemCount: data.transaction.itemCount._text,
       senderName: data.transaction.sender.name._text,
       senderEmail: data.transaction.sender.email._text,
       senderPhoneAreaCode: data.transaction.sender.phone.areaCode._text,
       senderPhoneNumber: data.transaction.sender.phone.number._text,
       shippingStreet: data.transaction.shipping.address.street._text,
       shippingNumber: data.transaction.shipping.address.number._text,
       shippingComplement: data.transaction.shipping.address.complement._text,
       shippingDistrict: data.transaction.shipping.address.district._text,
       shippingCity: data.transaction.shipping.address.city._text,
       shippingState: data.transaction.shipping.address.state._text,
       shippingCountry: data.transaction.shipping.address.country._text,
       shippingPostalCode: data.transaction.shipping.address.postalCode._text,
       shippingCost: data.transaction.shipping.cost._text,
*/