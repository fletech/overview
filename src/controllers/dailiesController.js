const path = require('path');
const fs = require('fs');

let dailyDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/daily.json'), 'utf-8'));



let dailiesController = {
    index :  function(req, res, next) {
      
     res.render('dailies', { baseDatos: dailyDB});

   },
    id: function(req,res,next){
      
      for (let i = 0; i < dailyDB.length; i++){

        if (req.params.id == i+1){
          let imagen = dailyDB[i].imagen
          return res.render('dailyView', {imagen: imagen})
        }
      }
      res.redirect('/')
    }
  }
module.exports = dailiesController



