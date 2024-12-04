import React, { useState } from 'react';
import TopNavigation from './TopNavigation';
import { addCreature } from './Api'; // Import the addCreature function

const Add = () => {
  const [name, setName] = useState('');
  const [stats, setStats] = useState({
    size: '',
    ac: '',
    hp: '',
    speed: '',
    climbSpeed: '',
    flySpeed: '',
    proficiencyBonus: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
    cr: '',
    notes: ''
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
      size: '',
      ac: '',
      hp: '',
      speed: '',
      climbSpeed: '',
      flySpeed: '',
      proficiencyBonus: '',
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: '',
      cr: '',
      notes: ''
    });
  };

  const convertToPf2e = (name, stats) => {
    // This is a placeholder implementation
    return {
      name,
      size: stats.size,
      ac: stats.ac,
      hp: stats.hp,
      speed: stats.speed,
      climbSpeed: stats.climbSpeed,
      flySpeed: stats.flySpeed,
      proficiencyBonus: stats.proficiencyBonus,
      strength: stats.strength * 2,
      dexterity: stats.dexterity * 2,
      constitution: stats.constitution * 2,
      intelligence: stats.intelligence * 2,
      wisdom: stats.wisdom * 2,
      charisma: stats.charisma * 2,
      cr: stats.cr,
      notes: stats.notes
    };
  };

  const handleSave = async (creature) => {
    const data = {
      userId: 1, // Replace with the actual user ID
      name: creature.name,
      cr: creature.cr,
      ac: creature.ac,
      hp: creature.hp,
      speed: creature.speed,
      climbSpeed: creature.climbSpeed,
      flySpeed: creature.flySpeed,
      strength: creature.strength,
      dexterity: creature.dexterity,
      constitution: creature.constitution,
      intelligence: creature.intelligence,
      wisdom: creature.wisdom,
      charisma: creature.charisma,
      notes: creature.notes
    };

    try {
      await addCreature(data);
      console.log('Creature saved successfully');
    } catch (error) {
      console.error('Error saving creature:', error);
    }
  };

  return (
    <div className='content-container w-full overflow-auto'>
      <TopNavigation />
      <div className='form-container'>
        <h1 className='text-3xl font-bold text-cyan-500 mb-4'>Add DnD 5e Creature</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='mx-auto max-w-3xl'>
            <div>
              <label className='block text-xl font-bold text-cyan-500'>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='mt-1 block w-full px-3 py-2 bg-gray-500 border bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            <div>
              <label className='block text-sm font-semibold text-gray-500'>Size:</label>
              <input
                type="text"
                name="size"
                value={stats.size}
                onChange={handleInputChange}
                required
                className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            <hr className='border-t-2 border-gray-300 my-2' />
            <div>
              <label className='block text-sm font-semibold text-cyan-500'>Armor Class:</label>
              <input
                type="number"
                name="ac"
                value={stats.ac}
                onChange={handleInputChange}
                required
                className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            <div>
              <label className='block text-sm font-semibold text-cyan-500'>Hit Points:</label>
              <input
                type="number"
                name="hp"
                value={stats.hp}
                onChange={handleInputChange}
                required
                className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
            <div>
              <label className='block text-sm font-semibold text-cyan-500'>Speed:</label>
              <input
                type="number"
                name="speed"
                value={stats.speed}
                onChange={handleInputChange}
                required
                className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
              <div>
                <label className='block text-sm font-semibold text-cyan-500'>Climb Speed:</label>
                <input
                  type="number"
                  name="climbSpeed"
                  value={stats.climbSpeed}
                  onChange={handleInputChange}
                  required
                  className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-cyan-500'>Fly Speed:</label>
                <input
                  type="number"
                  name="flySpeed"
                  value={stats.flySpeed}
                  onChange={handleInputChange}
                  required
                  className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>
            <hr className='border-t-2 border-gray-300 my-2' />
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2'>
              <div>
                <label className='block text-sm font-semibold text-cyan-500'>Strength:</label>
                <input
                  type="number"
                  name="strength"
                  value={stats.strength}
                  onChange={handleInputChange}
                  required
                  className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
                  className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>
            <hr className='border-t-2 border-gray-300 my-2' />
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
              <div>
                <label className='block text-sm font-semibold text-cyan-500'>Challenge Rating:</label>
                <input
                  type="number"
                  name="cr"
                  value={stats.cr}
                  onChange={handleInputChange}
                  required
                  className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold text-cyan-500'>Proficiency Bonus:</label>
                <input
                  type="number"
                  name="proficiencyBonus"
                  value={stats.proficiencyBonus}
                  onChange={handleInputChange}
                  required
                  className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>
            <hr className='border-t-2 border-gray-300 my-2' />
            <div>
              <label className='block text-sm font-semibold text-cyan-500'>Notes:</label>
              <textarea
                name="notes"
                value={stats.notes}
                onChange={handleInputChange}
                className='mt-1 block w-full px-2 py-1 bg-gray-500 bg-opacity-90 border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              />
            </div>
            <div className='flex justify-center mt-4'>
              <button type="submit" className='px-4 py-2 bg-cyan-700 text-white rounded-md shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                Convert to Pf2e
              </button>
            </div>
          </div>
        </form>

        {convertedCreatures.length > 0 && (
          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {convertedCreatures.map((creature, index) => (
              <div key={index} className='card'>
                <h2 className='text-xl font-bold text-cyan-500 mb-2'>{creature.name}</h2>
                <p className='text-sm font-semibold text-gray-500'>{creature.size}</p>
                <hr className='border-t-2 border-gray-300 my-2' />
                <p><strong>Armor Class:</strong> {creature.ac}</p>
                <p><strong>Hit Points:</strong> {creature.hp}</p>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                  <p><strong>Speed:</strong> {creature.speed}</p>
                  <p><strong>Climb Speed:</strong> {creature.climbSpeed}</p>
                  <p><strong>Fly Speed:</strong> {creature.flySpeed}</p>
                </div>
                <hr className='border-t-2 border-gray-300 my-2' />
                <p><strong>Str:</strong> {creature.strength}, <strong>Dex:</strong> {creature.dexterity}, <strong>Con:</strong> {creature.constitution}, <strong>Int:</strong> {creature.intelligence}, <strong>Wis:</strong> {creature.wisdom}, <strong>Cha:</strong> {creature.charisma}</p>
                <hr className='border-t-2 border-gray-300 my-2' />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                  <p><strong>Challenge Rating:</strong> {creature.cr}</p>
                  <p><strong>Proficiency Bonus:</strong> {creature.proficiencyBonus}</p>
                </div>
                <hr className='border-t-2 border-gray-300 my-2' />
                <p><strong>Notes:</strong> {creature.notes.length > 100 ? `${creature.notes.substring(0, 100)}...` : creature.notes}</p>
                <div className='flex justify-center mt-4'>
                  <button onClick={() => handleSave(creature)} className='px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Add;