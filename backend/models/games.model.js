const mongoose = require('mongoose');

const games = mongoose.model('games', mongoose.Schema({
  id: { type: String, unique: true, required: true },
  userId: { type: String, required: true },
  complete: { type: Boolean, default: false },
  score: { type: Number, default: 0 },
  completionDate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
}));

exports.games = games;
