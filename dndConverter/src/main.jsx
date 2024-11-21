// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Add from './Add.jsx'
// import Profile from './Profile.jsx'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/add" element={<Add />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);