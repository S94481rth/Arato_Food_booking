const db = require('../middleware/db');

const getCuisines = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM cuisine";
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

const getCuisine = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM cuisine WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

const insertCuisine = (cuisine) => {
  const name = cuisine.name;

  return new Promise((resolve, reject) => {
    const query = "INSERT INTO cuisine (name) VALUES (?);"
    db.query(query, [name], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

class Cuisine {
  constructor(name) {
    this.name = name;
  }
}

module.exports = {
  Cuisine,
  getCuisine,
  getCuisines,
  insertCuisine
}
