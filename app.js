const express = require('express');
const app = express();

app.use(express.json());

const playerRoutes = require('./routes/players');
const betRoutes = require('./routes/bets');

app.use('/players', playerRoutes);
app.use('/bets', betRoutes);

module.exports = app;