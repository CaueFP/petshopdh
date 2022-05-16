/* importando o modulo do express */
const express = require('express');
/* Iniciando o express Router*/
const router = express.Router();


/* Listando todos os serviço cadastrados */
router.get("/servicos", (req, res) => {
    res.send("Listando todos os serviços cadastrados");
  });
  
  /* Listando um serviço especifico, localizado pelo ID */
  router.get("/servicos/:id", (req, res) => {
    res.send("Listando um serviço especifico, localizado pelo ID. O serviço encontrado foi o de ID numero: " + req.params.id);
  });
  
  /* Cadastrando um novo serviço com o método POST */
  router.post("/servicos", (req, res) => {
    res.send("Cadastrando um novo serviço com o método POST");
  });
  
  /* Alterando informações de um serviço cadastrado com método PUT e localizando o serviço pelo ID */
  router.put("/servicos/:id", (req, res) => {
    res.send("Alterando informações de um serviço cadastrado com método PUT e localizando o serviço pelo ID. O serviço alterado foi o de ID numero:  " + req.params.id);
  });
  
  /* Deletando um serviço com o metodo DELETE, o serviço foi buscado pelo ID */
  router.delete("/servicos/:id", (req, res) => {
    res.send("Deletando um serviço com o metodo DELETE, o serviço foi buscado pelo ID. O serviço deletado foi o de ID numero:  " + req.params.id);
  });
  
  
  module.exports = router;
 