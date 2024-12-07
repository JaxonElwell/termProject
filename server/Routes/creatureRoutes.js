const express = require('express');
const router = express.Router();
const { createCreature, getCreature, getCreatures, getCreaturesAll, deleteCreature } = require('../apiCommands');

// Add a creature
router.post('/api/creature', (req, res) => {
    const { userId, name, cr, ac, hp, speed, climbSpeed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes } = req.body;
    createCreature(userId, name, cr, ac, hp, speed, climbSpeed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes, (err) => {
        if (err) {
            console.error('Error adding creature:', err);
            return res.status(500).send('Error adding creature');
        }
        res.status(200).send('Creature added successfully');
    });
});

// Get a creature
router.get('/api/creature/:userId/:name', (req, res) => {
    const { userId, name } = req.params;
    getCreature(userId, name, (err, creature) => {
        if (err) {
            console.error('Error getting creature:', err);
            return res.status(500).send('Error getting creature');
        }
        res.status(200).json(creature);
    });
});

// Get all creatures for a user
router.get('/api/creature/:userId', (req, res) => {
    const { userId } = req.params;
    getCreatures(userId, (err, creatures) => {
        if (err) {
            console.error('Error getting creatures:', err);
            return res.status(500).send('Error getting creatures');
        }
        res.status(200).json(creatures);
    });
});

// Get all creatures regardless of user
router.get('/api/creatures', (req, res) => {
    getCreaturesAll((err, creatures) => {
        if (err) {
            console.error('Error getting creatures:', err);
            return res.status(500).send('Error getting creatures');
        }
        res.status(200).json(creatures);
    });
});

// Delete a creature
router.delete('/api/creature/:id', (req, res) => {
    const { id } = req.params;
    deleteCreature(id, (err) => {
        if (err) {
            console.error('Error deleting creature:', err);
            return res.status(500).send('Error deleting creature');
        }
        res.status(200).json({ message: 'Creature deleted successfully' });
    });
});

// Delete all creatures for a user
router.delete('/api/creatures/:userId', (req, res) => {
    const { userId } = req.params;
    deleteAllCreaturesForUser(userId, (err) => {
        if (err) {
            console.error('Error deleting creatures:', err);
            return res.status(500).send('Error deleting creatures');
        }
        res.status(200).json({ message: 'All creatures deleted successfully' });
    });
});

module.exports = router;