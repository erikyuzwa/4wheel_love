'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var yamlConfig = require('node-yaml-config');
var db = require('./database/db.js');

var apiRoute = require('./routes/api');
var index = require('./routes/index');
//var users = require('./routes/users');

var config = yamlConfig.load(__dirname + '/config.yml');

//console.log(config);

var app = express();

// scan in values from config
app.set('hostPort', config.server.port);
app.set('hostName', config.server.host);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// make use of helmet for some security best practices
app.use(helmet());

app.use('/', index);
//app.use('/users', users);
app.use('/api', apiRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(app.get('hostPort'), app.get('hostName'), function() {
  console.log('server running and listening on %s:%d', app.get('hostName'), app.get('hostPort'));
});

module.exports = app;