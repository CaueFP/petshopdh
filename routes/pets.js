/* importando o modulo do express */
const express = require('express');
/* Iniciando o express Router*/
const router = express.Router();


/* Listando todos os pets cadastrados */
router.get("/pets", (req, res) => {
  res.send("Listando todos os pets cadastrados");
});

/* Listando um pet especifico, localizado pelo ID */
router.get("/pets/:id", (req, res) => {
  res.send("Listando um pet especifico, localizado pelo ID. O Pet encontrado foi o de ID numero: " + req.params.id);
});

/* Cadastrando um novo PET com o método POST */
router.post("/pets", (req, res) => {
  res.send("Cadastrando um novo PET com o método POST");
});

/* Alterando informações de um pet cadastrado com método PUT e localizando o pet pelo ID */
router.put("/pets/:id", (req, res) => {
  res.send("Alterando informações de um pet cadastrado com método PUT e localizando o pet pelo ID. O Pet alterado foi o de ID numero:  " + req.params.id);
});

/* Deletando um pet com o metodo DELETE, o pet foi buscado pelo ID */
router.delete("/pets/:id", (req, res) => {
  res.send("Deletando um pet com o metodo DELETE, o pet foi buscado pelo ID. O Pet deletado foi o de ID numero:  " + req.params.id);
});


module.exports = router;
