let ddbb= require('./ddbb')

const emoticon = () => {return ddbb.emoticons[Math.floor(Math.random() * ddbb.emoticons.length)]};



let overviewController = {
  dailyUi :  function(req, res, next){
    return res.render('overview', {
      avatar: emoticon(), 
      ddbb,
      h3: 'Dailies', 
      quote: undefined,
      title: 'Daily UI Challenge',
      view:'dailyUi', 
    })
  },
  overview :  function(req, res, next) {
      return res.render('overview', { 
        avatar:emoticon(), 
        ddbb,
        h3 : 'Home',
        title : 'Overview', 
        view: 'dailyUi',
      });
          
  },
  quote :  function(req, res, next){

      let quote = ddbb.quotes[req.params.id]

     return res.render('overview', {
        avatar:emoticon(),
        ddbb,
        h3: 'Quotes', 
        quote, 
        title: 'Random movie quotes', 
        view:'quotes'
      })

  },
  quotes :  function(req, res, next){
      return res.render('overview', {
        avatar:emoticon(), 
        ddbb,
        h3: 'Quotes',
        quote: undefined,
        title: 'Click to get a new quote',
        view:'quotes'})
  },
  light :  function(req, res, next) {
    req.session.idBody = 'admin';
    req.session.classMode = 'light'
    
    return res.redirect(req.header('Referer') || '/');   
  },
  dark :  function(req, res, next) {

    req.session.idBody = 'adminDark';
    req.session.classMode = 'dark'
    
    return res.redirect(req.header('Referer') || '/'); 
},

     
}
 module.exports = overviewController

 