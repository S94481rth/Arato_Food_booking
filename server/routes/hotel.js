const express = require('express');
const router = express.Router();
const hotelController = require('../controller/hotel');

router.get('/', hotelController.welcome);
router.get('/hotels', hotelController.getHotels);
router.get('/hotels/:id', hotelController.getHotel);
router.post('/createHotel', hotelController.insertHotel)

module.exports = router;
