const userModel = require('../models/cuisine');
const Cuisine = userModel.Cuisine;

exports.welcome = async (req, res) => {
  res.send("Welcome to the cuisine management system");
}

exports.getCuisines = async (req, res) => {
  const result = await userModel.getCuisines();
  console.log(result);
  res.json(result);
}

exports.getCuisine = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await userModel.getCuisine(id);
  res.json(result);
}

exports.insertCuisine = async (req, res) => {
  const name = req.body.name;
  console.log(req.body);
  const result = await userModel.insertCuisine(new Cuisine(name));
  res.status(200).send(req.body);
}
