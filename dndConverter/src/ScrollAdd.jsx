import React from 'react';
import Add from './Add';

function ScrollableComponent() {
  return (
    <div className="h-screen w-screen px-4 overflow-y-'scroll' overflow-x-hidden">
      <Add />
    </div>
  );
}

export default ScrollableComponent;