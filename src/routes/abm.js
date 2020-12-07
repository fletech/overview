let express = require ('express')
let router = express.Router()
const path = require('path');
const multer = require('multer');

const abmController = require ('../controllers/abmController');

var storage = multer.diskStorage({
     destination: function (req, file, cb) {
       cb(null, 'public/images/dailyUploads') 
     },
     filename: function (req, file, cb) {
       cb(null, 'DailyUI-'+req.body.numeroDia+path.extname(file.originalname))
     }
   })
   
   var upload = multer({ storage: storage })



router.get('/', abmController.alta) //funciona OK
router.post('/', upload.any(), abmController.form);


module.exports = router