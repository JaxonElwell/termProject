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
// name, cr, ac, speed, clmbSpeed, flySpeed, str, dex, con, int, wis, cha, notes
function createCreature(userId, name, cr, ac, speed, clmbSpeed, flySpeed, str, dex, con, int, wis, cha, notes, callback) {
    db.run(`
        INSERT INTO creatures (user_id, name, cr, ac, speed, clmbSpeed, flySpeed, str, dex, con, int, wis, cha, notes) 
        VALUES (?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?)`,
        [userId, name, cr, ac, speed, clmbSpeed, flySpeed, str, dex, con, int, wis, cha, notes],
        (err) => {
            if (err) {
                console.error("Error creating creature", err.message);
                callback(err);
            } else {
                callback(null);
            }
        });
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
function deleteCreature(userId, name, callback) {
    db.run(`DELETE FROM creatures WHERE user_id = ? AND name = ?`, [userId, name], (err) => {
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

// Get a user by username
function getUser(username, callback) {
    db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
        if (err) {
            console.error("Error getting user", err.message);
            callback(err);
        } else {
            callback(null, row);
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
    getUser
};