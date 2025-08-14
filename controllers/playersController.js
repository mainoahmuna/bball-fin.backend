const playersModel = require('../models/playersModel');

exports.createPlayer = (req, res) => {
    const { name, team, position } = req.body;
    if (!name || !team || !position) {
        return res.status(400).json({ error: 'Missing required fields' })
    }
    const newPlayer = playersModel.addPlayer({ name, team, position });
    res.status(201).json(newPlayer);
};

exports.getPlayers = (req, res) => {
  const players = playersModel.getAllPlayers();
  res.json(players);
};