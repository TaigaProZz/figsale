const express = require('express');
const router = express.Router();
const sortController = require('../controllers/sort.controller');

router.get('/licence', sortController.getLicences.bind(sortController));

module.exports = router;