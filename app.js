/* importando o modulo do express */
const express = require("express");
/* Iniciando o express */
const app = express();

/* importando rotas home */
const homeRouter = require('./routes/home');
/* importando rotas de pets */
const petsRouter = require('./routes/pets');
/* importando rotas de serviços */
const servicosRouter = require('./routes/servicos');

/*-----------------------------------------------------------------*/

/* Usando rotas home */
app.use(homeRouter);
/* Usando as rotas de pets */
app.use(petsRouter);
/* Usando as rotas de servicos */
app.use(servicosRouter);





/*-----------------------------------------------------------------*/

/*Iniciando o servidor na porta 3000 e callback com mensagem para o terminal */
app.listen(3000, () => console.log("Servidor Rodando!"));
