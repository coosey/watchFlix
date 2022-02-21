const router = require("express").Router();
const controller = require("../../controllers/tv.js");

router.get("/", controller.getTrendingTV);
// need to fix
router.get("/", controller.getTVCast);

module.exports = router;