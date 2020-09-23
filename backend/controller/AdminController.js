const Admin = require("../model/Admin")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('../config/envConfig');

//const data = require('../data/data')
const key = process.env.SECRET_KEY;
const salt = process.env.ENCRYPT_SALT;

module.exports = {
    async Store(req, res) {
        const { nome, email, password } = req.body

        let admin = await Admin.findOne({ email, password })

        if (!admin) {
            admin = await Admin.create({
                nome,
                email,
                password: bcrypt.hashSync(password, salt)
            })
        }

        return res.json(admin)
    },

    async Find(req, res) {
        const { email, senha } = req.body;

        let response = await Admin.findOne({ email });

        if (!response) {
            return res.send("Email inválido!")
        }

        if (response.password == senha) {
            return res.send(response);
        }

        return res.send("Senha inválida!");
    },

    //Função retorna um token para autenicação
    async Sign(req, res) {
        const { email, senha } = req.body;
        
        const token = req.headers['authorization'];

        Admin.where({ email: email }).findOne((e, data) => {
            //Casos de erro ao procurar usuário
            if (e) return res.send({ error: e });
            if (!data) return res.send("Email inválido!")
            
            // Caso de reautenticação, retornando dados sem necessidade de login e senha
            if(token) return res.send({ token: token, user: data });

            const senha_criptografada =  bcrypt.compareSync(senha,data.password)

            if(!senha_criptografada){
            return res.send("Senha inválida!")
            }

            //Gerando token com dados do usuário encontrado
            jwt.sign(data.toJSON(), key, { expiresIn: '1d' }, (err, token) => {
                if (err) {
                    console.log(err)
                    return res.send({ error: "Erro inesperado..." })
                }
                return res.send({ token: token, user: data });
            })

        });

    },

    //Função para autenticação de tokens
    Auth(req, res, next) {
        const token = req.headers['authorization'];

        //Decodificando token
        jwt.verify(token, key, (err, decode) => {
            if (err) {
                //Caso em que token se expirou ou houve algum erro interno
                return res.send({ error: err })
            }

            //Buscando dados do usuário
            Admin.where({ email: decode.email }).findOne((e, data) => {
                if (e) {
                    console.log('erro ao buscar usuário');
                    return res.status(401).send({ error: e });

                } else if (!data) {
                    return res.send("Usuário não encontrado");
                } else {
                    req.body.email = data.email;
                    req.body.senha = data.password;
                    next();
                }
            })

        })
    },

}