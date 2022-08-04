const express = require('express');
const { sendMessage, allMessages } = require('../controllers/messageControllers');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

//sending the message

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);

module.exports = router;


//fetch a message in a chat