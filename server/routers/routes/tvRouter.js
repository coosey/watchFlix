const router = require("express").Router();
const controller = require("../../controllers/tv/topTv.js");

router.get("/", controller.getTrendingTV);
router.get("/credits/:id", controller.getTVCast);
router.get("/details/:id", controller.getTVDetails);

module.exports = router;