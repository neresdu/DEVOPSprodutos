const Produto = require("../models/ProdutoSchema.js");

class ProdutoController {
  // action               necessario ter uma res para cada req

  async cadastrar(req, res) {
    if (await Produto.exists(req.body)){
      result = "CODIGO JÁ CADASTRADO";
      res.status(200).json(result);
    }
      else{
        var result = await Produto.create(req.body);
        res.status(201).json(result);
      } 
    console.log(req.body);
    res.status(201).json(result); 
   
  }
  async update(req, res) {
    var result = await Produto.update(req.body);
   res.status(200).json(result);
 }

  async get(req, res) {
    var result = await Produto.find({});
    res.status(200).json(result);
  }
  async getById(req, res) {
     var result = await Produto.findById(req.params.codigo, req.body);
    res.status(200).json(result);
  }
  async deleteByCodigo(req, res) {
    var result = await Produto.findByIdAndRemove(req.params.codigo);
    res.status(200).json(result);
  }
}
module.exports = new ProdutoController();
