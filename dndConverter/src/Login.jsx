import React, { useState } from 'react';
import { login } from './Api'; // Import the login function
import RegisterModal from './RegisterModal'; // Import the RegisterModal component

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLogin = async () => {
    console.log('Login button clicked'); // Log when the login button is clicked
    try {
      await login(username, password);
    } catch (err) {
      console.error('Error logging in:', err);
    }
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <div className='content-container w-full bg-gradient-to-r from-gray-800 via-black to-cyan-500'>
      <div className='bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto'>
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
        <p className='text-sm text-gray-400 mt-4 text-center'>
          Don't have an account? <span onClick={handleRegisterClick} className='text-cyan-500 cursor-pointer'>Register</span>
        </p>
      </div>
      {showRegisterModal && <RegisterModal onClose={handleCloseRegisterModal} />}
    </div>
  );
};

export default Login;