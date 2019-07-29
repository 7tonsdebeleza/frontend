const express = require('express');
const routes = express.Router();

const UsersController = require('./controllers/users/UsersController');
const UserController = require('./controllers/users/UserController');
const EstoqueController = require('./controllers/products/EstoqueController');
const ProductController = require('./controllers/products/ProductController');

//Não mexer nem alterar, executada unica vez para criar a box de usuarios
//routes.post('/createusers',UsersController.store);

//Não mexer nem alterar, executado unica vez para criar a box de produtos
//routes.post('/criarestoque',EstoqueController.store);

//Criar usuarios
routes.post('/criarusuario',UserController.store);
//Mostrar usuarios
routes.get('/mostrarusuarios',UsersController.show);
//Adiciona no carrinho
routes.post('/inserircarrinho',UserController.adicionaCarrinho);
//Remove no carrinho
routes.post('/removercarrinho',UserController.removerCarrinho);
//Logar
routes.get('/logar',UserController.logar);

//Criar produto
routes.post('/criarproduto',ProductController.store);
//Mostrar produtos
routes.get('/mostrarprodutos',ProductController.show);
//Comprar produto
routes.get('/comprarproduto',ProductController.comprar);

//Atualizar nome do produto
routes.post('/atualizarnome',ProductController.atualizarNome);
//Atualizar marca
routes.post('/atualizarmarca',ProductController.atualizarMarca);
//Atualizar preço
routes.post('/atualizarpreco',ProductController.atualizarPreco);
//Atualizar estoque
routes.post('/atualizarestoque',ProductController.atualizarEstoque);
//Atualizar descrição
routes.post('/atualizardescricao',ProductController.atualizarDescricao);

routes.get('/teste',(req,res)=>{
    return res.send('It Works!');
});

module.exports = routes;