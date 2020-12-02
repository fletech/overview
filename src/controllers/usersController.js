const path = require('path');
const fs = require('fs');
const bcrypt=require('bcryptjs')

const codeValidation = 'admin123';
let dataBase = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/listCategories.json'), 'utf-8'));
let dailyDB = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/daily.json'), 'utf-8'));
let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/users.json'), 'utf-8'));
let emoticons = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/emoticons.json'), 'utf-8'));




let usersController = {
     usersLogin :  function(req, res, next){
          res.render('overview', {title: 'Log in',h3: 'Log in',dataBase,avatar: emoticons[3],quote: undefined,view:'users', })
     },
     usersRegister :  function(req, res, next){
          res.render('overview', {title: 'Sign up',h3: 'Sign up',dataBase,avatar: emoticons[3],quote: undefined,view:'users', error: false,codeValidation})
     },
     login :  function(req, res, next){
          for(let i = 0; i<users.length; i++){
               if(req.body.email == users[i].email){
                    if(bcrypt.compare(req.body.password, users[i].password)){
                         res.redirect('/');
                    } else{
                         res.redirect('/users/login')
                    }
               } else{
                    res.render('overview', {title: 'Overview',h3: 'You can not sign in as you are not allowed as Admin.',dataBase, baseDatos: dailyDB,avatar: emoticons[3],quote: undefined,view:'dailyUi',})
               }
          }
     },
     register :  function(req, res, next){
          if( codeValidation == req.body.codeValidation){
               newAdmin = {
               name: req.body.name,
               email: req.body.email,
               password: bcrypt.hashSync(req.body.password, 10),
               avatar: 'this feature is not available yet',
               codeValidation: 'Ok'
               };
               users.push(newAdmin)

               fs.writeFileSync(path.join(__dirname, '../dataBase/users.json'), JSON.stringify(users, null, 4), 'utf-8');
               
               res.render('overview', {title: `Bienvenido ${newAdmin.name}`,h3: 'Sign up',dataBase,avatar: emoticons[9],quote: undefined,view:'users', error: false,codeValidation})

          } else {
               res.render('overview', {title: 'Sign up',h3: 'You must enter a valid code',dataBase,avatar: emoticons[3],quote: undefined,view:'users',})
                         
          }
          
          
     }
        
   }
    module.exports = usersController
   

