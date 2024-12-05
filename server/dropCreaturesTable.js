const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS creatures`, (err) => {
        if (err) {
            console.error("Error dropping creatures table", err.message);
        } else {
            console.log("Creatures table dropped successfully");
        }
    });
});

db.close();