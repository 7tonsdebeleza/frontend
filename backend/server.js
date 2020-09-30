const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
require('./config/envConfig');

const allowlist = [process.env.CLIENT_URL, 'https://ws.pagseguro.uol.com.br']
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }

  } else {
    corsOptions = { origin: false }

  }
  callback(null, corsOptions)

}

app.use(cors(process.env.NODE_ENV == 'dev' ? null : corsOptionsDelegate))

//Conecta ao banco de dados via MongoDB Atlas, em nuvem

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});


//Conecta ao banco de dados via MongoDB Compass, localmente na CEOS
//mongoose.connect('mongodb://localhost/7tonsdebeleza')

//Area para conferir o estado do servidor Mongo
mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados:' + err);
}); //função para erros na conexão

mongoose.connection.on('disconnect', () => {
    console.log('Aplicação desconectada do banco de dados!');
}); //função de alerta caso desconecte do DB

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados');
});

//Remove Warnings especificando os padrões de comandos que usarei
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

//Tratadores e configuradores para melhor uso do acesso ao POST
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/files', express.static(path.resolve(__dirname, "uploads")))

app.use(require('./routes'));

const port = normalizaPort(process.env.PORT || '3333');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val;
    if (port >= 0) return port;
    return false;
};

app.listen(port);