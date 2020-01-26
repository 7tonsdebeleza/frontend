const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const routes = express.Router();
const upload = multer(uploadConfig)


const UserController = require("./controller/UserController");
const ProductController = require("./controller/ProductController");
const PagSeguroController = require('./controller/PagSeguroController');

/*
const EmailController = require('./controller/EmailController');
routes.get('/emailteste',EmailController.teste)
*/

//PELO AMOR DE DEUS APAGAR
const AdminController = require("./controller/AdminController");
routes.post('/criaradmin',AdminController.Store);
routes.post('/loginadmin',AdminController.Find);

routes.post('/Signadmin',AdminController.Sign);
routes.post('/Authadmin',AdminController.Auth);

//SERIO VEY APAGA

//Criar usuarios
routes.post('/criarusuario', UserController.Store);
//Adicionar no carrinho
routes.post('/adicionarcarrinho', UserController.adicionarCarrinho);
//Remover do carrinho
routes.post('/removercarrinho', UserController.removerCarrinho);
//Fazer login
routes.post('/login',UserController.Login);
//Fazer login com padrão jwt
routes.post('/Sign',UserController.Sign);
//Fazer autheticação de token jwt
routes.post('/Auth', UserController.Auth);
//Atualizar nome
routes.post('/updateName', UserController.updateName);
//Atualizar sobrenome
routes.post('/updateSurname', UserController.updateSurname);
//Atualizar email
routes.post('/updateEmail', UserController.updateEmail);
//Atualizar senha
routes.post('/updatePassword', UserController.updatePassword);
//Atualizar código de área
routes.post('/insertPhoneAreaCode', UserController.insertPhoneAreaCode)
//Atualizar numéro de celular
routes.post('/insertPhoneNumber', UserController.insertPhoneNumber)
//Atualizar CEP
routes.post('/insertCep',UserController.insertCep)

//Criar produto
routes.post('/criarproduto',upload.single('img'),ProductController.Store);
//Mostrar produtos
routes.get('/mostrartodosprodutos',ProductController.Show);
//Mostrar produtos pelo tipo
routes.get('/mostrarprodutoportipo',ProductController.ShowTipo)
//Remover produto pelo ID
routes.post('/removerproduto',ProductController.Destroy)
//Atualizar imagem do prodtuto
routes.post('/atualizarimagem',upload.single('img'),ProductController.UpdateImage);
//Atualizar nome do produto
routes.post('/atualizartitulo',ProductController.UpdateTitle);
//Atualizar marca
routes.post('/atualizarmarca',ProductController.UpdateMarca);
//Atualizar preço
routes.post('/atualizarpreco',ProductController.UpdatePrice);
//Atualizar estoque
routes.post('/atualizarestoque',ProductController.UpdateEstoque);
//Atualizar descrição
routes.post('/atualizardescricao',ProductController.UpdateDescription);
//Atualizar tipoProduto
routes.post('/atualizartipo',ProductController.UpdateType)
//Atualizar peso
//Atualizar formato
//Atualizar comprimento
//Atualizar altura
//Atualizar largura
//Atualizar diametro

//PAGSEGURO
//Recebe status do PagSeguro
routes.post('/pagseguro/status',PagSeguroController.receiveStatus);
//Fazer Checkout
routes.post('/pagseguro/checkout',PagSeguroController.sendCheckout);

routes.get('/teste',(req,res)=>{
    return res.send({oi:'oi'});
});

module.exports = routes;