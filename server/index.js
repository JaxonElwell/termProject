const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const creatureRoutes = require('./Routes/creatureRoutes');
app.use(creatureRoutes);

// Connect to database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the database.');
    }
});

// Seed the database with a test user (for development purposes)
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
            console.error('Error creating users table:', err.message);
        } else {
            console.log('Users table is ready.');
        }
    });

    // Insert a test user if it doesn't exist
    // db.get(`SELECT * FROM users WHERE username = ?`, ['testuser'], (err, row) => {
    //     if (err) {
    //         console.error('Error checking for test user:', err.message);
    //     } else if (!row) {
    //         db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, ['testuser', 'testpass'], (err) => {
    //             if (err) {
    //                 console.error('Error inserting test user:', err.message);
    //             } else {
    //                 console.log('Test user added: username="testuser", password="testpass"');
    //             }
    //         });
    //     } else {
    //         console.log('Test user already exists.');
    //     }
    // });
});

// Login endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Login request received:', { username, password });

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, row) => {
        if (err) {
            console.error('Error querying database:', err.message);
            return res.status(500).json({ error: 'Internal server error.' });
        }

        if (!row) {
            console.log('Invalid login attempt.');
            return res.status(401).json({ error: 'Invalid credentials.' });
        }

        console.log('Login successful:', row);
        res.json({ userId: row.id, username: row.username });
    });
});

// Register endpoint
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    // Check if the username already exists
    db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
        if (err) {
            console.error('Error querying database:', err.message);
            return res.status(500).json({ error: 'Internal server error.' });
        }

        if (row) {
            console.log('Attempt to register with an existing username:', username);
            return res.status(409).json({ error: 'Username already exists.' });
        }

        // Insert the new user
        db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password], (err) => {
            if (err) {
                console.error('Error inserting user:', err.message);
                return res.status(500).json({ error: 'Internal server error.' });
            }

            console.log('User registered successfully:', username);
            res.status(201).json({ message: 'User registered successfully.' });
        });
    });
});


// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
