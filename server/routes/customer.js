const express = require('express');
const router = express.Router();
const customerController = require('../controller/customer');


router.get('/', customerController.welcome);
router.get('/users', customerController.getUsers);
router.get('/users/:id', customerController.getUser);
router.post('/createCustomer', customerController.insertUser)

module.exports = router;
