import React, { useEffect, useState } from 'react';
import { getCreatures, deleteCreature } from './Api'; // Import the deleteCreature function
import TopNavigation from './TopNavigation';
import CreatureCard from './CreatureCard';
import CreatureOverlay from './CreatureOverlay'; // Import the CreatureOverlay component

const Collection = () => {
  const [creatures, setCreatures] = useState([]);
  const [selectedCreature, setSelectedCreature] = useState(null);
  const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

  // Get all creatures for the specific user from the database
  useEffect(() => {
    if (userId) {
      getCreatures(userId)
        .then(creatures => setCreatures(creatures))
        .catch(err => console.error('Error getting creatures', err.message));
    }
  }, [userId]);

  const handleCardClick = (creature) => {
    setSelectedCreature(creature);
  };

  const handleCloseOverlay = () => {
    setSelectedCreature(null);
  };

  const handleDelete = (creatureId) => {
    if (window.confirm('Are you sure you want to delete this creature?')) {
      deleteCreature(creatureId)
        .then(() => {
          setCreatures(creatures.filter(creature => creature.id !== creatureId));
          console.log('Creature deleted successfully');
        })
        .catch(err => console.error('Error deleting creature', err.message));
    }
  };

  return (
    <div className='content-container w-full overflow-auto'>
      <TopNavigation />
      <div className='flex flex-wrap justify-center'>
        {creatures.map(creature => (
          <CreatureCard
            key={creature.id}
            creature={creature}
            onClick={() => handleCardClick(creature)}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {selectedCreature && <CreatureOverlay creature={selectedCreature} onClose={handleCloseOverlay} />}
    </div>
  );
};

export default Collection;