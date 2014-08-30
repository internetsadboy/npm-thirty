'use strict';

var request = require('request');


setInterval(function onInterval() {

  request({
    url: 'http://localhost:8000/poll',
    method: 'POST'
  },

  function onRequest(err, res, body) {

    if (err) {
      console.log(err);
    }

    console.log(body);
  });

}, 2000);
//  21600000
