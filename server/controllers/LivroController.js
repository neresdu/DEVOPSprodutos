const Livro = require("../models/LivroSchema.js");

class LivroController {
  // action               necessario ter uma res para cada req
  // actions para cada modelo, no caso billingCycle
  async cadastrar(req, res) {
    if (await Livro.exists(req.body)){
      result = "ISBN JÁ CADASTRADO";
      res.status(200).json(result);
    }
      else{
        var result = await Livro.create(req.body);
        res.status(201).json(result);
      } 
    console.log(req.body);
    res.status(201).json(result); 
   
  }
  async update(req, res) {
    var result = await Livro.update(req.body);
   res.status(200).json(result);
 }

  async get(req, res) {
    var result = await Livro.find({});
    res.status(200).json(result); // geralmente respostas sao retornas em json
  }
  async getById(req, res) {
     var result = await Livro.findByIdAndUpdate(req.params.isbn, req.body);
    res.status(200).json(result);
  }
  async deleteByISBN(req, res) {
    var result = await Livro.findByIdAndRemove(req.params.isbn);
    res.status(200).json(result);
  }
}
module.exports = new LivroController();
