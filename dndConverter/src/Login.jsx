import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Add your login logic here
      console.log('Logging in with', username, password);
    } catch (err) {
      console.error('Error logging in:', err);
    }
  };

  return (
    <div className='content-container w-full bg-gradient-to-r from-gray-800 from-10%  to-cyan-500'>
        {/* <div className='content-container w-full bg-gradient-to-r from-gray-800 from-10% via-black via-30%  to-cyan-500'></div> */}
      <div className='bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-3xl font-bold text-cyan-500 mb-6 text-center'>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='w-full p-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-2 mb-6 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500'
        />
        <button
          onClick={handleLogin}
          className='w-full p-2 bg-cyan-700 text-white rounded-md shadow-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500'
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;