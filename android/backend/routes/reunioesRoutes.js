const express = require('express');
const router = express.Router();
const reunioesController = require('../controllers/reunioesController');

router.get('/', reunioesController.getMeetingsByDate);
router.post('/', reunioesController.createMeeting);

module.exports = router;