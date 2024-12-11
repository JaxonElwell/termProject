import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SideBar from './SideBar';
import Home from './Home';
import Add from './Add';
import Profile from './Profile';
import Collection from './Collection';
import Login from './Login';

// Helper function to check if the user is logged in
const isAuthenticated = () => {
  const userId = localStorage.getItem('userId');
  return !!userId; // Returns true if userId exists
};

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default function App() {
  return (
    <div className="flex">
      <div className="flex w-full">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route path="/add" element={<ProtectedRoute element={<Add />} />} />
          <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/collection" element={<ProtectedRoute element={<Collection />} />} />
        </Routes>
      </div>
      <SideBar />
    </div>
  );
}