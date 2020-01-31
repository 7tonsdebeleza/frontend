const Pagseguro = require('pagseguro');


module.exports = {
    async store(req,res){
        console.log('oi')
        const data = req.body.transaction

        const code = data.code._text
        const date = data.date._text
        const reference = data.reference._text
        const status = data.status._text
        const paymentMethod = data.type._text
        const grossAmount = data.grossAmount._text
        const discountAmount = data.discountAmount._text

        res.send(reference)
        
    }
}