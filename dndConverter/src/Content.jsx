import React, { useState } from 'react';
import TopNavigation from './TopNavigation';
import Card from './Card';
import Modal from './Modal';

const creatures = [
  { name: 'Dragon', shortDescription: 'A fierce dragon', description: 'Detailed information about the dragon.' },
  { name: 'Unicorn', shortDescription: 'A magical unicorn', description: 'Detailed information about the unicorn.' },
  // Add more creatures here
];

const ContentContainer = () => {
  const [selectedCreature, setSelectedCreature] = useState(null);

  const handleCardClick = (creature) => {
    setSelectedCreature(creature);
  };

  const handleCloseModal = () => {
    setSelectedCreature(null);
  };

  return (
    <div className='content-container'>
      <TopNavigation />
      <div className='card-container'>
        {creatures.map((creature, index) => (
          <Card
            key={index}
            creature={creature}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <Modal creature={selectedCreature} onClose={handleCloseModal} />
    </div>
  );
};

export default ContentContainer;