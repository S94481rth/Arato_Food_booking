// import {createConnection, createPool} from 'mysql';
const mysql = require('mysql2');
require('dotenv').config();

console.log("yo");

const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 2,
    database: process.env.DB_NAME
});

module.exports = pool;