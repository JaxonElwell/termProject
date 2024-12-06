import React from 'react';

const CreatureCard = ({ creature, onClick }) => {
  return (
    <div onClick={onClick} className='card m-4 p-4 bg-gray-800 text-white rounded-lg shadow-md w-full sm:w-2/3 lg:w-1/4 cursor-pointer'>
      <h2 className='text-xl font-bold text-cyan-500 mb-2'>{creature.name}</h2>
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
      <p><strong>Notes:</strong> {creature.notes.length > 100 ? `${creature.notes.substring(0, 100)}...` : creature.notes}</p>
    </div>
  );
};

export default CreatureCard;