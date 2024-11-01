import React from 'react';

const Modal = ({ creature, onClose }) => {
  if (!creature) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{creature.name}</h2>
        <p>{creature.description}</p>
        {/* Add more detailed information here */}
      </div>
    </div>
  );
};

export default Modal;