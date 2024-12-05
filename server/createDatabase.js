const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    // Create the users table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )`, (err) => {
        if (err) {
            console.error("Error creating users table", err.message);
        } else {
            console.log('Created the users table.');
        }
    });

    // Create the creatures table
    db.run(`
        CREATE TABLE IF NOT EXISTS creatures (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            cr INTEGER,
            ac INTEGER,
            hp INTEGER,
            speed INTEGER,
            climb_speed INTEGER,
            fly_speed INTEGER,
            strength INTEGER,
            dexterity INTEGER,
            constitution INTEGER,
            intelligence INTEGER,
            wisdom INTEGER,
            charisma INTEGER,
            notes TEXT,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )`, (err) => {
        if (err) {
            console.error("Error creating creatures table", err.message);
        } else {
            console.log('Created the creatures table.');
        }
    });

    // Insert a test user
    db.run(`INSERT INTO users (username, password) VALUES ('test', 'testpassword')`, function (err) {
        if (err) {
            console.error("Error inserting test user", err.message);
        } else {
            console.log('Inserted a test user.');

            // Insert a test creature linked to the user
            const userId = this.lastID; // Get the last inserted user ID
            console.log('User ID for test creature:', userId); // Log the user ID
            db.run(`
                INSERT INTO creatures (
                    user_id, name, cr, ac, hp, speed, climb_speed, fly_speed,
                    strength, dexterity, constitution, intelligence, wisdom, charisma, notes
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
                [
                    userId, 
                    'Dragon', 
                    10, // Challenge Rating
                    20, // Armor Class
                    200, // Hit Points
                    30, // Speed
                    20, // Climb Speed
                    50, // Fly Speed
                    18, // Strength
                    12, // Dexterity
                    16, // Constitution
                    14, // Intelligence
                    11, // Wisdom
                    15, // Charisma
                    'A powerful fire-breathing dragon.'
                ], 
                (err) => {
                    if (err) {
                        console.error("Error inserting test creature", err.message);
                    } else {
                        console.log('Inserted a test creature.');

                        // Query to verify data insertion
                        db.all(`SELECT users.username, creatures.name, creatures.cr, creatures.notes
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
                                db.close(); // Close the database connection here
                            });
                    }
                }
            );
        }
    });
});