'use strict';

var screenshot = require('url-to-screenshot');
var fs = require('fs');


screenshot('https://www.npmjs.org/package/json-equal')
  .width(800)
  .height(600)
  .capture(function(err, img) {
    if (err) throw err;
    fs.writeFileSync(__dirname + '/example.png', img);
    console.log('open example.png');
  });
