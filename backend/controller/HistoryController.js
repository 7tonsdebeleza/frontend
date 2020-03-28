const History = require('../model/History') 

module.exports = {
    async store(req,res,next){
        const { transData, items } = req.body
        const preCode = transData.code

        console.log('create');
        const existHistory = await History.findOne({code: preCode})

        if(existHistory){
            next()
        } else {
            const {code, date, reference, status, paymentMethod, grossAmount, discountAmount, intermediationRateAmount, 
                intermediationFeeAmount, netAmount, extraAmount, installmentCount, itemCount, senderName,
                senderEmail, senderPhoneAreaCode, senderPhoneNumber, shippingStreet, shippingNumber,
                shippingComplement, shippingDistrict, shippingCity, shippingState, shippingCountry,
                shippingPostalCode, shippingCost } = transData

            const history = await History.create(
                {code, date, reference, status, paymentMethod, grossAmount, discountAmount, intermediationRateAmount, 
                    intermediationFeeAmount, netAmount, extraAmount, installmentCount, itemCount, senderName,
                    senderEmail, senderPhoneAreaCode, senderPhoneNumber, shippingStreet, shippingNumber,
                    shippingComplement, shippingDistrict, shippingCity, shippingState, shippingCountry,
                    shippingPostalCode, shippingCost, items}
            )

            // Quando status estiver em 3 (paga), o estoque do banco de dados deve ser atualizado com a compra
            if(status === 3){
                // Indicando para next que a atualização do estoque pode ser feita sem necessidade de update
                req.headers['X-JUMP-NEXT'] = true;
                // Passando updateHistory (que vai ser pulado)
                next();
            } else {
                return res.send(history)
            }
        }
    },

    async updateHistory(req, res, next){
        const { code, status } = req.body.transData;
        const jumpNext = req.headers['X-JUMP-NEXT'];

        console.log('update');
        console.log(jumpNext);
        // Caso seja necessário pular diretamente para atualização de estoque (primeiro status é pago (3))
        if(jumpNext){
            // Passando diretamente para atualização de estoque
            next();
        } else {
            await History.findOneAndUpdate({code},{$set: {status}},
                {new: true},(err,doc) =>{
                    if(err){
                        return res.send(err)
                    }

                    // Caso compra tenha atualizado seu status para paga (3), o estoque deve ser atualizado
                    if(status == 3){
                      next();  
                    } else return res.send(doc)
                }
            )
        }

        
    },

    async findHistoryById(req,res){
        const { id } = req.params

        const historyByPerson = await History.find({reference: id});

        return res.json(historyByPerson)
    },


    async findAllHistory(req,res){
        const { page } = req.params

        const allHistory = await History.find().skip(4*(page - 1)).limit(4)
        
        return res.json(allHistory)
    }
}