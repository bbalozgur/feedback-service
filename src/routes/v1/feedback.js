const express = require('express');
const router = express.Router();

const FeedBackController = require('../../controllers/v1/feedback');

router.post('/', FeedBackController.createFeedBack);
router.get('/:host', FeedBackController.getFeedBack);

module.exports = router;