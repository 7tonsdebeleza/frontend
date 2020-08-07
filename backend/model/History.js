const mongoose = require('mongoose')

const HistorySchema = new mongoose.Schema({
    code:{
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    reference: {
        required: true,
        type: String
    },
    status:  {
        required: true,
        type: String
    },
    paymentMethod:  {
        required: true,
        type: String
    },
    paymentCode:{
        type: String
    },
    paymentLink:{
        type: String
    },
    grossAmount:  {
        required: true,
        type: String
    },
    discountAmount:  {
        required: true,
        type: String
    },
    
    intermediationRateAmount: {
        required: true,
        type: String
    },
    intermediationFeeAmount:  {
        required: true,
        type: String
    },
    
    netAmount:  {
        required: true,
        type: String
    },
    installmentCount:  {
        required: true,
        type: String
    },
    itemCount:  {
        required: true,
        type: String
    },
    
    senderName:  {
        required: true,
        type: String
    },
    senderEmail:  {
        required: true,
        type: String
    },
    
    senderPhoneAreaCode:  {
        required: true,
        type: String
    },
    senderPhoneNumber:  {
        required: true,
        type: String
    },
    
    shippingStreet:  {
        required: true,
        type: String
    },
    shippingNumber:  {
        required: true,
        type: String
    },
    shippingComplement:  {
        required: false,
        type: String
    },
    shippingDistrict:  {
        required: true,
        type: String
    },
    shippingCity:  {
        required: true,
        type: String
    },
    shippingState:  {
        required: true,
        type: String
    },
    shippingCountry:  {
        required: true,
        type: String
    },
    shippingPostalCode:  {
        required: true,
        type: String
    },
    shippingCost:  {
        required: true,
        type: String
    },
    statusFrete:{
        type: String
    },
    codRastreio:{
        type: String
    },

    items:{
        required: true,
        type: []
    }
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
