const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Create a new creature
exports.createCreature = (userId, name, cr, ac, hp, speed, climbSpeed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes, callback) => {
    const query = `
        INSERT INTO creatures (
            user_id, name, cr, ac, hp, speed, climb_speed, fly_speed,
            strength, dexterity, constitution, intelligence, wisdom, charisma, notes
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.run(query, [
        userId, name, cr, ac, hp, speed, climbSpeed, flySpeed,
        strength, dexterity, constitution, intelligence, wisdom, charisma, notes
    ], function (err) {
        callback(err);
    });
};

// Get all creatures for a specific user
exports.getCreatures = (userId, callback) => {
    const query = `SELECT * FROM creatures WHERE user_id = ?`;
    db.all(query, [userId], (err, rows) => {
        callback(err, rows);
    });
};

// Get all creatures regardless of user
exports.getCreaturesAll = (callback) => {
    const query = `SELECT * FROM creatures`;
    db.all(query, [], (err, rows) => {
        callback(err, rows);
    });
};

// Get a specific creature by name for a user
exports.getCreature = (userId, name, callback) => {
    const query = `SELECT * FROM creatures WHERE user_id = ? AND name = ?`;
    db.get(query, [userId, name], (err, row) => {
        callback(err, row);
    });
};
