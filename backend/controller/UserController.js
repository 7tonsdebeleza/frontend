const User = require("../model/User");
const Produto = require('../model/Product');

const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const data = require('../data/data');
const jwt = require('jsonwebtoken');

process.env.SECRET_KEY = 'secret7tons';

module.exports = {

    async Store(req, res, next) {
        const { nome, sobrenome, email, password, phoneAreaCode = " ", phoneNumber = " ", cep = " ",
            type = " ",
            street = " ",
            number = " ",
            complement = " ",
            district = " ",
            postalCode = " ",
            city = " ",
            state = " ",
            country = " " } = req.body

        const emailConfirmado = false
        const senhaAntiga = " "

        let user = await User.findOne({ email })

        if (!user) {

            const frete = {
                type,
                street,
                number,
                complement,
                district,
                postalCode,
                city,
                state,
                country
            }

            try {

                user = await User.create({
                    nome,
                    sobrenome,
                    email,
                    password: bcrypt.hashSync(password, data.salt),
                    phoneAreaCode,
                    phoneNumber,
                    cep,
                    frete,
                    emailConfirmado,
                    senhaAntiga,
                    carrinho: []
                });

                // configurando body para requisição de rota de confirmação de email
                req.body.id = user._id;
                next();
            } catch (e) {
                return res.status(500).json({ error: e, message: 'falha ao tentar criar usuário' })
            }

        } else return res.status(409).json({ message: 'usuário já está cadastrado' });
    },

    async updateName(req, res) {
        const { email, name } = req.body;

        await User.findOneAndUpdate({ email }, { $set: { nome: name } },
            { new: true }, (err, doc) => {
                if (err) {
                    return res.send(err)
                }

                return res.json(doc)
            })

    },

    async updateUsername(req, res) {

        const { email, surname } = req.body;

        await User.findOneAndUpdate({ email }, { $set: { sobrenome: surname } },
            { new: true }, (err, doc) => {
                if (err) {
                    return res.send(err)
                }

                return res.json(doc)
            })
    },

    async insertPhoneAreaCode(req, res) {
        const { email, phoneAreaCode } = req.body;

        const user = User.findOne({ email })

        if (phoneAreaCode != null && phoneAreaCode != user.phoneAreaCode) {

            await User.findOneAndUpdate({ email }, { $set: { phoneAreaCode: phoneAreaCode } },
                { new: true }, (err, doc) => {
                    if (err) {
                        return res.send(err)
                    }

                    return res.json(doc)
                })
        }
        return res.send(user)
    },

    async insertPhoneNumber(req, res) {
        const { email, phoneNumber } = req.body;

        const user = User.findOne({ email })

        if (phoneNumber != null && phoneNumber != user.phoneNumber) {
            await User.findOneAndUpdate({ email }, { $set: { phoneNumber: phoneNumber } },
                { new: true }, (err, doc) => {
                    if (err) {
                        return res.send(err)
                    }

                    return res.json(doc)
                })
        }

        return res.send(user)
    },

    async insertCep(req, res) {
        const { email, cep } = req.body;

        const user = User.findOne({ email })

        if (cep != null && cep != user.cep) {
            const user = await User.findOneAndUpdate({ email }, { $set: { cep: cep } },
                { new: true }, (err, doc) => {
                    if (err) {
                        return res.send(err)
                    }

                    return res.json(doc)
                })
        }

        return res.send(user)
    },

    async updatePassword(req, res) {

        const { token } = req.params;

        jwt.verify(token, process.env.SECRET_KEY, async function (err, decode) {
            if (err) {
                //Caso em que token se expirou ou houve algum erro interno
                if (err.name === 'TokenExpiredError')
                    return res.send('Este pedido expirou... Retorne ao site da 7 Tons e tente recuperar sua senha novamente!');

                console.log(err);
                return res.send('Erro inesperado... Tente novamente mais tarde!');
            }

            await User.findOneAndUpdate({
                _id: decode.id
            },
                { $set: { password: bcrypt.hashSync(decode.newPass, data.salt), senhaAntiga: decode.senhaAntiga } },
                { new: true }, (err, doc) => {
                    if (err) {
                        return res.send('Erro inesperado... Tente novamente mais tarde!');
                    }

                    return res.send('Senha atualizada com sucesso! Retorne ao site da 7 Tons e realize login com sua nova senha!');
                })

        })


        // const { id, newPass } = req.body;

        // const user = await User.findOne({ _id: id })

        // if (!user) return res.send("Email não cadastrado!")

        // await User.findOneAndUpdate({ _id: id }, { $set: { password: bcrypt.hashSync(newPass, data.salt), senhaAntiga: user.password } },
        //     { new: true }, (err, doc) => {
        //         if (err) {
        //             return res.send(err)
        //         }

        //         return res.json(doc)
        //     })
    },
    async resetPassword(req, res) {
        const { id } = req.params;

        const user = await User.findOne({ _id: id })

        if (!user) return res.send("Email não cadastrado!")

        await User.findOneAndUpdate({ _id: id }, { $set: { password: user.senhaAntiga, senhaAntiga: " " } },
            { new: true }, (err, doc) => {
                if (err) {
                    return res.send(err)
                }

                return res.json(doc)
            })
    },
    async updateEmail(req, res) {

        const { email, newEmail } = req.body;

        const user = await User.findOneAndUpdate({ email }, { $set: { email: newEmail } },
            { new: true }, (err, doc) => {
                if (err) {
                    return res.send(err)
                }

                return res.json(doc)
            })

    },

    async adicionarCarrinho(req, res) {

        //Função que verifica a existencia do item no carrinho
        //Caso existe incrementa a quantidade
        //Caso contrario, apenas adiciona no carrinho
        function adicionaNoCarrinho(carrinho, id, quantidade) {
            let itemNoCarrinho = false

            let temp = carrinho.map(function (arrayItem) {
                if (arrayItem[0] == id) {
                    arrayItem[1] = arrayItem[1] + quantidade
                    itemNoCarrinho = true
                }
            })

            if (itemNoCarrinho == true) {
                return carrinho
            }

            carrinho.push([id, quantidade])
            return carrinho
        }

        try {

            const { email, titulo } = req.body

            //Encontra o usuario e o produto
            const usuario = await User.findOne({ email }, (err, data_user) => {
                Produto.findOne({ titulo }, (err, data_produto) => {

                    //Armazena as informações temporariamente
                    //para que seja enviado para a função adicionar_carrinho
                    let id = data_produto._id
                    id = id.toString()
                    let quantidade = req.body.quantidade

                    let carrinho_antigo = [...data_user.carrinho]
                    let novo_carrinho = adicionaNoCarrinho(carrinho_antigo, id, quantidade)

                    //Atualiza o carrinho no banco de dados
                    User.findOneAndUpdate({ email: req.body.email }, { $set: { carrinho: novo_carrinho } },
                        { new: true }, (err, doc) => {
                            if (err) {
                                return res.send(err)
                            }

                            return res.json(doc)
                        })
                })
            })


        } catch (error) {
            return res.send(error)
        }
    },

    async removerCarrinho(req, res) {

        function removerDoCarrinho(lista, elemento) {
            let remover
            let index
            lista.map(function (posicao) {
                if (posicao[0] == elemento) {
                    remover = posicao
                }
                index = lista.indexOf(remover)
            })
            if (index != -1) {
                lista.splice(index, 1)
            }
            return lista
        }

        try {

            const { email, titulo } = req.body

            //Encontra o usuario e o produto
            const usuario = await User.findOne({ email }, (err, data_user) => {
                Produto.findOne({ titulo }, (err, data_produto) => {

                    //Armazena as informações temporariamente
                    //para que seja enviado para a função remover_carrinho
                    let id = data_produto._id
                    id = id.toString()

                    let carrinho_antigo = [...data_user.carrinho]
                    let novo_carrinho = removerDoCarrinho(carrinho_antigo, id)

                    //Atualiza o carrinho no banco de dados
                    User.findOneAndUpdate({ email: req.body.email }, { $set: { carrinho: novo_carrinho } },
                        { new: true }, (err, doc) => {
                            if (err) {
                                return res.send(err)
                            }

                            return res.json(doc)
                        })
                })
            })

        } catch (err) {
            return res.send(err)
        }
    },

    async getCarrinho(req, res) {

        async function getFullInfo(id_array, email) {
            //Desestrutura carrinho
            const { carrinho } = id_array
            let status = -1

            //Cria array apenas com IDs
            const id_carrinho = carrinho.map(item => item[0])

            //Devolve lista de produtos do banco pelo array
            const FullInfo = await Produto.find({ _id: { $in: id_carrinho } })

            //Se nenhum item tiver sido previamente deletado retorna FullInfo
            if (FullInfo.length == id_carrinho.length) {
                status = 0
                return { FullInfo, status }
            }


            //Se algum item tiver sido deletado, recriar array de carrinho
            status = 1
            const [fixedCarrinho] = FullInfo.map((item) => {
                const temp = []

                carrinho.map((itemCarrinho) => {
                    if (itemCarrinho[0] == item._id) {
                        temp.push(itemCarrinho)
                    }
                })

                return temp
            })

            await User.findOneAndUpdate({ email }, { $set: { carrinho: fixedCarrinho } })

            status = 1
            return { FullInfo, status }
        }

        const { email } = req.body

        //Não deve atualizar
        const userInfo = await User.findOne({ email })

        const { FullInfo, status } = await getFullInfo(userInfo, email);

        return res.json({ FullInfo, status })
    },

    async Login(req, res) {
        const { email, senha } = req.body

        let response = await User.findOne({ email });

        if (!response) {
            return res.send("Email inválido!")
        }

        const senha_criptografada = bcrypt.compareSync(senha, response.password)

        if (senha_criptografada) {
            return res.send(response)
        }

        return res.send("Senha inválida!");
    },

    //Função retorna um token para autenicação
    async Sign(req, res) {
        const { email, senha } = req.body;
        const token = req.headers.authorization

        User.where({ email: email }).findOne((e, data) => {
            //Casos de erro ao procurar usuário
            if (e) return res.send({ error: e });

            if (!data) return res.send("Email inválido!");

            if (token) return res.send({ token, user: data })

            const senha_criptografada = bcrypt.compareSync(senha, data.password)

            if (!senha_criptografada) {
                return res.send("Senha inválida!")
            }

            if (!data.emailConfirmado) {
                return res.send('Confirme seu email!');
            }

            //Gerando token com dados do usuário encontrado
            jwt.sign(data.toJSON(), process.env.SECRET_KEY, { expiresIn: '7d' }, (err, token) => {
                if (err) {
                    console.log(err)
                    return res.send({ error: "Erro inesperado..." })
                }
                return res.send({ token, user: data })
            })

        });

    },

    //Função para autenticação de tokens
    Auth(req, res, next) {

        const token = req.headers.authorization

        //Decodificando token
        jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
            if (err) {
                //Caso em que token se expirou ou houve algum erro interno
                return res.send({ error: err })
            }

            //Buscando dados do usuário
            User.where({ email: decode.email }).findOne((e, data) => {
                if (e) return res.status(401).send({ error: e })
                else if (!data) return res.send("Usuário não encontrado")
                else if (!data.emailConfirmado) {
                    return res.send('Confirme seu email!');
                }
                else {
                    req.body.email = data.email;
                    req.body.senha = data.password;
                    next();
                }
            })

        })
    },

    async ConfirmarEmail(req, res) {
        const { id } = req.params

        const user = await User.findOne({ _id: id })

        if (user.emailConfirmado === true) {
            return res.json({ "Error": 'Email confirmado' })
        }

        await User.findOneAndUpdate({ _id: id }, { $set: { emailConfirmado: true } },
            { new: true }, (err, doc) => {
                if (err) {
                    return res.send(err)
                }

                return res.send('Email confirmado com sucesso!')
            })
    }
}
