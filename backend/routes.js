const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const routes = express.Router();
const upload = multer(uploadConfig)


const UserController = require("./controller/UserController");
const ProductController = require("./controller/ProductController");
const FreteController = require("./controller/FreteController");
const CorreiosController = require('./controller/CorreiosController');
const PagSeguroController = require('./controller/PagSeguroController');
const HistoryController = require('./controller/HistoryController')
const EmailController = require('./controller/EmailController');

//Confirmar Email
routes.post('/confirmaremail', EmailController.ConfirmarEmail)
routes.get('/confirmaremail/:id', UserController.ConfirmarEmail)


//PELO AMOR DE DEUS APAGAR
const AdminController = require("./controller/AdminController");
routes.post('/criaradmin',AdminController.Store);
routes.post('/loginadmin',AdminController.Find);

routes.post('/Signadmin',AdminController.Sign);
routes.post('/Authadmin',AdminController.Auth);

//SERIO VEY APAGA

//Usuarios
//Criar usuarios
routes.post('/criarusuario', UserController.Store);
//Adicionar no carrinho
routes.post('/adicionarcarrinho', UserController.adicionarCarrinho);
//Remover do carrinho
routes.post('/removercarrinho', UserController.removerCarrinho);
//Pegar produtos no carrinho
routes.post('/pegarcarrinho', UserController.getCarrinho)
//Fazer login
routes.post('/login',UserController.Login);
//Fazer login com padrão jwt
routes.post('/Sign',UserController.Sign);
//Fazer autheticação de token jwt
routes.post('/Auth', UserController.Auth);
//Atualizar nome
routes.post('/updateName', UserController.updateName);
//Atualizar sobrenome
routes.post('/updateUsername', UserController.updateUsername);
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


//Propriedade Frete de Usuarios
//Atualizar tipo
routes.post('/updateType',FreteController.updateType)
//Atualizar rua
routes.post('/updateStreet',FreteController.updateStreet)
//Atualizar numero
routes.post('/updateNumber',FreteController.updateNumber)
//Atualizar complemento
routes.post('/updateComplement',FreteController.updateComplement)
//Atualizar distrito
routes.post('/updateDistrict',FreteController.updateDistrict)
//Atualizar codigo postal
routes.post('/updatePostalCode',FreteController.updatePostalCode)
//Atualizar cidade
routes.post('/updateCity',FreteController.updateCity);
//Atualizar estado
routes.post('/updateState',FreteController.updateState)
//Atualizar país
routes.post('/updateCountry',FreteController.updateCountry)

//Produtos
//Criar produto
routes.post('/criarproduto',upload.single('img'),ProductController.Store);
//Mostrar produtos
routes.get('/mostrartodosprodutos',ProductController.Show);
//Mostrar produtos pelo tipo
routes.get('/mostrarprodutoportipo',ProductController.ShowTipo);
//Mostrar produtos em novidades
routes.get('/mostrarprodutonovidade', ProductController.ShowByNewer);
//Mostrar produtos em promocao
routes.get('/mostrarprodutopromocao', ProductController.ShowByPromotion);
//Remover produto pelo ID
routes.post('/removerproduto',ProductController.Destroy);
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
routes.post('/atualizarpeso',ProductController.UpdatePeso)
//Atualizar formato
routes.post('/atualizarformato',ProductController.UpdateFormato)
//Atualizar comprimento
routes.post('/atualizarcomprimento',ProductController.UpdateComprimento)
//Atualizar altura
routes.post('/atualizaraltura',ProductController.UpdateAltura)
//Atualizar largura
routes.post('/atualizarlargura',ProductController.UpdateLargura)
//Atualizar diametro
routes.post('/atualizardiametro',ProductController.UpdateDiametro)
//Atualizar novidade
routes.post('/atualizarnovidade',ProductController.UpdateNovidade)
//Atualizar promocao
routes.post('/atualizarpromocao', ProductController.UpdatePromocao)

//Histórico
//Criar um ítem de histórico
routes.post('/criarHistorico',HistoryController.store)
//Obter historico por ID
routes.get('/getHistorybyID/:id', HistoryController.findHistoryById)
//Obter todos os historicos
routes.get('/getAllHistory/:page', HistoryController.findAllHistory)

//Correio
//Receber CEP
routes.get('/getAdress/:cep',CorreiosController.AdressGeter)
//Calcular preço do frete
routes.post('/getShippingPrice',CorreiosController.getShippingPrice)

//PAGSEGURO
//Recebe status do PagSeguro
routes.post('/pagseguro/status', [PagSeguroController.receiveStatus, HistoryController.store, HistoryController.updateHistory, ProductController.Comprar]);
//Fazer Checkout
routes.post('/pagseguro/checkout',PagSeguroController.sendCheckout);

routes.get('/teste',(req,res)=>{
    return res.send({oi:'oi'});
});

module.exports = routes;