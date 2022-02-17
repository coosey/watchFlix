const router = require("express").Router();
const controller = require("../controllers/movies.js");

router.get("/", controller.getTrending);

module.exports = router;