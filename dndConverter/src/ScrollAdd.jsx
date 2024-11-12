import React from 'react';
import Add from './Add';

function ScrollableComponent() {
  return (
    <div className="h-screen w-screen overflow-y-auto overflow-x-hidden">
      <Add />
    </div>
  );
}

export default ScrollableComponent;