const express = require('express');
const router = express.Router();
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const authenticate = require('../middleware/authMiddleware');

router.post('/', authenticate, bookActivity);
router.get('/my', authenticate, getMyBookings);

module.exports = router;