import React from 'react';

const Home = () => {
    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
  
    return (
    <div className='content-container w-full bg-gradient-to-r from-gray-800 via-black  to-cyan-500'>
        <div className='bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto'>
            <h1>Welcome, User {userId}</h1>
            {/* Add more functionality for the user's creatures or actions */}
        </div>
    </div>
  );
};

export default Home;
