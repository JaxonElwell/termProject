import React, { useEffect, useState } from 'react';

const Home = () => {
  const [username, setUsername] = useState('');
  const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/user/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch username');
        }
        const data = await response.json();
        setUsername(data.username);
      } catch (err) {
        console.error('Error fetching username:', err);
      }
    };

    if (userId) {
      fetchUsername();
    }
  }, [userId]);

  return (
    <div className='content-container w-full bg-gradient-to-r from-gray-800 via-black to-cyan-500'>
      <div className='bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto'>
        <h1>Welcome, {username}</h1>
        {/* Add more functionality for the user's creatures or actions */}
      </div>
    </div>
  );
};

export default Home;