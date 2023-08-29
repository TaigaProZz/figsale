const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversation.controller');

router.get('/:id', conversationController.getAllById.bind(conversationController));
router.put('/', conversationController.create.bind(conversationController));

module.exports = router;