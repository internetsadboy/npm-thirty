'use strict';

var request = require('request');


setInterval(function() {
  request('http://104.131.136.59:8000/poll/save', function(err, res, body) {
    if(err) {
      console.log(err);
    }

    console.log(body);
  });
}, 21600000);
