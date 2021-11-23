const express = require('express')
const router = express.Router();
const controller = require('../controller/seriesController')

router.get("/", controller.getAllSeries);


module.exports = router;
