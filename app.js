require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { players } = require('./backend/models/players.model.js');
const { games } = require('./backend/models/games.model');

const mongo = {
  username: process.env.MONGOUSERNAME,
  password: process.env.MONGOPASSWORD,
  db: process.env.MONGODB,
};

const clientP = mongoose.connect(`mongodb+srv://${mongo.username}:${mongo.password}@cluster0.ypgj5.mongodb.net/${mongo.db}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(m => m.connection.getClient());

const db = mongoose.connection;

const app = express();
app.use(cors());
app.use(express.json());
const limiter = rateLimit({
	windowMs:  60 * 1000, // 1 minute
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: { status: 'error', message: 'Too many requests' },
});
app.use(limiter)

const getRandomInt = (max)=> {
  return Math.floor(Math.random() * max);
}

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

app.get('/ping', (req, res) => {
  res.status(200).send('Ok');
});

app.get('/player', async (req, res) => {
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
});

app.post('/game', async (req, res) => {
  console.log(req.body);
  const userId = req.body.id;
  const game = {
    id: uuidv4(),
    userId,
  }
  const gameResponse = await games.create(game);
  res.send(gameResponse);
});

app.put('/game/:id', async (req, res) => {
  const { id } = req.params;
  const { userId, score } = req.body;
  console.log(id, userId, score);
  const gameExists = await games.find({ id, userId });
  console.log(gameExists);
  if (!gameExists[0].complete) {
    const game = {
      id,
      userId,
      score,
      complete: true,
      completedDate: Date.now(),
    }
    const gameComplete = await games.updateOne({ id, userId }, game)
    const gameScorePosition = await games.find({ score : { $gt : score } }).count(); 
    console.log(gameScorePosition);
    res.send({ id, userId, position: await ordinal_suffix_of(gameScorePosition + 1) });
  }
});

//app.use(handleErrors);

if (process.env.ENVIRONMENT === "production") {
  // Serve any static files
  app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, 'frontend/build')))

  // AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  })
} else {
  app.listen(8080);
}