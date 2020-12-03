const toggle = {
     idBody : function(req,res,next){
          if (req.session.idBody){
               res.locals.idBody = req.session.idBody;
               
          } else {
               console.log('NO hay una sesion iniciada')
          }
          next()
     },
     classMode : function(req,res,next){
          if (req.session.classMode){
               res.locals.classMode = req.session.classMode;
          } 
          next()
     },
     
}


module.exports = toggle