'use strict';

var mongoose = require('mongoose');


var Schema, ObjectId, pkgDownloadsSchema;

Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

pkgDownloadsSchema = new Schema({
  uid: ObjectId,
  date: String,
  timestamp: { type: Date, default: Date.now },
  downloads: Object
});

module.exports = mongoose.model('pkgDownloads', pkgDownloadsSchema);
