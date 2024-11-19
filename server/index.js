const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

// Middlware
app.use(cors());
app.use(express.json());

// Database setup
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    else {
        console.log('Connected to the database.');
    }
});

// API endpoints
app.get('/users', (req, res) => {
    const sql = `
        SELECT * FROM users
    `;
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(400).send({'Internal server error'});
        }
        else {
            res.json({rows});
        }
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});