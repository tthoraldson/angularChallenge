var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./routes/index');
var hero = require('./routes/hero');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests

app.use('/', index);
app.use('/hero', hero);

var databaseUri = 'mongodb://localhost:27017/omicron';

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose failed to connect because error: ', err);
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Listening on port', app.get('port'));
});
