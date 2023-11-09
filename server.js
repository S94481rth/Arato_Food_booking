const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT_NUMBER || 3000;

// console.log(process.env.DB_USER);

const app = express();

app.use(cors());
app.use(express.json());

const customerRoutes = require('./server/routes/customer');
app.use("/customer", customerRoutes);

app.listen(PORT, () => {
    console.log(`running on port number ${PORT}`);
});