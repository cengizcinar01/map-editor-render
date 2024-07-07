const express = require("express");
const { getMap } = require("../controllers/mapControllers");

const router = express.Router();

router.get("/get-map", getMap);

module.exports = router;
