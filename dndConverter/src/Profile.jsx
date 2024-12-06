import React from 'react';

const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem('userId');
    window.location.href = '/login';
  };

  return (
    <div className='content-container w-full bg-gradient-to-r from-gray-800 via-black to-cyan-500'>
      <div className='bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto'>
        <h2 className='text-3xl font-bold text-cyan-500 mb-6 text-center'>Profile</h2>
        <p className='text-white mb-6'>This is the profile page</p>
        <button
          onClick={handleLogout}
          className='w-full p-2 bg-red-700 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;