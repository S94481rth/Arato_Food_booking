const db = require('../middleware/db');

const getUsers = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM customer";
        db.query(query, (err, result) => {
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM customer WHERE id = ?";
        db.query(query, [id], (err, result) => {
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}

const insertUser = (customer) => {
    const name = customer.name;
    const city = customer.city;
    const phno = customer.phno;
//    const boss = customer.boss;

    return new Promise((resolve, reject) => {
        const query = "insert into customer( name, city, phno) values (?, ?, ?);"
        db.query(query, [name,city, phno], (err, result) => {
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    });
}

class Customer{
    constructor(name, city, phno){
        this.name = name;
        this.city =  city;
        this.phno = phno;
        //this.boss = boss;
    }
}

module.exports = {
    Customer,
    getUser,
    getUsers,
    insertUser
}