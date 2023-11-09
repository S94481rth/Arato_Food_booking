const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT_NUMBER || 3000;

// console.log(process.env.DB_USER);


const app = express();

app.listen(PORT, () => {
    console.log(`running on port number ${PORT}`);
});