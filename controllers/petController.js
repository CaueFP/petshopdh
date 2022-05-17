const petController = {
  index: (req, res) => {
    res.send("Listando todos os pets cadastrados");
  },

  create: (req, res) => {
    res.send("Cadastrando um novo PET com o método POST");
  },

  show: (req, res) => {
    res.send("Listando um pet especifico, localizado pelo ID. O Pet encontrado foi o de ID numero: " + req.params.id);
  },

  update: (req, res) => {
    res.send("Alterando informações de um pet cadastrado com método PUT e localizando o pet pelo ID. O Pet alterado foi o de ID numero:  " + req.params.id);
  },

  destroy:(req, res) => {
    res.send("Deletando um pet com o metodo DELETE, o pet foi buscado pelo ID. O Pet deletado foi o de ID numero:  " + req.params.id);
  }
};

module.exports = petController;

/* index = listar
create = criar
show = mostrar item especifico
update = atualizar um item especifico
destroy = deletar item especifico */
