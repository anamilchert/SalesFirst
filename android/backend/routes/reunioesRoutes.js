const express = require('express');
const router = express.Router();
const reunioesController = require('../controllers/reunioesController');

router.get('/', getMeetingsByDate);
router.post('/', reunioesController.createMeeting);

module.exports = router;