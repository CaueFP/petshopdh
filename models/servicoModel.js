const fs = require("fs");
const {v4: uuid} = require ('uuid');


 
function open() {
  let content = fs.readFileSync("./db.json", "utf8");
  const db = JSON.parse(content); //transforma texto Json para JS
  return db;
}

function store(db) {
  content = JSON.stringify(db); //transforma de JS para texto Json
  fs.writeFileSync("./db.json", content, "utf8");
}

const Servico = {
  findAll: () => {
        const db = open();
        return db.servicos;
  },

  findById: (id) => {
    const db = open();
    const servico = db.servicos.find(servico => servico.id == id);
    return servico;
  },

  save: (servico) => {
    const db = open();
    servico.id = uuid(); //gerando um id para um novo serviço
    db.servicos.push(servico);
    store(db);
  },

  update: (id, servicoAtualizado) => {
    const db = open();
    const index = db.servicos.findIndex(servico => servico.id == id);
    db.servicos[index] = servicoAtualizado;
    store(db);

  },

  delete: (id) => {
    const db = open();
    const index = db.servicos.findIndex(servico => servico.id == id);
    db.servicos.splice(index, 1);
    store(db);
  },
};


module.exports = Servico;