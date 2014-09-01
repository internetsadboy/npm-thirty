'use strict';

var npmDownloads = require('npm-pkg-downloads'),
    router = require('express').Router(),
    models = require('../../models/index'),
    crypto = require('crypto'),
    fs = require('fs');


router.get('/', function (req, res, next) {
  npmDownloads(function (downloads) {
    res.json(downloads);
  });
});


router.post('/', function (req, res, next) {
  var timestamp, day, month, year, date;

  timestamp = new Date();

  // format date
  day = timestamp.getDate();
  month = timestamp.getMonth() + 1; // index starts at 0
  year = timestamp.getFullYear();

  if (month < 10) {
    month = '0' + month;
  }

  if (day < 10) {
    day = '0' + day;
  }

  date = year + '-' + month + '-' + day;

  npmDownloads(function (downloads) {
    var entry;

    entry = { date : date, downloads : downloads };

    new models.pkgDownloads(entry).save();

    res.json(entry);
  });
});


router.route('/:date')

  .get(function (req, res, next) {
    var date = req.params.date;

    if (req.query.id) {
      // todo: fetch by id
    }

    models.pkgDownloads
      .find({ 'date' : date })
      .exec(function (err, doc) {

        if (err) {
          console.log(err);
        }

        res.json(doc);
      });
  })

  .put(function (req, res, next) {
    var date;

    date = req.params.date;

    models.pkgDownloads
      .update({ 'date' : date })
      .exec(function (err, doc) {

        if (err) {
          console.log(err);
        }

        res.send(doc);
      });
  })

  .delete(function (req, res, next) {
    var date = req.params.date;

    models.pkgDownloads
      .remove({ 'date' : date }, function (err) {

        if (err) {
          console.log(err);
        }

        res.send('');
      });
  });


module.exports = router;
