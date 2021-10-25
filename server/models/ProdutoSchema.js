const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O campo Nome é obrigatório"],
      },
    codigo: {
        type: String,
        required: [true, "O campo Codigo é obrigatório"],
      },
      categoria: {
        type: String,
        required: [true, "O campo Categoria é obrigatório"],
      },
    preco: {
        type: Number,
        min: [0, "Valor mínimo de R$ 1,00"],
        required: [true, "O campo Preço é obrigatório"],
      },
    criadoEm: { type: Date, default: Date.now }, //default por padrao vai salvar sem fuso horario
});

module.exports = mongoose.model("Produtos", ProdutoSchema); // nome da colecao, segundo parametro constante
