let express = require ('express')
let router = express.Router()
const path = require('path');
const multer = require('multer');

const usersController = require ('../controllers/usersController');



router.get('/login', usersController.usersLogin);
router.post('/login', usersController.login);
router.get('/register', usersController.usersRegister);
router.post('/register', usersController.register);

module.exports = router