import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:ertyhb45@cluster0.gdxzyaz.mongodb.net/senac2");
//A função connect guarda a string de conexão dentro dos parênteses.

let db = mongoose.connection;
// Agora criamos uma variavel que guarda a ação de conectar nosso usuario com o mongoDB.

export default db;
