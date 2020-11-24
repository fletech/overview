const path = require('path');
const fs = require('fs');

let baseDatos = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/daily.json')));

let mainController = {
    index :  function(req, res, next) {
     res.render('index', { baseDatos: baseDatos});
   }
  }
module.exports = mainController



