'use strict';

var mongoose = require('mongoose');


var Schema, ObjectId, pkgDownloadsSchema;

Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

pkgDownloadsSchema = new Schema({
  uid: ObjectId,
  date: String,
  downloads: Object
});

module.exports = mongoose.model('pkgDownloads', pkgDownloadsSchema);
