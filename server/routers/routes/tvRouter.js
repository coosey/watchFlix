const router = require("express").Router();
const controller = require("../../controllers/tv.js");

router.get("/", controller.getTrendingTV);
router.get("/:id", controller.getTVCast);

module.exports = router;