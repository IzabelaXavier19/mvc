import  express,  {json }  from 'express';
import  index  from './routes/index.js';
import db from './config/dbConnect.js';
import apis from './routes/api.js';


const app = express(); //esta variável recebe o express, e será usada em outros arquivos
//app a partir daqui é um FRAMEWORK //

app.use(json()); //o use é um método pronto do express //json é um formato que vamos trabalhar//
app.use("/",index);
app.use("/apis", apis);

db.on("error", console.log.bind(console, 'Erro de conexão'))

db.once("open",() => {
    console.log('Conexão com o banco feita com sucesso')
});


export default app;