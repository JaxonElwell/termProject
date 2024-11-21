// Display the user's collection of D&D 5e creatures that have been converted to Pathfinder 2e from the database

// import React, { useState, useEffect } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import App from './App.jsx'
// import Add from './Add.jsx'
// import Profile from './Profile.jsx'

// const Collection = () => {
//     const [creatures, setCreatures] = useState([])

//     useEffect(() => {
//         fetch('/api/creatures')
//             .then(res => res.json())
//             .then(data => setCreatures(data))
//     }, [])

//     return (
//         <div>
//             <h1>Collection</h1>
//             <ul>
//                 {creatures.map(creature => (
//                     <li key={creature.id}>{creature.name}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Collection;

import React, { useState } from 'react';
import TopNavigation from './TopNavigation';

// temporary page for testing, just to see if the TopNavigation component works
// only displays the TopNavigation component and the name of the page
const Collection = () => {
  return (
    <div className='content-container w-full overflow-auto'>
      <TopNavigation />
      <h1>Collection</h1>
    </div>
  );
};

export default Collection;
