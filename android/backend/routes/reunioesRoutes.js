const express = require('express');
const router = express.Router();
const reunioesController = require('../controllers/reunioesController');


router.post('/', reunioesController.createMeeting);

module.exports = router;