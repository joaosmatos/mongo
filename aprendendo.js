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