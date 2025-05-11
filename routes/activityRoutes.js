const express = require('express');
const router = express.Router();
const { listActivities } = require('../controllers/activityController');

router.get('/', listActivities);

module.exports = router;