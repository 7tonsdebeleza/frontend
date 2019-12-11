const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const routes = express.Router();
const upload = multer(uploadConfig)


const UserController = require("./controller/UserController");
const ProductController = require("./controller/ProductController");

//PELO AMOR DE DEUS APAGAR
const AdminController = require("./controller/AdminController");
routes.post('/criaradmin',AdminController.Store);
routes.post('/loginadmin',AdminController.Find);
routes.post('/Signadmin',AdminController.Find);

//SERIO VEY APAGA

//Criar usuarios
routes.post('/criarusuario',UserController.Store);
//Adicionar no carrinho
routes.post('/adicionarcarrinho',UserController.adicionarCarrinho);
//Remover do carrinho
routes.post('/removercarrinho',UserController.removerCarrinho);
//Fazer login
routes.post('/login',UserController.Login);
//Fazer login com padrão jwt
routes.post('/Sign',UserController.Sign);
//Fazer autheticação de token jwt
routes.post('/Auth',UserController.Auth);

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

/*
const UsersController = require('./controllers/users/UsersController');
const UserController = require('./controllers/users/UserController');
const EstoqueController = require('./controllers/products/EstoqueController');
const ProductController = require('./controllers/products/ProductController');

//Não mexer nem alterar, executada unica vez para criar a box de usuarios
//routes.post('/createusers',UsersController.store);

//Não mexer nem alterar, executado unica vez para criar a box de produtos
//routes.post('/criarestoque',EstoqueController.store);

//Mostrar usuarios
routes.get('/mostrarusuarios',UsersController.show);
//Adiciona no carrinho
routes.post('/inserircarrinho',UserController.adicionaCarrinho);
//Remove no carrinho
routes.post('/removercarrinho',UserController.removerCarrinho);
//Logar
routes.get('/logar',UserController.logar);

//Comprar produto
routes.get('/comprarproduto',ProductController.comprar);

*/

routes.get('/teste',(req,res)=>{
    return res.send({oi:'oi'});
});

module.exports = routes;