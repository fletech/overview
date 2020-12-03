const path = require('path');
const fs = require('fs');
const bcrypt=require('bcryptjs')


const codeValidation = 'admin123';
let ddbb= require('./ddbb');
const session = require('express-session');
let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../dataBase/users.json'), 'utf-8'));


let usersController = {
     usersLogin :  function(req, res, next){
          res.render('overview', {
               avatar: ddbb.emoticons[3],
               ddbb,
               h3: 'Log in',
               title: 'Log in',
               view:'users' 
          })
     },
     usersRegister :  function(req, res, next){
          res.render('overview', {
               avatar: ddbb.emoticons[3],
               codeValidation,
               ddbb,
               error: false,
               h3: 'Sign up',
               title: 'Sign up',
               view:'users' 
          })
     },
     login :  function(req, res, next){
          
          for(let i = 0; i<users.length; i++){
               if(req.body.email == users[i].email){
                    if(bcrypt.compare(req.body.password, users[i].password)){
                         req.session.userData = {
                              name : users[i].name,
                              email : users[i].email,
                              avatar : users[i].avatar,
                              rol: users[i].rol
                         }
                         res.redirect('/'); 
                         
                    } else {
                          res.redirect('/users/login')
                    }
               } 
          }
          res.render('overview', {
                    avatar: ddbb.emoticons[3],
                    ddbb,
                    h3: 'You can not sign in as you are not allowed as Admin.',
                    view:'dailyUi',
                    title: 'Overview',
          })
     },
     logout : function (req,res,next){
          req.session.destroy();
          res.redirect('/')
     },
     register :  function(req, res, next){
          if( codeValidation == req.body.codeValidation){
               newAdmin = {
               name: req.body.name,
               email: req.body.email,
               password: bcrypt.hashSync(req.body.password, 10),
               avatar: 'this feature is not available yet',
               codeValidation: 'Ok',
               rol: 'Admin'
               };
               users.push(newAdmin)

               fs.writeFileSync(path.join(__dirname, '../dataBase/users.json'), JSON.stringify(users, null, 4), 'utf-8');
               req.session.userData = {
                    name : newAdmin.name,
                    email : newAdmin.email,
                    avatar : newAdmin.avatar,
                    rol: newAdmin.rol
               }
               res.redirect('/')

          } else {
               res.render('overview', {
                    avatar: ddbb.emoticons[3],
                    ddbb,
                    h3: 'You must enter a valid code',
                    title: 'Sign up',
                    view:'users',
               })
          }
     }
   }
    module.exports = usersController
   

