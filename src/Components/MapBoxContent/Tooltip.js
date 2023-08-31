// Tooltip.jsx

import React from 'react';

function Tooltip({ story, onClose }) {
  return (
    <div 
      style={{ 
        backgroundColor: 'white', 
        padding: '10px', 
        borderRadius: '4px', 
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' 
      }}
    >
      <h4>{story.title}</h4>
      <p>{story.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Tooltip;
