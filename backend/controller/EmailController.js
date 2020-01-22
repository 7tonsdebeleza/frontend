const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'pvocufc@gmail.com',
        pass: 'Pvoc@87835018'
    }
})

const mailOption = {
    from: 'pvocufc@gmail.com',
    to: ['hybraimaraujo@usp.br'],
    subject: 'Envio automatico',
    html: '<p>Click <a href="http://localhost:3000">here</a> to reset your password</p>'

}

module.exports={
    async teste(req,res){
        transporter.sendMail(mailOption, function(err, info){
            if(err){
                return res.json(err)
            }
            else{
                res.json(info.response)
            }
        })
    }
}