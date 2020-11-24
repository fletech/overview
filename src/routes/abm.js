let express = require ('express')
const path = require('path');

let router = express.Router()
const abmController = require ('../controllers/abmController')


const multer = require('multer')

var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'public/images') 
     },
     filename: function (req, file, cb) {
       cb(null, 'DailyUI-'+req.body.numeroDia+path.extname(file.originalname))
     }
   })
   
   var upload = multer({ storage: storage })





router.get('/', abmController.alta) //funciona OK
router.post('/', upload.any(), abmController.form);


module.exports = router