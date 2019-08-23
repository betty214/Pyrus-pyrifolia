var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static('stylesheet'));

app.listen(1234, function () {
  console.log('server running at localhost:1234');
});


app.get('/T1', function (request, response) {
  fs.readFile('mapT1.html', 'utf8', function (error, data) {
      response.send(data);
    });
});
app.get('/T2', function (request, response) {
    fs.readFile('mapT2.html', 'utf8', function (error, data) {
        response.send(data);
    });
});
app.get('/T3', function (request, response) {
    fs.readFile('mapT3.html', 'utf8', function (error, data) {
        response.send(data);
    });
});

app.get('/img', function (request, response) {
    fs.readFile('mapimg.png', function (error, data) {
        response.send(data);
    });
  });