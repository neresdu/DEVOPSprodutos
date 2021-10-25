const mongoose = require("mongoose");

const db = mongoose.connect(
  "mongodb+srv://neresdu:neres000@ciclospagamento.bvjv0.gcp.mongodb.net/DEVOPS?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Conexao estabelecida com o bd...");
});

mongoose.connection.on("disconnected", () => {
  console.log("Desconectamos com o bd...");
});

mongoose.connection.on("error", (error) => {
  console.log(`Erro: \n ${error}`);
});

module.exports = db;
