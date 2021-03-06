const router = require("express").Router();
const movies = require("./routes/moviesRouter.js");
const tv = require("./routes/tvRouter.js");

// Movies Router
router.get("/movies", movies);
router.get("/movies/credits/:id", movies);
router.get("/movies/details/:id", movies);
router.get("/movies/action", movies);

// TV Router
router.get("/tv", tv);
router.get("/tv/credits/:id", tv);
router.get("/tv/details/:id", tv);

module.exports = router;