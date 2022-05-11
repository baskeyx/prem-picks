const express = require('express');
const { players } = require('../models/players.model.js');
const router = express.Router();

const getRandomInt = (max)=> {
  return Math.floor(Math.random() * max);
}

router.get('/', async (req, res, next) => {
  try {
    const playersResponse = await players.find();
    let ids = [];
    const response = {
      players: []
    };
    playersResponseLength = playersResponse.length;
    while (ids.length < 4) {
      const number = getRandomInt(playersResponseLength);
      if (!ids.includes(number)) {
        ids.push(number)
        response.players.push({...playersResponse[number].toObject(), status: false})
      }
    }
    const correctAnswer = getRandomInt(3);
    response.players[correctAnswer].status = true;
    res.send(response);
  } catch (err) {
    next(err);
  }
});

module.exports = router;