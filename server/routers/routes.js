const router = require("express").Router();
const movies = require("./routes/moviesRouter.js");
const tv = require("./routes/tvRouter.js");

router.get("/movies", movies);
router.get("/tv", tv);
router.get("/tv/:id", tv);

module.exports = router;