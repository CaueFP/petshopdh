const Servico = require('../models/servicoModel');

const homeController = {
  index: (req, res) => {
    res.render("home");
  },

  login: (req, res) => {
    res.send("Página de Login");
  },

  sobre: (req, res) => {
    res.render("home/sobre");
  },

  contato: (req, res) => {
    res.render("home/contato");
  },

  servicos: (req, res) => {

    const servicos = Servico.findAll();

    res.render("home/servicos", { servicos });
  },

};

module.exports = homeController;
