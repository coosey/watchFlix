const router = require("express").Router();
const movies = require("./routes/moviesRouter.js");

router.get("/trending-movies", movies);

module.exports = router;