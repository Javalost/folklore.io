import React from 'react';
import { Popup } from 'react-leaflet';

function Tooltip({ story, onClose }) {
  return (
    <Popup autoPan={false}>
      <div style={{ width: '350px', minHeight: '220px', padding: '15px', borderRadius: '8px' }}>
        <h4 style={{ fontSize: '1.5em', marginBottom: '15px' }}>{story.title}</h4>
        <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>{story.description}</p>
        <button onClick={onClose} style={{ padding: '8px 12px', fontSize: '1em', borderRadius: '5px', cursor: 'pointer' }}>
          Close
        </button>
      </div>
    </Popup>
  );
}

export default Tooltip;
