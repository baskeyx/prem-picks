const mongoose = require('mongoose');

const players = mongoose.model('players', mongoose.Schema({
  id: { type: String, unique: true, required: true },
  name: { type: String, unique: true, required: true },
  country: { type: String, required: true },
  club: { type: String, required: true },
  position: { type: String, required: true },
}));

exports.players = players;
