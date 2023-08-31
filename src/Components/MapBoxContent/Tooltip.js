import React from 'react';
import { Popup } from 'react-leaflet';

function Tooltip({ story, onClose }) {
  return (
    <Popup autoPan={false}>
      <div>
        <h4>{story.title}</h4>
        <p>{story.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Popup>
  );
}

export default Tooltip;
