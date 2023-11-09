const userModel = require('../models/customer');
const Customer = userModel.Customer;


exports.welcome = async (req,res) => {
    res.send("welcome to the great kirikaalan magic show");
}

exports.getUsers = async (req,res) => {
    const result = await userModel.getUsers();
    console.log(result);
    res.json(result);
}

exports.getUser = async (req,res) => {
    const id = req.params.id;
    console.log(id);
    const result = await userModel.getUser(id);
    res.json(result);
}

exports.insertUser = async (req, res) => {
    const name = req.body.name;
    const city = req.body.city;
    const phno = req.body.phno;
    //const boss = req.body.boss;
    console.log(req.body);
    const result = await userModel.insertUser(new Customer(name,city, phno));
    res.status(200).send(req.body);
}