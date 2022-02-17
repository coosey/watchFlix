const router = require("express").Router();
const controller = require("../../controllers/movies.js");

router.get("/", controller.getTrendingMovies);

module.exports = router;
