const db = require('../middleware/db');

const getFoods = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM food";
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

const getFood = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM food WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

const insertFood = (food) => {
  const name = food.name;
  const cuisine_id = food.cuisine_id;
  const hotel_id = food.hotel_id;

  return new Promise((resolve, reject) => {
    const query = "INSERT INTO food (name, cuisine_id, hotel_id) VALUES (?, ?, ?);"
    db.query(query, [name, cuisine_id, hotel_id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

class Food {
  constructor(name, cuisine_id, hotel_id) {
    this.name = name;
    this.cuisine_id = cuisine_id;
    this.hotel_id = hotel_id;
  }
}

module.exports = {
  Food,
  getFood,
  getFoods,
  insertFood
}
