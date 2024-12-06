const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    db.all(`SELECT * FROM users`, (err, rows) => {
        if (err) {
            console.error("Error reading users table", err.message);
        } else {
            console.log('Users:');
            rows.forEach(row => {
                console.log(row);
            });
        }
        db.close();
    });
});