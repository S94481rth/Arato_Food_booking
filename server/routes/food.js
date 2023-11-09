const express = require('express');
const router = express.Router();
const foodController = require('../controller/food');

router.get('/', foodController.welcome);
router.get('/foods', foodController.getFoods);
router.get('/foods/:id', foodController.getFood);
router.post('/createFood', foodController.insertFood)

module.exports = router;
