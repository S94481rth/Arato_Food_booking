const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');

router.get('/', orderController.welcome);
router.get('/orders', orderController.getOrders);
router.get('/orders/:id', orderController.getOrder);
router.post('/createOrder', orderController.insertOrder)

module.exports = router;
