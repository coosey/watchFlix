const router = require("express").Router();
const controller = require("../../controllers/movies.js");

router.get("/", controller.getTrendingMovies);
router.get("/:id", controller.getMovieCast);

module.exports = router;
