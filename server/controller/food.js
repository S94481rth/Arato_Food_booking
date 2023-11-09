const userModel = require('../models/food');
const Food = userModel.Food;

exports.welcome = async (req, res) => {
  res.send("Welcome to the food management system");
}

exports.getFoods = async (req, res) => {
  const result = await userModel.getFoods();
  console.log(result);
  res.json(result);
}

exports.getFood = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await userModel.getFood(id);
  res.json(result);
}

exports.insertFood = async (req, res) => {
  const name = req.body.name;
  const cuisine_id = req.body.cuisine_id;
  const hotel_id = req.body.hotel_id;
  console.log(req.body);
  const result = await userModel.insertFood(new Food(name, cuisine_id, hotel_id));
  res.status(200).send(req.body);
}
