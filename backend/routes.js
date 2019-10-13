const express = require('express');
const routes = express.Router();

const UserController = require("./controller/UserController");
const ProductController = require("./controller/ProductController");

//Criar usuarios
routes.post('/criarusuario',UserController.Store);

//Criar produto
routes.post('/criarproduto',ProductController.Store);
//Mostrar produtos
routes.get('/mostrartodosprodutos',ProductController.Show);
//Mostrar produtos pelo tipo
routes.get('/mostrarprodutoportipo',ProductController.ShowTipo)
//Remover produto pelo ID
routes.post('/removerproduto',ProductController.Destroy)
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
    return res.send('It Works!');
});

module.exports = routes;