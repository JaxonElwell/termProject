const express = require('express');
const router = express.Router();
const Creature = require('../Models/Creature'); // Ensure this path is correct

// Create a creature
router.post('/api/creature', (req, res) => {
    const { userId, name, cr, ac, hp, speed, climbSpeed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes } = req.body;

    Creature.createCreature(userId, name, cr, ac, hp, speed, climbSpeed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes, (err) => {
        if (err) {
            console.error('Error adding creature:', err);
            return res.status(500).json({ error: 'Error adding creature' });
        }
        res.status(201).json({ message: 'Creature added successfully' });
    });
});


// Get all creatures for a specific user
router.get('/api/creatures/:userId', (req, res) => {
    const { userId } = req.params;
    Creature.getCreatures(userId, (err, creatures) => {
        if (err) {
            console.error('Error getting creatures:', err);
            return res.status(500).send('Error getting creatures');
        }
        res.status(200).json(creatures);
    });
});

// Get all creatures regardless of user
router.get('/api/creatures', (req, res) => {
    Creature.getCreaturesAll((err, creatures) => {
        if (err) {
            console.error('Error getting creatures:', err);
            return res.status(500).send('Error getting creatures');
        }
        res.status(200).json(creatures);
    });
});

// Get a specific creature for a user
router.get('/api/creature/:userId/:name', (req, res) => {
    const { userId, name } = req.params;
    Creature.getCreature(userId, name, (err, creature) => {
        if (err) {
            console.error('Error getting creature:', err);
            return res.status(500).send('Error getting creature');
        }
        res.status(200).json(creature);
    });
});

module.exports = router;
