const { Router } = require("express");
const characters = require("./characters");

const router = Router();

router.use("/rickandmorty", characters);

module.exports = router;
