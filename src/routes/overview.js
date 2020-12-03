var express = require('express');
var router = express.Router();
const overviewController = require('../controllers/overviewController')

/* GET users listing. */
router.get('/', overviewController.overview)
router.get('/light', overviewController.light)
router.get('/dark', overviewController.dark)
router.get('/quotes',overviewController.quotes)
router.get('/dailyUi',overviewController.dailyUi)
router.get('/quotes/:id',overviewController.quote)


module.exports = router;
