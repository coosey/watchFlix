const router = require("express").Router();
const controller = require("../../controllers/tv.js");

router.get("/", controller.getTrendingTV);

module.exports = router;