const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');
const session =require ('express-session');


const usersMiddleware =require ('./middlewares/userLoggedMiddleware');
const modeMiddleware =require ('./middlewares/modeMiddleware');


const dailiesRouter = require('./routes/dailies');
const overviewRouter = require('./routes/overview');
const abmRouter = require('./routes/abm');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session( {secret: 'lamaquinadehacerpajaros'} ));
app.use(modeMiddleware.idBody)
app.use(modeMiddleware.classMode)
app.use(usersMiddleware.userLogged)



/////////// ROUTES ///////////
app.use('/abm', abmRouter);
app.use('/dailies', dailiesRouter);
app.use('/', overviewRouter);
app.use('/mode', overviewRouter);
app.use('/users', usersRouter)




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
