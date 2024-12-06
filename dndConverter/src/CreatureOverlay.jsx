import React from 'react';

const CreatureOverlay = ({ creature, onClose }) => {
  if (!creature) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center' onClick={handleBackgroundClick}>
      <div className='relative bg-gray-800 text-white rounded-lg shadow-md p-6 w-11/12 sm:w-2/3 lg:w-1/3'>
        <button onClick={onClose} className='absolute top-4 right-4 text-white text-2xl'>
          &times;
        </button>
        <h2 className='text-2xl font-bold text-cyan-500 mb-4'>{creature.name}</h2>
        <p className='text-sm font-semibold text-gray-500'>{creature.size}</p>
        <hr className='border-t-2 border-gray-300 my-2' />
        <p><strong>Armor Class:</strong> {creature.ac}</p>
        <p><strong>Hit Points:</strong> {creature.hp}</p>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
          <p><strong>Speed:</strong> {creature.speed}</p>
          <p><strong>Climb Speed:</strong> {creature.climb_speed}</p>
          <p><strong>Fly Speed:</strong> {creature.fly_speed}</p>
        </div>
        <hr className='border-t-2 border-gray-300 my-2' />
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2'>
          <p><strong>Str:</strong> {creature.strength}</p>
          <p><strong>Dex:</strong> {creature.dexterity}</p>
          <p><strong>Con:</strong> {creature.constitution}</p>
          <p><strong>Int:</strong> {creature.intelligence}</p>
          <p><strong>Wis:</strong> {creature.wisdom}</p>
          <p><strong>Cha:</strong> {creature.charisma}</p>
        </div>
        <hr className='border-t-2 border-gray-300 my-2' />
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
          <p><strong>Challenge Rating:</strong> {creature.cr}</p>
          <p><strong>Proficiency Bonus:</strong> {creature.proficiency_bonus}</p>
        </div>
        <hr className='border-t-2 border-gray-300 my-2' />
        <p><strong>Notes:</strong> {creature.notes}</p>
      </div>
    </div>
  );
};

export default CreatureOverlay;