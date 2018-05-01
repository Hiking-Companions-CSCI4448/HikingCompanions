var mongoose = require('mongoose');

var TripSchema = new mongoose.Schema({
  date: Date,
  title: String,
  sponsor: String,
  description: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Trip', TripSchema);