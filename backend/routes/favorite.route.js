const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite.controller');

router.get('/:id', favoriteController.getFavoriteById.bind(favoriteController));

module.exports = router;