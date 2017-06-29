'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var yamlConfig = require('node-yaml-config');

var apiRoute = require('./routes/api');
var index = require('./routes/index');

// read in our config from the yml file
var config = yamlConfig.load(path.resolve(__dirname, '../config.yml'));

// our main Express reference
var app = express();

// scan in values from config
app.set('hostPort', config.server.port);
app.set('hostName', config.server.host);

// view engine setup
// TODO surround this with a feature flag since we don't need to expose in production
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// make use of helmet for some security best practices
app.use(helmet());

// for local development, expose our views which render from our database
app.use('/', index);
app.use('/api', apiRoute);

app.use('/jquery', express.static(path.resolve(__dirname, '../node_modules/jquery/dist/')));

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
