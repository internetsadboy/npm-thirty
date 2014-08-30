'use strict';

var npmDownloads = require('npm-pkg-downloads'),
    router = require('express').Router(),
    crypto = require('crypto'),
    fs = require('fs');


router.get('/', function (req, res, next) {
  npmDownloads(function (downloads) {
    res.json(downloads);
  });
});


router.post('/', function (req, res, next) {
  var entry = {},
      timestamp,
      uid;

  uid = crypto.randomBytes(12).toString('hex');
  timestamp = new Date().getTime();

  npmDownloads(function (downloads) {

    entry.uid = uid;
    entry.timestamp = timestamp;
    entry.downloads = downloads;

    fs.writeFile('./db/entry_' + timestamp, JSON.stringify(entry), function (err) {
      if (err) {
        console.log(err);
      }
    });

    res.json(entry);
  });
});


module.exports = router;
