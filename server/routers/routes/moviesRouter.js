const router = require("express").Router();
const topMoviesCtlr = require("../../controllers/movies/topMovies.js");
const genreCtlr = require("../../controllers/movies/movieGenres.js");

// topMovies
router.get("/", topMoviesCtlr.getTrendingMovies);
router.get("/credits/:id", topMoviesCtlr.getMovieCast);
router.get("/details/:id", topMoviesCtlr.getMovieDetails);

// movieGenres
router.get("/action", genreCtlr.getActionMovies);

module.exports = router;
