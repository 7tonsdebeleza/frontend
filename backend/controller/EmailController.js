
const { mailConfig } = require('../globalconfig')

const SendGridMail = require("@sendgrid/mail")

SendGridMail.setApiKey(mailConfig.key)

module.exports={
    async ConfirmarEmail(req,res){
        const { id, email } = req.body

        const msg = {
            to: `${email}`,
            from: 'pvocufc@gmail.com',
            subject: 'Verificação de email',
            text: 'Clique para verificar',
            html: `<a href="http://localhost:3333/confirmaremail/${id}">Clique para confirmar seu email</a>`,
          };
        try{
            const x = await SendGridMail.send(msg);
            
            return res.json({'status': 200})
        }catch(e){
            console.log(`[Error]: ${e}`)

            if(e.response){
                console.log(`[Error response]: ${e.response}`)
            }

            return res.send(e)
        }
    },

    async TrocarSenha(req,res){
        const { id, email } = req.body

        const msg = {
            to: `${email}`,
            from: 'pvocufc@gmail.com',
            subject: 'Trocar senha',
            text: 'Clique para trocar sua senha',
            html: `<a href="http://localhost:3333/trocarsenha/${id}">Clique para trocar a sua senha</a>, se não foi você, <a href="http://localhost:3333/revertersenha/:id">Clique aqui</a> e reverta a troca de senha`,
          };
        try{
            const x = await SendGridMail.send(msg);
            
            return res.json({'status': 200})
        }catch(e){
            console.log(`[Error]: ${e}`)

            if(e.response){
                console.log(`[Error response]: ${e.response}`)
            }

            return res.send(e)
        }
        
    }
}