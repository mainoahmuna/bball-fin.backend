const betsModel = require('../models/betsModel');

exports.placeBet = (req, res) => {
  const { userId, playerId, amount } = req.body;
  const bet = betsModel.addBet({ userId, playerId, amount });
  res.status(201).json(bet);
};

exports.getBets = (req, res) => {
  const bets = betsModel.getAllBets();
  res.json(bets);
};