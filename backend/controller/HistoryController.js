const History = require('../model/History') 

module.exports = {
    async store(req,res,next){
        const { transData } = req.body
        const preCode = transData.code

        const existHistory = await History.findOne({code: preCode})

        if(existHistory){
            next()
        }
        else{
            const {code, date, status, paymentMethod, grossAmount, discountAmount, intermediationRateAmount, 
                intermediationFeeAmount, netAmount, extraAmount, installmentCount, itemCount, senderName,
                senderEmail, senderPhoneAreaCode, senderPhoneNumber, shippingStreet, shippingNumber,
                shippingComplement, shippingDistrict, shippingCity, shippingState, shippingCountry,
                shippingPostalCode, shippingCost} = transData

            const history = await History.create(
                {code, date, status, paymentMethod, grossAmount, discountAmount, intermediationRateAmount, 
                    intermediationFeeAmount, netAmount, extraAmount, installmentCount, itemCount, senderName,
                    senderEmail, senderPhoneAreaCode, senderPhoneNumber, shippingStreet, shippingNumber,
                    shippingComplement, shippingDistrict, shippingCity, shippingState, shippingCountry,
                    shippingPostalCode, shippingCost}
            )

            return res.send(history)

        }
    },

    async updateHistory(req,res){
        const { code, status } = req.body

        const history = await History.findOneAndUpdate({code},{$set: {status}},
            {new: true},(err,doc) =>{
                if(err){
                    return res.send(err)
                }
                return res.send(doc)
            }
        )
    }
}