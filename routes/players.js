const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playersController');

router.post('/', playersController.createPlayer);
router.get('/', playersController.getPlayers);

module.exports = router;