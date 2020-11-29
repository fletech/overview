let express = require ('express')
let router = express.Router()

const dailiesController = require ('../controllers/dailiesController')

router.get('/index', dailiesController.index)
router.get('/:id', dailiesController.id) //funciona OK

module.exports = router
