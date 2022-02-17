const router = require("express").Router();
const movies = require("./routes/moviesRouter.js");
const tv = require("./routes/tvRouter.js");

router.get("/trending-movies", movies);
router.get("/trending-tv", tv);

module.exports = router;