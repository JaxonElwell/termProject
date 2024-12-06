// Drop the users table

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS users`, (err) => {
        if (err) {
            console.error("Error dropping users table", err.message);
        } else {
            console.log("Users table dropped successfully");
        }
    });
});

db.close();