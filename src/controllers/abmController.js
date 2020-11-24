const path = require('path');
const fs = require('fs');


let baseDatos = fs.readFileSync(path.join(__dirname ,'../database/daily.json'), 'utf8');
baseDatos = JSON.parse(baseDatos)


let abmController = {
     alta :  function(req, res, next) {
     res.render('newDaily', {title : 'ABM'});
     },
     form : function (req, res, next){
          baseDatos.push(
               {
                    numeroDia: req.body.numeroDia,
                    title: req.body.title,
                    imagen: `/images/${req.files[0].filename}`
               });
          fs.writeFileSync(path.join(__dirname ,'../dataBase/daily.json'), JSON.stringify(baseDatos,null , 4));
          res.redirect('/abm')
     }
     
  }
module.exports = abmController




