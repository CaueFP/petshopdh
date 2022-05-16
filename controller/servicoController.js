const servicoController = {
    index: (req, res) => {
        res.send("Listando todos os Serviços cadastrados");
      },
    
      create: (req, res) => {
        res.send("Cadastrando um novo Serviço com o método POST");
      },
    
      show: (req, res) => {
        res.send("Listando um Serviço especifico, localizado pelo ID. O Serviço encontrado foi o de ID numero: " + req.params.id);
      },
    
      update: (req, res) => {
        res.send("Alterando informações de um Serviço cadastrado com método PUT e localizando o Serviço pelo ID. O Serviço alterado foi o de ID numero:  " + req.params.id);
      },
    
      destroy:(req, res) => {
        res.send("Deletando um Serviço com o metodo DELETE, o Serviço foi buscado pelo ID. O Serviço deletado foi o de ID numero:  " + req.params.id);
      }
}

module.exports = servicoController;


/* index = listar
create = criar
show = mostrar item especifico
update = atualizar um item especifico
destroy = deletar item especifico */