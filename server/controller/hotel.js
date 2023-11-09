const userModel = require('../models/hotel');
const Hotel = userModel.Hotel;

exports.welcome = async (req, res) => {
  res.send("Welcome to the hotel management system");
}

exports.getHotels = async (req, res) => {
  const result = await userModel.getHotels();
  console.log(result);
  res.json(result);
}

exports.getHotel = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await userModel.getHotel(id);
  res.json(result);
}

exports.insertHotel = async (req, res) => {
  const name = req.body.name;
  const city = req.body.city;
  const phno = req.body.phno;
  console.log(req.body);
  const result = await userModel.insertHotel(new Hotel(name, city, phno));
  res.status(200).send(req.body);
}
