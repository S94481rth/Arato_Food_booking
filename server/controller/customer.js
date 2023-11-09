const express = require('express');
const userModel = require('../models/customer');

exports.welcome = async (req,res) => {
    res.send("welcome to the great kirikaalan magic show");
}

exports.getUsers = async (req,res) => {
    const result = await userModel.getUsers();
    console.log(result);
    res.json(result);
}