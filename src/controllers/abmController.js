const path = require('path');
const fs = require('fs');


let baseDatos = fs.readFileSync(path.join(__dirname ,'../dataBase/daily.json'), 'utf8');
baseDatos = JSON.parse(baseDatos)


let abmController = {
     alta :  function(req, res, next) {
     res.render('newDailyForm', {title : 'ABM'});
     },
     form : function (req, res, next){
          let nombreArchivo = req.files[0].filename;
          console.log(nombreArchivo)
          baseDatos.push(
               {
                    numeroDia: req.body.numeroDia,
                    title: req.body.title,
                    imagen: `/images/dailyUploads/${req.files[0].filename}`,
                    file: req.files[0].filename.slice(0, -4),
                    description: req.body.description,
               });
          console.log(req.files)
          fs.writeFileSync(path.join(__dirname ,'../dataBase/daily.json'), JSON.stringify(baseDatos,null , 4));
          res.redirect('/abm')
     }
     
  }
module.exports = abmController




