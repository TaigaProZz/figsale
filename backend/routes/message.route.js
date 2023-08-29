const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');

router.get('/', messageController.getAllById.bind(messageController));
router.put('/', messageController.send.bind(messageController));

module.exports = router;