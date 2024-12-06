import React, { useEffect, useState } from 'react';
import { getCreaturesAll } from './Api';
import TopNavigation from './TopNavigation';
import CreatureCard from './CreatureCard';
import CreatureOverlay from './CreatureOverlay'; // Import the CreatureOverlay component

const Collection = () => {
  const [creatures, setCreatures] = useState([]);
  const [selectedCreature, setSelectedCreature] = useState(null);

  // Get all creatures from the database
  useEffect(() => {
    getCreaturesAll()
      .then(creatures => setCreatures(creatures))
      .catch(err => console.error('Error getting creatures', err.message));
  }, []);

  const handleCardClick = (creature) => {
    setSelectedCreature(creature);
  };

  const handleCloseOverlay = () => {
    setSelectedCreature(null);
  };

  return (
    <div className='content-container w-full overflow-auto'>
      <TopNavigation />
      <div className='flex flex-wrap justify-center'>
        {creatures.map(creature => (
          <CreatureCard key={creature.id} creature={creature} onClick={() => handleCardClick(creature)} />
        ))}
      </div>
      {selectedCreature && <CreatureOverlay creature={selectedCreature} onClose={handleCloseOverlay} />}
    </div>
  );
};

export default Collection;