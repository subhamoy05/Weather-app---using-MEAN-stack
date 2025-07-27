const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  description: String,
  searchedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Weather', WeatherSchema);
