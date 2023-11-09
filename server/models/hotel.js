const db = require('../middleware/db');

const getHotels = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM hotel";
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

const getHotel = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM hotel WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

const insertHotel = (hotel) => {
  const name = hotel.name;
  const city = hotel.city;
  const phno = hotel.phno;

  return new Promise((resolve, reject) => {
    const query = "INSERT INTO hotel (name, city, phno) VALUES (?, ?, ?);"
    db.query(query, [name, city, phno], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

class Hotel {
  constructor(name, city, phno) {
    this.name = name;
    this.city = city;
    this.phno = phno;
  }
}

module.exports = {
  Hotel,
  getHotel,
  getHotels,
  insertHotel
}
