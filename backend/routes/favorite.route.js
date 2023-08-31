const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite.controller');

router.get('/:id/:product_id', favoriteController.getSingleFavorite.bind(favoriteController));
router.get('/:id', favoriteController.getFavoriteById.bind(favoriteController));
router.post('/', favoriteController.create.bind(favoriteController));
router.delete('/:creator_id/:product_id', favoriteController.delete.bind(favoriteController));

module.exports = router;