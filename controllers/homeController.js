const homeController = {
  index: (req, res) => {
    res.render('index');
  },
  login: (req, res) => {
    res.send("Página de Login");
  },
  sobre: (req, res) => {
    res.render('sobre');
  },
  contato: (req, res) => {
    res.render('contato');
  }
};

module.exports = homeController;
