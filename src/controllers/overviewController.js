const path = require('path');
const fs = require('fs');

let dataBase = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/listCategories.json'), 'utf-8'));
let dailyDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/daily.json'), 'utf-8'));
let emoticons = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/emoticons.json'), 'utf-8'));
let quotes = require ('../javascripts/randomQuotes');

const emoticon = () => {return emoticons[Math.floor(Math.random() * emoticons.length)]};





let usersController = {
  dailyUi :  function(req, res, next){
    res.render('overview', {title: 'Daily UI Challenge',h3: 'Dailies',dataBase,baseDatos: dailyDB, avatar: emoticon(), quote: undefined,view:'dailyUi', })
  },
  overview :  function(req, res, next) {
      res.render('overview', { title : 'Overview', 
                                    h3 : 'Overview',
                                    view: 'dailyUi',
                                    dataBase, baseDatos: 
                                    dailyDB, 
                                    avatar:emoticon(), 
                                    quotes});
          
  },
  quote :  function(req, res, next){

      let quote = quotes[req.params.id]

      res.render('overview', {title: 'Random movie quotes', h3: 'Quotes', dataBase,baseDatos: dailyDB,avatar:emoticon(),quote, view:'quotes'})

  },
  quotes :  function(req, res, next){
      res.render('overview', {title: 'Click to get a new quote',h3: 'Quotes',dataBase,baseDatos: dailyDB,avatar:emoticon(), quote: undefined,view:'quotes'})
  },
     
}
 module.exports = usersController

 