'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var router = require('./routes/routes');
var app = express();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var port = process.env.PORT || 5000 ; //heroku
//var port = process.env.PORT || process.env.API_PORT ? process.env.API_PORT : 3001 ; //local
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

mongoose.connect('mongodb://admin:admin2018@ds239117.mlab.com:39117/waterloodrivingdb')

app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));


//Use our router configuration when we call /api
app.use('/', router);

//starts the server and listens for requests
app.listen(port, function () {
  console.log('api running on port ${port}');
});

module.exports = app;
