const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { games } = require('../models/games.model');
const { BadRequest } = require('../utils/errors');
const router = express.Router();

const ordinal_suffix_of = async (i) => {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
}

router.post('/', async (req, res, next) => {
  try {
    const userId = req.body.id;
    if (!userId) throw new BadRequest('User ID required to start a game');
    const game = {
      id: uuidv4(),
      userId,
    }
  const gameResponse = await games.create(game)
  .catch((err) => {
    throw new BadRequest(err);
  });
  res.send(gameResponse);
  } catch(err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new BadRequest('No Game ID')
    const { userId, score } = req.body;
    if (!userId || !score) throw new BadRequest('Invalid Request');
    const gameExists = await games.find({ id, userId });
    if (gameExists.length === 0) {
      throw new BadRequest('Invalid game ID');
    }
    if (gameExists[0].complete) {
      throw new BadRequest('Game Already Completed');
    }
    if (!gameExists[0].complete) {
      const game = {
        id,
        userId,
        score,
        complete: true,
        completedDate: Date.now(),
      }
      await games.updateOne({ id, userId }, game)
      const gameScorePosition = await games.find({ score : { $gt : score } }).count(); 
      res.send({ id, userId, position: await ordinal_suffix_of(gameScorePosition + 1) })
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;