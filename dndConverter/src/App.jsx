import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from './SideBar';
import ContentContainer from './Content';
import Add from './Add';
import Profile from './Profile';

export default function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex w-full">
        <Routes>
          <Route path="/" element={<ContentContainer />} />
          <Route path="/add" element={<Add />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

// import SideBar from './SideBar';
// import ContentContainer from './Content';
// import Add from './Add';
// import ScrollableComponent from './ScrollAdd';

// export default function App() {
//   return (
//     <div className="flex">
//       {/* <ChannelBar /> */}
//       <SideBar />
//       {/* <ContentContainer /> */}
//       <Add />
//       {/* <ScrollableComponent /> */}
//     </div>
//   )
// }