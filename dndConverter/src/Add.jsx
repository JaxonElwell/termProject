import React, { useState } from 'react';
import TopNavigation from './TopNavigation';

/*
    This component is used to add a new DnD 5e creature to the list.

    ToDo:
    - Implement the correct formulas
    - Fix scrolling
*/


const Add = () => {
  const [name, setName] = useState('');
  const [stats, setStats] = useState({
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: ''
  });
  const [convertedCreatures, setConvertedCreatures] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStats({
      ...stats,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the input data using your formulas
    const converted = convertToPf2e(name, stats);
    setConvertedCreatures([...convertedCreatures, converted]);
    setName('');
    setStats({
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: ''
    });
  };

  const convertToPf2e = (name, stats) => {
    // This is a placeholder implementation
    return {
      name,
      strength: stats.strength * 2,
      dexterity: stats.dexterity * 2,
      constitution: stats.constitution * 2,
      intelligence: stats.intelligence * 2,
      wisdom: stats.wisdom * 2,
      charisma: stats.charisma * 2
    };
  };

  return (
    <div className='content-container'>
      <TopNavigation />
      <div className='form-container'>
        <h1 className='text-2xl font-bold mb-4'>Add DnD 5e Creature</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-semibold text-cyan-500'>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='mt-1 block w-full px-3 py-2 bg-gray-500 border bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-cyan-500'>Strength:</label>
            <input
              type="number"
              name="strength"
              value={stats.strength}
              onChange={handleInputChange}
              required
              className='mt-1 block w-full px-3 py-2 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-cyan-500'>Dexterity:</label>
            <input
              type="number"
              name="dexterity"
              value={stats.dexterity}
              onChange={handleInputChange}
              required
              className='mt-1 block w-full px-3 py-2 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-cyan-500'>Constitution:</label>
            <input
              type="number"
              name="constitution"
              value={stats.constitution}
              onChange={handleInputChange}
              required
              className='mt-1 block w-full px-3 py-2 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-cyan-500'>Intelligence:</label>
            <input
              type="number"
              name="intelligence"
              value={stats.intelligence}
              onChange={handleInputChange}
              required
              className='mt-1 block w-full px-3 py-2 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-cyan-500'>Wisdom:</label>
            <input
              type="number"
              name="wisdom"
              value={stats.wisdom}
              onChange={handleInputChange}
              required
              className='mt-1 block w-full px-3 py-2 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-cyan-500'>Charisma:</label>
            <input
              type="number"
              name="charisma"
              value={stats.charisma}
              onChange={handleInputChange}
              required
              className='mt-1 block w-full px-3 py-2 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>
          <button type="submit" className='mt-4 px-4 py-2 bg-cyan-700 text-white rounded-md shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            Convert to Pf2e
          </button>
        </form>

        {convertedCreatures.length > 0 && (
          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {convertedCreatures.map((creature, index) => (
              <div key={index} className='card'>
                <h2 className='text-xl font-bold mb-4'>{creature.name}</h2>
                <p><strong>Strength:</strong> {creature.strength}</p>
                <p><strong>Dexterity:</strong> {creature.dexterity}</p>
                <p><strong>Constitution:</strong> {creature.constitution}</p>
                <p><strong>Intelligence:</strong> {creature.intelligence}</p>
                <p><strong>Wisdom:</strong> {creature.wisdom}</p>
                <p><strong>Charisma:</strong> {creature.charisma}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Add;