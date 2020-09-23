module.exports = require('dotenv').config({  
  path: process.env.NODE_ENV === "dev" ? __dirname + "/.env.example" : __dirname + "/.env"
});