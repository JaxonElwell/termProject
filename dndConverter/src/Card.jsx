import React from 'react';

const Card = ({ creature, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(creature)}>
      <h3>{creature.name}</h3>
      <p>{creature.shortDescription}</p>
    </div>
  );
};

export default Card;