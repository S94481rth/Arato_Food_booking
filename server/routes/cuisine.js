const express = require('express');
const router = express.Router();
const cuisineController = require('../controller/cuisine');

router.get('/', cuisineController.welcome);
router.get('/cuisines', cuisineController.getCuisines);
router.get('/cuisines/:id', cuisineController.getCuisine);
router.post('/createCuisine', cuisineController.insertCuisine)

module.exports = router;
