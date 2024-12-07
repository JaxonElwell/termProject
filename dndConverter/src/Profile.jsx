import React from 'react';

const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem('userId');
    window.location.href = '/login';
  };

  const handleDeleteAllCreatures = () => {
    const userId = localStorage.getItem('userId');
    if (window.confirm('Are you sure you want to delete all your creatures?')) {
      fetch(`http://localhost:5000/api/creatures/${userId}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete creatures');
          }
          return response.json();
        })
        .then(data => {
          console.log(data.message);
          alert('All creatures deleted successfully');
        })
        .catch(err => {
          console.error('Error deleting creatures:', err);
          alert('Error deleting creatures');
        });
    }
  };

  return (
    <div className='content-container w-full bg-gradient-to-r from-gray-800 via-black to-cyan-500'>
      <div className='bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto'>
        <h2 className='text-3xl font-bold text-cyan-500 mb-6 text-center'>Profile Settings</h2>
        <p className='text-white mb-6'></p>
        <button
          onClick={handleLogout}
          className='w-full p-2 bg-red-700 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
        >
          Logout
        </button>
        {/* <button
          onClick={handleDeleteAllCreatures}
          className='w-full p-2 bg-red-700 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 mt-4'
        >
          Delete All Creatures
        </button> */}
      </div>
    </div>
  );
};

export default Profile;