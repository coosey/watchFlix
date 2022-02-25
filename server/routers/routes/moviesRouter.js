const router = require("express").Router();
const controller = require("../../controllers/movies/topMovies.js");

router.get("/", controller.getTrendingMovies);
router.get("/credits/:id", controller.getMovieCast);
router.get("/details/:id", controller.getMovieDetails);

module.exports = router;
