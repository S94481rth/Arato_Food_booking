const db = require('../middleware/db');

const getOrders = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM order";
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

const getOrder = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM order WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

const insertOrder = (order) => {
  const customer_id = order.customer_id;
  const hotel_id = order.hotel_id;

  return new Promise((resolve, reject) => {
    const query = "INSERT INTO `order` (customer_id, hotel_id) VALUES (?, ?);"
    db.query(query, [customer_id, hotel_id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

class Order {
  constructor(customer_id, hotel_id) {
    this.customer_id = customer_id;
    this.hotel_id = hotel_id;
  }
}

module.exports = {
  Order,
  getOrder,
  getOrders,
  insertOrder
}
