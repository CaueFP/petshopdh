/* importando o modulo do express */
const express = require("express");
/* Iniciando o express */
const app = express();

/* importando rotas de pets */
const petsRouter = require('./routes/pets');
/* importando rotas de serviços */
const servicosRouter = require('./routes/servicos');

/*-----------------------------------------------------------------*/

/* Usando as rotas de pets */
app.use(petsRouter);
/* Usando as rotas de servicos */
app.use(servicosRouter);

/*rota Home (/) usando o método GET */
app.get("/", (req, res) => {
    res.send("Bem vindo ao Petshop DH!");
  });


/*-----------------------------------------------------------------*/

/*Iniciando o servidor na porta 3000 e callback com mensagem para o terminal */
app.listen(3000, () => console.log("Servidor Rodando!"));
