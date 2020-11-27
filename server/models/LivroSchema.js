const mongoose = require("mongoose");

const LivroSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O campo Nome é obrigatório"],
      },
    isbn: {
        type: String,
        required: [true, "O campo ISBN é obrigatório"],
      },
    preco: {
        type: Number,
        min: [0, "Valor mínimo de R$ 1,00"],
        required: [true, "O campo Preço é obrigatório"],
      },
    criadoEm: { type: Date, default: Date.now }, //default por padrao vai salvar sem fuso horario
});

module.exports = mongoose.model("Livros", LivroSchema); // nome da colecao, segundo parametro constante
