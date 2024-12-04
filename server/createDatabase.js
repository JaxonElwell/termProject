const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    // Create the users table
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS users (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         username TEXT NOT NULL UNIQUE,
    //         password TEXT NOT NULL
    //     )`, (err) => {
    //     if (err) {
    //         console.error("Error creating users table", err.message);
    //     } else {
    //         console.log('Created the users table.');
    //     }
    // });

    // Create the creatures table
    db.run(`
        CREATE TABLE IF NOT EXISTS creatures (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            description TEXT,
            stats TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )`, (err) => {
        if (err) {
            console.error("Error creating creatures table", err.message);
        } else {
            console.log('Created the creatures table.');
        }
    });

    // Insert a test user
    db.run(`INSERT INTO users (username, password) VALUES ('test', 'test password')`, function (err) {
        if (err) {
            console.error("Error inserting test user", err.message);
        } else {
            console.log('Inserted a test user.');

            // Insert a test creature linked to the user
            const userId = this.lastID; // Get the last inserted user ID
            db.run(`
                INSERT INTO creatures (user_id, name, description, stats) 
                VALUES (?, ?, ?, ?)`, 
                [userId, 'Dragon', 'A powerful fire-breathing dragon.', '{"strength": 18, "dexterity": 12}'], 
                (err) => {
                    if (err) {
                        console.error("Error inserting test creature", err.message);
                    } else {
                        console.log('Inserted a test creature.');
                    }
                });
        }
    });
});

// Query to verify data insertion
db.serialize(() => {
    db.all(`SELECT users.username, creatures.name, creatures.description, creatures.stats
            FROM users
            JOIN creatures ON users.id = creatures.user_id`, 
        (err, rows) => {
            if (err) {
                console.error("Error querying tables", err.message);
            } else {
                console.log('Data from tables:');
                rows.forEach(row => {
                    console.log(row);
                });
            }
        });
});

db.close((err) => {
    if (err) {
        console.error("Error closing the database", err.message);
    } else {
        console.log('Database connection closed.');
    }
});
