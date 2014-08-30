'use strict';

var methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    routes = require('./routes/index'),
    express = require('express');


var app, port;

app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/poll', routes.poll);

port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log('listening on port', port);
});
