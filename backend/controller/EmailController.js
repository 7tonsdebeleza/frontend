const User = require("../model/User");
const SendGridMail = require("@sendgrid/mail")
const jwt = require('jsonwebtoken');

const key = process.env.SECRET_KEY
const mailConfig = process.env.MAIL_KEY;
const urlEmail = process.env.REDIRECT_EMAIL_URL;
const urlSenha = process.env.REDIRECT_PASSWORD_URL;

SendGridMail.setApiKey(mailConfig);

module.exports = {
    async ConfirmarEmail(req, res) {
        const { email } = req.body

        const user = await User.findOne({ email });

        const msg = {
            to: `${email}`,
            from: 'pvocufc@gmail.com',
            subject: 'Verificação de email',
            text: 'Clique para verificar',
            html: `<a href="${urlEmail + user._id}">Clique para confirmar seu email</a>`,
        };
        try {
            const x = await SendGridMail.send(msg);

            return res.json({ 'status': 200 })
        } catch (e) {
            console.log(`[Error]: ${e}`)

            if (e.response) {
                console.log(`[Error response]: ${e.response}`)
            }

            return res.send(e)
        }
    },

    async TrocarSenha(req, res) {
        const { email, newPass } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.send("Email não cadastrado!");

        const datas = {
            id: user._id,
            senhaAntiga: user.password,
            newPass
        };

        // Gerando um token que se expira em 30 min
        jwt.sign(datas, key, { expiresIn: 1800 }, async function(err, token) {
            if (err) {
                return res.status(500).send({ error: err });
            }

            const msg = {
                to: `${email}`,
                from: 'pvocufc@gmail.com',
                subject: 'Trocar senha',
                text: 'Clique para trocar sua senha',
                html: `Você solicitou a altaração de sua senha no 7 Tons de Beleza? <a href="${urlSenha + token}">Clique aqui para efetuar esta ação</a> (este link é válido por 30 minutos), se não fez esse pedido, ignore esta mensagem.`,
            };

            try {
                const x = await SendGridMail.send(msg);

                return res.json({ 'status': 200 })

            } catch (e) {
                console.log(`[Error]: ${e}`)

                if (e.response) {
                    console.log(`[Error response]: ${e.response}`)
                }

                return res.status(500).send(e);
            }
        })

    }
}