const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    // Create the users table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        )`, (err) => {
        if (err) {
            console.error("Error creating user table", err.message);
        }
        else {
            console.log('Created the users table.');
        }
    }
    );

    // Insert a user
    db.run(`INSERT INTO users (username, password) VALUES ('test', 'test password')`);
        });
        db.close();