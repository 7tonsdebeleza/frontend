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
            const {code, date, reference, status, paymentMethod, grossAmount, discountAmount, intermediationRateAmount, 
                intermediationFeeAmount, netAmount, extraAmount, installmentCount, itemCount, senderName,
                senderEmail, senderPhoneAreaCode, senderPhoneNumber, shippingStreet, shippingNumber,
                shippingComplement, shippingDistrict, shippingCity, shippingState, shippingCountry,
                shippingPostalCode, shippingCost} = transData

            const history = await History.create(
                {code, date, reference, status, paymentMethod, grossAmount, discountAmount, intermediationRateAmount, 
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
    },

    async findHistoryById(req,res){
        const { id } = req.params

        const historyByPerson = await History.find({reference: id});

        return res.json(historyByPerson)
    },


    async findAllHistory(req,res){
        const { page } = req.params

        const allHistory = await History.find().skip(1*page).limit(1)
        
        return res.json(allHistory)
    }
}