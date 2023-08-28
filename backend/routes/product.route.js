const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/', productController.getAll.bind(productController));
router.get('/new', productController.getNewProducts.bind(productController));
router.get('/promo', productController.getPromoProducts.bind(productController));
router.get('/preorder', productController.getPreorderProducts.bind(productController));
router.get('/:id', productController.getById.bind(productController));

module.exports = router;