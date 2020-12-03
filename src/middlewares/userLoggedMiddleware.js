let users = {
     userLogged : function(req,res,next){
          if (req.session.userData){
               res.locals.user = req.session.userData;
               console.log(res.locals.user)
          } else {
               console.log('NO hay una sesion iniciada')
          }
          next()
     },
     userRegistered : function(req,res,next){
          if (sesion){
               res.locals.user = sesion;
               console.log(sesion)
          } 
          next()
     },
     
}


module.exports = users