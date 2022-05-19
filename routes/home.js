const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

/*rota Home (/) usando o método GET */
router.get("/", homeController.index);
router.get("/login", homeController.login);
router.get("/sobre", homeController.sobre);
router.get("/contato", homeController.contato);

router.get("/servicos", homeController.servicos);

module.exports = router;
