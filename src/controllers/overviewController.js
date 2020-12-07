let ddbb= require('./ddbb')

const emoticon = () => {return ddbb.emoticons[Math.floor(Math.random() * ddbb.emoticons.length)]};



let overviewController = {
  
  overview :  function(req, res, next) {
      return res.render('overview', { 
        avatar:emoticon(), 
        ddbb,
        h3 : 'Home',
        title : 'Overview', 
        view: 'home',
      });
          
  },
  aboutMe :  function(req, res, next) {
    return res.render('overview', { 
      avatar:ddbb.emoticons[1], 
      ddbb,
      h3 : 'About me',
      title : 'A quick look about me...', 
      view: 'aboutMe',
    });
        
},
contactMe :  function(req, res, next) {
  return res.render('overview', { 
    avatar:ddbb.emoticons[1], 
    ddbb,
    h3 : 'Contact me',
    title : "Let's stay in touch", 
    view: 'contactMe',
  });
      
},
  quote :  function(req, res, next){

      let quote = ddbb.quotes[req.params.id]

     return res.render('overview', {
        avatar:ddbb.emoticons[6],
        ddbb,
        h3: 'Quotes', 
        quote, 
        title: 'Random movie quotes', 
        view:'quotes'
      })

  },
  quotes :  function(req, res, next){
      return res.render('overview', {
        avatar:ddbb.emoticons[6], 
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

 