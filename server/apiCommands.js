// CRUD operations for the API commands
// This file is used to interact with the database
//

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

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

// Create a creature
function createCreature(userId, name, cr, ac, hp, speed, climbSpeed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes, callback) {
    db.run(`
        INSERT INTO creatures (user_id, name, cr, ac, hp, speed, climb_speed, fly_speed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [userId, name, cr, ac, hp, speed, climbSpeed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes],
        (err) => {
            if (err) {
                console.error("Error inserting creature", err.message);
                callback(err);
            } else {
                callback(null);
            }
        }
    );
}

// Update a creature
function updateCreature(userId, name, cr, ac, speed, clmbSpeed, flySpeed, str, dex, con, int, wis, cha, notes, callback) {
    db.run(`
        UPDATE creatures 
        SET cr = ?,
            ac = ?,
            speed = ?,
            clmbSpeed = ?,
            flySpeed = ?,
            str = ?,
            dex = ?,
            con = ?,
            int = ?,
            wis = ?,
            cha = ?,
            notes = ?
        WHERE user_id = ? AND name = ?`,
        [cr, ac, speed, clmbSpeed, flySpeed, str, dex, con, int, wis, cha, notes, userId, name],
        (err) => {
            if (err) {
                console.error("Error updating creature", err.message);
                callback(err);
            } else {
                callback(null);
            }
        });
}

// Delete a creature
function deleteCreature(id, callback) {
    db.run(`DELETE FROM creatures WHERE id = ?`, [id], (err) => {
        if (err) {
            console.error("Error deleting creature", err.message);
            callback(err);
        } else {
            callback(null);
        }
    });
}

// Create a user
function createUser(username, password, callback) {
    db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password], (err) => {
        if (err) {
            console.error("Error creating user", err.message);
            callback(err);
        } else {
            callback(null);
        }
    });
}

// Get a user by username and password
function getUser(username, password, callback) {
    db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, row) => {
        if (err) {
            console.error("Error getting user", err.message);
            callback(err);
        } else {
            callback(null, row);
        }
    });
}

// Get a user by ID
function getUserById(userId, callback) {
    db.get(`SELECT username FROM users WHERE id = ?`, [userId], (err, row) => {
        if (err) {
            console.error("Error getting user", err.message);
            callback(err);
        } else {
            callback(null, row);
        }
    });
}

// Delete all creatures for a user
function deleteAllCreaturesForUser(userId, callback) {
    db.run(`DELETE FROM creatures WHERE user_id = ?`, [userId], (err) => {
        if (err) {
            console.error("Error deleting creatures", err.message);
            callback(err);
        } else {
            callback(null);
        }
    });
}

module.exports = {
    getCreatures,
    getCreature,
    getCreaturesAll,
    createCreature,
    updateCreature,
    deleteCreature,
    createUser,
    getUserById,
    getUser,
    deleteAllCreaturesForUser
};