import mongoose from 'mongoose';

mongoose.connect();
//A função connect guarda a string de conexão dentro dos parênteses.

let db = mongoose.connect;
// Agora criamos uma variavel que guarda a ação de conectar nosso usuario com o mongoDB.
module.exports = db;
