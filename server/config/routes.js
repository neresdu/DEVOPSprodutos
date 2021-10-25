const express = require("express");
const router = express.Router();
const ProdutoController = require("../controllers/ProdutoController.js");

router.get("/", ProdutoController.get);

router.get("/produto/listar", ProdutoController.get);

router.get("/produto/remover/:codigo", ProdutoController.deleteByCodigo);

router.get("/buscar/codigo/:codigo", ProdutoController.getById);

router.post("/produto/cadastrar", ProdutoController.cadastrar);
router.post("/produto/alterar", ProdutoController.update);
module.exports = router;
