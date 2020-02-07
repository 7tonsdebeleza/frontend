const mongoose = require('mongoose')

const HistorySchema = new mongoose.Schema({
    code:{
        require: true,
        type: String
    },
    date: {
        require: true,
        type: String
    },
    reference: {
        require: true,
        type: String
    },
    status:  {
        require: true,
        type: String
    },
    paymentMethod:  {
        require: true,
        type: String
    },
    grossAmount:  {
        require: true,
        type: String
    },
    discountAmount:  {
        require: true,
        type: String
    },
    
    intermediationRateAmount: {
        require: true,
        type: String
    },
    intermediationFeeAmount:  {
        require: true,
        type: String
    },
    
    netAmount:  {
        require: true,
        type: String
    },
    extraAmount:  {
        require: true,
        type: String
    },
    installmentCount:  {
        require: true,
        type: String
    },
    itemCount:  {
        require: true,
        type: String
    },
    
    senderName:  {
        require: true,
        type: String
    },
    senderEmail:  {
        require: true,
        type: String
    },
    
    senderPhoneAreaCode:  {
        require: true,
        type: String
    },
    senderPhoneNumber:  {
        require: true,
        type: String
    },
    
    shippingStreet:  {
        require: true,
        type: String
    },
    shippingNumber:  {
        require: true,
        type: String
    },
    shippingComplement:  {
        require: true,
        type: String
    },
    shippingDistrict:  {
        require: true,
        type: String
    },
    shippingCity:  {
        require: true,
        type: String
    },
    shippingState:  {
        require: true,
        type: String
    },
    shippingCountry:  {
        require: true,
        type: String
    },
    shippingPostalCode:  {
        require: true,
        type: String
    },
    shippingCost:  {
        require: true,
        type: String
    },
    
})

module.exports = mongoose.model('History',HistorySchema);

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