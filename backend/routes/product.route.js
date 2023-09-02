const express = require('express');
const router = express.Router();
const multer = require('multer');
const productController = require('../controllers/product.controller');
const upload = multer();

router.post('/', upload.array("images"), productController.postProduct.bind(productController));
router.get('/', productController.getAll.bind(productController));
router.get('/new', productController.getNewProducts.bind(productController));
router.get('/promo', productController.getPromoProducts.bind(productController));
router.get('/preorder', productController.getPreorderProducts.bind(productController));
router.get('/:id', productController.getById.bind(productController));

module.exports = router;