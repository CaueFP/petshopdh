/* importando o modulo do express */
const express = require('express');
/* Iniciando o express Router*/
const router = express.Router();

const petController = require("../controller/petController");


/* Listando todos os pets cadastrados */
router.get("/pets", petController.index);

/* Listando um pet especifico, localizado pelo ID */
router.get("/pets/:id", petController.show);

/* Cadastrando um novo PET com o método POST */
router.post("/pets", petController.create);

/* Alterando informações de um pet cadastrado com método PUT e localizando o pet pelo ID */
router.put("/pets/:id", petController.update);

/* Deletando um pet com o metodo DELETE, o pet foi buscado pelo ID */
router.delete("/pets/:id", petController.destroy);


module.exports = router;
