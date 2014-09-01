'use strict';

var router = require('express').Router();
s

router.get('/', function (req, res, next) {
  var docs;

  docs = 'GET    /poll/:date\n' +
         'POST   /poll/:date\n' +
         'PUT    /poll/:date\n' +
         'DELETE /poll/:date\n';

  res.send(docs);
});


module.exports = router;
