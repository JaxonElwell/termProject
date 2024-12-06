// Handles SQLite3 interactions for the Creature table

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Create a creature
function createCreature(userId, name, cr, ac, hp, speed, climbSpeed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes, callback) {
    const sql = `
        INSERT INTO creatures (user_id, name, cr, ac, hp, speed, climb_speed, fly_speed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.run(sql, [userId, name, cr, ac, hp, speed, climbSpeed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes], callback);
}

// Get a creature by name
function getCreature(userId, name, callback) {
    db.get(`SELECT * FROM creatures WHERE user_id = ? AND name = ?`, [userId, name], (err, row) => {
        if (err) {
            console.error("Error getting creature", err.message);
            callback(err);
        } else {
            callback(null, row);
        }
    });
}

// Get all creatures for a user
function getCreatures(userId, callback) {
    db.all(`SELECT * FROM creatures WHERE user_id = ?`, [userId], (err, rows) => {
        if (err) {
            console.error("Error getting creatures", err.message);
            callback(err);
        } else {
            callback(null, rows);
        }
    });
}

// Get all creatures regardless of user
function getCreaturesAll(callback) {
    db.all(`SELECT * FROM creatures`, (err, rows) => {
        if (err) {
            console.error("Error getting creatures", err.message);
            callback(err);
        } else {
            callback(null, rows);
        }
    });
}

module.exports = {
    createCreature,
    getCreature,
    getCreatures,
    getCreaturesAll
};