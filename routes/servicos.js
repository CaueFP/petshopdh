/* importando o modulo do express */
const express = require('express');
/* Iniciando o express Router*/
const router = express.Router();

const servicoController = require('../controllers/servicoController');


/* Listando todos os serviço cadastrados */
router.get("/servicos", servicoController.index);
  
  /* Listando um serviço especifico, localizado pelo ID */
  router.get("/servicos/:id", servicoController.show);
  
  /* Cadastrando um novo serviço com o método POST */
  router.post("/servicos", servicoController.create);
  
  /* Alterando informações de um serviço cadastrado com método PUT e localizando o serviço pelo ID */
  router.put("/servicos/:id", servicoController.update);
  
  /* Deletando um serviço com o metodo DELETE, o serviço foi buscado pelo ID */
  router.delete("/servicos/:id", servicoController.destroy);
  
  
  module.exports = router;
 