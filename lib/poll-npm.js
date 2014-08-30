'use strict';

var request = require('request');


setInterval(function onInterval() {

  request({
    url: 'http://104.131.136.59:8000/poll',
    method: 'POST'
  },

  function onRequest(err, res, body) {

    if (err) {
      console.log(err);
    }

    console.log(body);
  });

}, 21600000);
