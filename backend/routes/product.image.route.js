const express = require('express');
const router = express.Router();
const productImagesController = require('../controllers/product.image.controller');

router.get('/', productImagesController.getAll.bind(productImagesController));
router.get('/:id', productImagesController.getById.bind(productImagesController));

module.exports = router;