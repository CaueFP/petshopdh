/* importando o modulo do express */
const express = require('express');
/* Iniciando o express Router*/
const router = express.Router();

const servicoController = require('../controllers/servicoController');

const storage = require('../config/storage');

const uploadAvatar = storage('avatar', '/servicos')

/* Listando todos os serviço cadastrados */
router.get("/adm/servicos", servicoController.index);

/* Cadastrando um novo serviço com o método POST */
router.get("/adm/servicos/cadastro", servicoController.create);
  
  /* Listando um serviço especifico, localizado pelo ID */
  router.get("/adm/servicos/:id", servicoController.show);
  
  router.get('/adm/servicos/:id/editar', servicoController.edit);
  
  router.post("/adm/servicos", servicoController.store);
  
  /* Alterando informações de um serviço cadastrado com método PUT e localizando o serviço pelo ID */
  router.put("/adm/servicos/:id", servicoController.update);
  
  /* Deletando um serviço com o metodo DELETE, o serviço foi buscado pelo ID */
  router.delete("/adm/servicos/:id", servicoController.destroy);
  
  
  module.exports = router;
 