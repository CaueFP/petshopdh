/* importando o modulo do express */
const express = require("express");

const methodOverride = require('method-override');

/* Iniciando o express */
const app = express();

//const path = require('path');

/* importando rotas home */
const homeRouter = require("./routes/home");
/* importando rotas de pets */
const petsRouter = require("./routes/pets");
/* importando rotas de serviços */
const servicosRouter = require("./routes/servicos");

/*-----------------------------------------------------------------*/
/* Configurando EJS como template engine do projeto.
Por padrão o EJS já seta a pasta com o nome views*/
app.set("view engine", "ejs");

app.use(methodOverride('_method'));

/* Pasta de arquivos estaticos/publicos */
app.use(express.static("./public"));
//app.set('views', path.join(__dirname, 'views')); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Usando rotas home */
app.use(homeRouter);
/* Usando as rotas de pets */
app.use(petsRouter);
/* Usando as rotas de servicos */
app.use(servicosRouter);

app.use((req, res, next) => {
  res.status(404).render("not-found", { error: "Página Não Encontrada" });
});


/*-----------------------------------------------------------------*/

/*Iniciando o servidor na porta 3000 e callback com mensagem para o terminal */
app.listen(3000, () => console.log("Servidor Rodando!"));
