const db = require('../middleware/db');

exports.getUsers = () => {
    query = "SELECT * FROM customer";
    db.query(query, (err, result) => {
        if (err) throw err;
        //console.log(result);
        return result;
    });
}