var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: { type: String, required: true },
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
});

var Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
