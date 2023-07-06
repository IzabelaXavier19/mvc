import mongoose from 'mongoose'; /* mongoose é uma biblioteca de Modelagem de Dados de Objeto*/

const apiSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        endereco: {type: String, require: true},
        salas: {type: Number, require: true}

    }
)

const apis = mongoose.model('apis', apiSchema);

export default  apis;