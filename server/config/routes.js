const express = require("express");
const router = express.Router();
const LivroController = require("../controllers/LivroController.js");

router.get("/", LivroController.get);

router.get("/livro/listar", LivroController.get);

router.get("/livro/remover/:isbn", LivroController.deleteByISBN);

router.get("/buscar/isbn/:isbn", LivroController.getById);

router.post("/livro/cadastrar", LivroController.cadastrar);
router.post("/livro/alterar", LivroController.update);
module.exports = router;
