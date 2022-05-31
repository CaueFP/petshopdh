const Servico = require("../models/servicoModel");
const storage = require("../config/storage");
const fs = require("fs");

const uploadAvatar = storage("avatar", "/servicos");

const servicoController = {
  index: (req, res) => {
    const servicos = Servico.findAll();
    res.render("adm/servicos", { servicos }); //endereço do arquivo ejs
  },

  create: (req, res) => {
    return res.render("adm/servicos/cadastro");
  },

  show: (req, res) => {
    //res.send("Listando um Serviço especifico, localizado pelo ID. O Serviço encontrado foi o de ID numero: " + req.params.id);
    const { id } = req.params;
    const servico = Servico.findById(id);

    if (!servico) {
      res.status(404).render("not-found", { error: "Serviço Não Encontrado" });
    }
    return res.render("adm/servicos/detalhes", { servico }); //endereço do arquivo ejs
  },

  store: (req, res) => {
    uploadAvatar(req, res, (err) => {
      const { nome, preco, ativo, descricao } = req.body;
      const servico = {
        nome,
        descricao,
        imagem: "/img/servicos/" + req.file.filename,
        preco,
        ativo: ativo ? true : false,
      };
      Servico.save(servico);
      res.redirect("/adm/servicos"); //url, por isso precisa do / antes do adm
    });
  },

  edit: (req, res) => {
    const { id } = req.params;
    const servico = Servico.findById(id);

    return res.render("adm/servicos/editar", { servico });
  },

  update: (req, res) => {
    const { id } = req.params;    
      const { nome, preco, ativo, imagem, descricao } = req.body;
      const servico = {
        id,
        nome,
        descricao,
        imagem,
        preco,
        ativo: (ativo ? true : false),
      };
      Servico.update(id, servico);
      res.redirect("/adm/servicos"); //url, por isso precisa do / antes do adm
    
  },

  destroy: (req, res) => {
    const {id} = req.params;
    const servico = Servico.findById(id);
    if(!servico) {
        return res.status(404).render('errors', {error: 'Servico não encontrado'});
    }
    
    Servico.delete(id);
    try {
        fs.unlinkSync('./public' + servico.imagem);
    }catch (error){
        console.log(error);
    }
    return res.redirect('/adm/servicos')

  },
};

module.exports = servicoController;

/* index = listar
create = criar
show = mostrar item especifico
update = atualizar um item especifico
destroy = deletar item especifico */
