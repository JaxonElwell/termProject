const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const creatureRoutes = require('./routes/creatureRoutes'); // Adjust path if needed

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database.');
    }
});

// Export the database for use in routes
module.exports = db;

// Register routes
app.use(creatureRoutes);

// Handle undefined routes
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
