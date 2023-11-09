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

const hotelRoutes = require('./server/routes/hotel');
app.use("/hotel", hotelRoutes);

const cuisineRoutes = require('./server/routes/cuisine');
app.use("/cuisine", cuisineRoutes);

const foodRoutes = require('./server/routes/food');
app.use("/food", foodRoutes);

const orderRoutes = require('./server/routes/order');
app.use("/order", orderRoutes);
app.listen(PORT, () => {
    console.log(`running on port number ${PORT}`);
});