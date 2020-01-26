const User = require('../model/User')

module.exports = {
    async updateType(req,res){
        const {email, type} = req.body;

        const user = await User.findOneAndUpdate({email},{$set: {"frete.type": type}},
            {new:true}, (err,doc)=>{
                if(err){
                    return res.send(err)
                }
                
                return res.json(doc)
        })
    },

    async updateStreet(req,res){
        const {email, street} = req.body;

        const user = await User.findOneAndUpdate({email},{$set: {"frete.street": street}},
            {new:true}, (err,doc)=>{
                if(err){
                    return res.send(err)
                }
                
                return res.json(doc)
        })
    },

    async updateNumber(req,res){
        const {email, number} = req.body;

        const user = await User.findOneAndUpdate({email},{$set: {"frete.number": number}},
            {new:true}, (err,doc)=>{
                if(err){
                    return res.send(err)
                }
                
                return res.json(doc)
        })
    },

    async updateComplement(req,res){
        const {email, complement} = req.body;

        const user = await User.findOneAndUpdate({email},{$set: {"frete.complement": complement}},
            {new:true}, (err,doc)=>{
                if(err){
                    return res.send(err)
                }
                
                return res.json(doc)
        })
    },

    async updateDistrict(req,res){
        const {email, district} = req.body;

        const user = await User.findOneAndUpdate({email},{$set: {"frete.district": district}},
            {new:true}, (err,doc)=>{
                if(err){
                    return res.send(err)
                }
                
                return res.json(doc)
        })
    },

    async updatePostalCode(req,res){
        const {email, postalCode} = req.body;

        const user = await User.findOneAndUpdate({email},{$set: {"frete.postalCode": postalCode}},
            {new:true}, (err,doc)=>{
                if(err){
                    return res.send(err)
                }
                
                return res.json(doc)
        })
    },
    
    async updateCity(req,res){
        const {email, city} = req.body;
        
        const user = await User.findOneAndUpdate({email},{$set: {"frete.city": city}},
            {new:true}, (err,doc)=>{
                if(err){
                    return res.send(err)
                }
                
                return res.json(doc)
        })

    },

    async updateState(req,res){
        const {email, state} = req.body;

        const user = await User.findOneAndUpdate({email},{$set: {"frete.state": state}},
            {new:true}, (err,doc)=>{
                if(err){
                    return res.send(err)
                }
                
                return res.json(doc)
        })
    },

    async updateCountry(req,res){
        const {email, country} = req.body;

        const user = await User.findOneAndUpdate({email},{$set: {"frete.country": country}},
            {new:true}, (err,doc)=>{
                if(err){
                    return res.send(err)
                }
                
                return res.json(doc)
        })
    },
}