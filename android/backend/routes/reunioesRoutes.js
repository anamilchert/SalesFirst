const express = require('express');
const router = express.Router();
const {
  getMeetingsByDate,
  createMeeting,
} = require('../controllers/reunioesController');

router.get('/', getMeetingsByDate);

router.post('/', createMeeting);

module.exports = router;
