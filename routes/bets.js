const express = require('express');
const router = express.Router();
const betsController = require('../controllers/betsController');

router.post('/', betsController.placeBet);
router.get('/', betsController.getBets);

module.exports = router;