// import SideBar from './SideBar';
// import ContentContainer from './Content';
// import ChannelBar from './ChannelBar';
// import Conversion from './Conversion';

// export default function App() {
//   return (
//     <div className="flex">
//       {/* <ChannelBar /> */}
//       <SideBar />
//       <ContentContainer />
//       {/* <Conversion /> */}
//     </div>
//   )
// }

import SideBar from './SideBar';
import ContentContainer from './Content';
import Add from './Add';
import ScrollableComponent from './ScrollAdd';

export default function App() {
  return (
    <div className="flex">
      {/* <ChannelBar /> */}
      <SideBar />
      {/* <ContentContainer /> */}
      <Add />
      {/* <ScrollableComponent /> */}
    </div>
  )
}

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SideBar from './SideBar';
// import ContentContainer from './Content';
// import Conversion from './Conversion';
// import Add from './Add'; // Example component for the add page
// import Profile from './Profile'; // Example component for the profile page

// export default function App() {
//   return (
//     <Router>
//       <div className="flex">
//         <SideBar />
//         <div className="main-content">
//           <Routes>
//             <Route path="/add" element={<Add />} />
//             <Route path="/profile" element={<Profile />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }