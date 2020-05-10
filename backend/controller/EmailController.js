
const { mailConfig } = require('../globalconfig')
const User = require("../model/User");

const SendGridMail = require("@sendgrid/mail")
const jwt = require('jsonwebtoken');

SendGridMail.setApiKey(mailConfig.key);

// ##### Ajeitar isso depois!!!!
process.env.SECRET_KEY = 'secret7tons';


module.exports = {
    async ConfirmarEmail(req, res) {
        const { id, email } = req.body

        const msg = {
            to: `${email}`,
            from: 'pvocufc@gmail.com',
            subject: 'Verificação de email',
            text: 'Clique para verificar',
            html: `<a href="http://localhost:3333/confirmaremail/${id}">Clique para confirmar seu email</a>`,
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
        jwt.sign(datas, process.env.SECRET_KEY, { expiresIn: 1800 }, async function(err, token) {
            if (err) {
                return res.status(500).send({ error: err });
            }

            const msg = {
                to: `${email}`,
                from: 'pvocufc@gmail.com',
                subject: 'Trocar senha',
                text: 'Clique para trocar sua senha',
                //html: `<a href="http://localhost:3333/trocarsenha/${token}">Clique para trocar a sua senha</a>, se não foi você, <a href="http://localhost:3333/revertersenha/:id">Clique aqui</a> e reverta a troca de senha`,
                html: `Você solicitou a altaração de sua senha no 7 Tons de Beleza? <a href="http://localhost:3333/trocarsenha/${token}">Clique aqui para efetuar esta ação</a> (este link é válido por 30 minutos), se não fez esse pedido, ignore esta mensagem.`,
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