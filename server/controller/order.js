const userModel = require('../models/order');
const Order = userModel.Order;

exports.welcome = async (req, res) => {
  res.send("Welcome to the order management system");
}

exports.getOrders = async (req, res) => {
  const result = await userModel.getOrders();
  console.log(result);
  res.json(result);
}

exports.getOrder = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await userModel.getOrder(id);
  res.json(result);
}

exports.insertOrder = async (req, res) => {
  const customer_id = req.body.customer_id;
  const hotel_id = req.body.hotel_id;
  console.log(req.body);
  const result = await userModel.insertOrder(new Order(customer_id, hotel_id));
  res.status(200).send(req.body);
}
