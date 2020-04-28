
const { mailConfig } = require('../globalconfig')

const SendGridMail = require("@sendgrid/mail")

SendGridMail.setApiKey(mailConfig.key)

module.exports={
    async teste(req,res){
        const msg = {
            to: 'stormsamurai1@yahoo.com.br',
            from: 'stormsamurai1@yahoo.com.br',
            subject: 'Verificação de email',
            text: 'Clique para verificar',
            html: '<strong>entre na sua sessão da 7tons e confirme o email</strong>',
          };
        try{
            const x = await SendGridMail.send(msg);
            console.log(x)
            return res.send("It Works")
        }catch(e){
            console.log(`[Error]: ${e}`)

            if(e.response){
                console.log(`[Error response]: ${e.response}`)
            }

            return res.send(e)
        }
    }
}