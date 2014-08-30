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
    var entry, _downloads = [];

    // add timestamp
    downloads['timestamp'] = timestamp;

    _downloads[0] = downloads;

    entry = { date : date, downloads : _downloads };

    new models.pkgDownloads(entry).save();

    res.json(entry);
  });
});



router.route('/:date')
  .get(function (req, res, next) {
    models.pkgDownloads
      .find({})
      .exec(function (err, documents) {
        if (err) {
          console.log(err);
        }

        console.log(documents[0]['downloads']);
      })
  })

module.exports = router;
