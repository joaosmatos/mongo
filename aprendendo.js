const mongoose = require("mongoose")

// configurando o mongoose
    mongoose.promise = global.promise;
    mongoose.connect("mongodb://localhost/aprendendo", {
        useMongoClient: true
    }),then(() => {
        console.log("MongoDB conectado...")
    }).catch((err) => {
        console.log("Houve um erro ao se conectar ao mongoDB: "+err)
    })
// model - usuarios
// definindo o model

    const UsuarioSchema = mongoose.Schema({

        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: string
        }

    })
// collection
    mongoose.model('usuarios', UsuarioSchema )

    const victor = mongoose.model('usuarios')

    new victor({
        nome: "victor",
        sobrenome: "lima",
        email: "email@email.com",
        idade: 19,
        pais: "Brasil"
    }).save().then(() => {
        console.log("usuario criado com sucesso!")
    }).catch((err) => {
        console.log("Houve um erro ao registrar o usuario: "+err)
    })