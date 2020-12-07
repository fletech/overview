var express = require('express');
var router = express.Router();
const overviewController = require('../controllers/overviewController')

/* GET users listing. */
router.get('/', overviewController.overview)
router.get('/contact-me', overviewController.contactMe)
router.get('/about-me', overviewController.aboutMe)
router.get('/dark', overviewController.dark)
router.get('/light', overviewController.light)
router.get('/quotes',overviewController.quotes)
router.get('/quotes/:id',overviewController.quote)


module.exports = router;
