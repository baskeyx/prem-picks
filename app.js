require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const gameRoutes = require('./backend/endpoints/game');
const playerRoutes = require('./backend/endpoints/player');
const handleErrors = require('./backend/middleware/handleErrors');

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

app.get('/ping', (req, res) => {
  res.status(200).send('Ok');
});

app.use('/api/game', gameRoutes);
app.use('/api/player', playerRoutes);
app.use(handleErrors);

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