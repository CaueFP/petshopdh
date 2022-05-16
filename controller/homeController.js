const homeController = {
  index: (req, res) => {
    res.send("Bem vindo ao Petshop DH!");
  },
  login: (re1,res) => {
      res.send('Página de Login')
  }
};

module.exports = homeController;
