const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");

/*rota Home (/) usando o método GET */
router.get("/", homeController.index);
router.get("/login", homeController.login);

module.exports = router;
