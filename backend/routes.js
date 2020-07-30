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
const BlogController = require('./controller/BlogController')

//Confirmar Email
routes.post('/confirmaremail', EmailController.ConfirmarEmail)
routes.get('/confirmaremail/:id', UserController.ConfirmarEmail)
routes.post('/trocarsenha', EmailController.TrocarSenha)
routes.get('/trocarsenha/:token', UserController.updatePassword)
routes.put('/revertersenha/:id', UserController.resetPassword)

//PELO AMOR DE DEUS APAGAR
const AdminController = require("./controller/AdminController");
routes.post('/criaradmin',AdminController.Store);
//routes.post('/loginadmin',AdminController.Find);

routes.post('/Signadmin',AdminController.Sign);
routes.post('/Authadmin',[AdminController.Auth, AdminController.Sign]);

//SERIO VEY APAGA

//Blog
//Criar post
routes.post('/posts',upload.single('img'), [ AdminController.Auth, BlogController.store])
//Listar todos os post
routes.get('/posts',BlogController.index)
//Pegar post por id
routes.get('/posts/:id',BlogController.show)
//Deletar por id
routes.delete('/posts/:id', [AdminController.Auth, BlogController.destroy])
//Atualizar por ID
routes.put('/posts/:id', [AdminController.Auth, BlogController.update])
//Atualizar Imagem por ID
routes.post('/posts/:id',upload.single('img'), [AdminController.Auth, BlogController.UpdateImage])

//Usuarios
//Criar usuarios (depois pede confirmação por email)
routes.post('/criarusuario', [UserController.Store, EmailController.ConfirmarEmail ]);
//Adicionar no carrinho
routes.post('/adicionarcarrinho', UserController.Auth, UserController.adicionarCarrinho);
//Remover do carrinho
routes.post('/removercarrinho', UserController.Auth, UserController.removerCarrinho);
//Pegar produtos no carrinho
routes.post('/pegarcarrinho', UserController.getCarrinho)
//Fazer login
//routes.post('/login',UserController.Login);
//Fazer login com padrão jwt
routes.post('/Sign',UserController.Sign);
//Fazer autheticação de token jwt
routes.post('/Auth', [UserController.Auth, UserController.Sign]);
//Atualizar nome
routes.post('/updateName', UserController.Auth, UserController.updateName);
//Atualizar sobrenome
routes.post('/updateUsername', UserController.Auth, UserController.updateUsername);
//Atualizar email
routes.post('/updateEmail', UserController.Auth, UserController.updateEmail);
//Atualizar senha
//routes.post('/updatePassword', UserController.updatePassword);
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
routes.post('/criarproduto',upload.single('img'), [ AdminController.Auth, ProductController.Store]);
//Mostrar produtos
routes.get('/mostrartodosprodutos/:pagina',ProductController.Show);
//Mostrar produtos pelo tipo
routes.get('/mostrarprodutoportipo/:tipo/:pagina',ProductController.ShowByTipo);
//Mostrar produtos em novidades
routes.get('/mostrarprodutonovidade/:pagina', ProductController.ShowByNewer);
//Mostrar produtos em promocao
routes.get('/mostrarprodutopromocao/:pagina', ProductController.ShowByPromotion);
//Mostra produtos pelo nome
routes.get('/mostrarprodutopornome/:nome/:pagina', ProductController.ShowByName);
//Mostra produto por id
routes.get('/mostrarprodutosporid/:id', ProductController.ShowById);
//Remover produto pelo ID
routes.post('/removerproduto', [ AdminController.Auth, ProductController.Destroy] );
//Atualizar imagem do prodtuto
routes.post('/atualizarimagem',upload.single('img'), [AdminController.Auth,ProductController.UpdateImage ] );
//Atualizar nome do produto
routes.post('/atualizartitulo', [ AdminController.Auth, ProductController.UpdateTitle] );
//Atualizar marca
routes.post('/atualizarmarca', [ AdminController.Auth,  ProductController.UpdateMarca] );
//Atualizar preço
routes.post('/atualizarpreco', [ AdminController.Auth, ProductController.UpdatePrice] );
//Atualizar estoque
routes.post('/atualizarestoque', [ AdminController.Auth,  ProductController.UpdateEstoque ]);
//Atualizar descrição
routes.post('/atualizardescricao', [ AdminController.Auth, ProductController.UpdateDescription  ] );
//Atualizar tipoProduto
routes.post('/atualizartipo', [ AdminController.Auth, ProductController.UpdateType ] )
//Atualizar peso
routes.post('/atualizarpeso', [ AdminController.Auth, ProductController.UpdatePeso ] )
//Atualizar formato
routes.post('/atualizarformato', [ AdminController.Auth, ProductController.UpdateFormato ] )
//Atualizar comprimento
routes.post('/atualizarcomprimento', [ AdminController.Auth, ProductController.UpdateComprimento ] )
//Atualizar altura
routes.post('/atualizaraltura', [ AdminController.Auth, ProductController.UpdateAltura ])
//Atualizar largura
routes.post('/atualizarlargura', [ AdminController.Auth, ProductController.UpdateLargura ] )
//Atualizar diametro
routes.post('/atualizardiametro', [ AdminController.Auth, ProductController.UpdateDiametro]  )
//Atualizar novidade
routes.post('/atualizarnovidade', [ AdminController.Auth, ProductController.UpdateNovidade ] )
//Atualizar promocao
routes.post('/atualizarpromocao', [ AdminController.Auth,ProductController.UpdatePromocao ] )

//Histórico
//Criar um ítem de histórico
//routes.post('/criarHistorico',HistoryController.store)
//Obter historico por ID
routes.get('/getHistorybyID/:id', HistoryController.findHistoryById)
//Obter todos os historicos
routes.get('/getAllHistory/:page', HistoryController.findAllHistory)
//Atualizar StatusFrete
routes.put('/updateStatusFrete', HistoryController.updateStatusFrete)
//Atualizar codRastreio
routes.put('/updateCodRastreio', HistoryController.updateCodRastreio)


//Correio
//Receber CEP
routes.get('/getAdress/:cep',CorreiosController.AdressGeter)
//Calcular preço do frete
routes.post('/getShippingPrice',CorreiosController.getShippingPrice)

//PAGSEGURO
//Recebe status do PagSeguro
routes.post('/pagseguro/status', [PagSeguroController.receiveStatus, HistoryController.store, HistoryController.updateHistory, ProductController.Comprar, PagSeguroController.estornar]);
//Fazer Checkout
routes.post('/pagseguro/checkout',PagSeguroController.sendCheckout);

routes.get('/teste',(req,res)=>{
    return res.send({oi:'oi'});
});

module.exports = routes;