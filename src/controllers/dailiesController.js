const path = require('path');
const fs = require('fs');

let ddbb= require('./ddbb')

const emoticon = () => {return ddbb.emoticons[Math.floor(Math.random() * ddbb.emoticons.length)]};




let dailiesController = {
  daily :  function(req, res, next){
    return res.render('overview', {
      avatar: emoticon(), 
      ddbb,
      h3: 'Dailies', 
      quote: undefined,
      title: 'Daily UI Challenge',
      view:'dailyUi', 
    })
  },
    index :  function(req, res, next) {
      
     res.render('dailies', { baseDatos: ddbb.dailyDB});

   },
    id: function(req,res,next){
      
      for (let i = 0; i < ddbb.dailyDB.length; i++){

        if (req.params.id == i+1){
          let imagen = ddbb.dailyDB[i].imagen
          return res.render('overview', {
                                avatar: emoticon(), 
                                h3: `Day ${i+1}`,
                                imagen: imagen,
                                view: 'daily',
                                ddbb,
                                title: 'Dailies'
                                })
        }
      }
      res.redirect('/')
    }
  }
module.exports = dailiesController



