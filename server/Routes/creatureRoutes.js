// Defines API endpoints for the creatures

const express = require('express');
const router = express.Router();
const Creature = require('../Models/Creature');

// Add a creature
router.post('/api/creature', (req, res) => {
    console.log('Received request to add creature:', req.body); // Log the request body
    const { userId, name, cr, ac, hp, speed, climbSpeed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes } = req.body;
    Creature.createCreature(userId, name, cr, ac, hp, speed, climbSpeed, flySpeed, strength, dexterity, constitution, intelligence, wisdom, charisma, notes, (err) => {
        if (err) {
            console.error('Error adding creature:', err);
            res.status(500).send('Error adding creature');
        } else {
            console.log('Creature added successfully'); // Log success message
            res.status(200).send('Creature added successfully');
        }
    });
});

// Get a creature
router.get('/api/creature/:userId/:name', (req, res) => {
    console.log('Received request to get creature:', req.params); // Log the request params
    const { userId, name } = req.params;
    Creature.getCreature(userId, name, (err, creature) => {
        if (err) {
            console.error('Error getting creature:', err);
            res.status(500).send('Error getting creature');
        } else {
            console.log('Creature retrieved successfully:', creature); // Log the retrieved creature
            res.status(200).json(creature);
        }
    });
});

// Get all creatures
router.get('/api/creatures/:userId', (req, res) => {
    console.log('Received request to get all creatures for user:', req.params); // Log the request params
    const { userId } = req.params;
    Creature.getCreatures(userId, (err, creatures) => {
        if (err) {
            console.error('Error getting creatures:', err);
            res.status(500).send('Error getting creatures');
        } else {
            console.log('Creatures retrieved successfully:', creatures); // Log the retrieved creatures
            res.status(200).json(creatures);
        }
    });
});

module.exports = router;