import React from 'react';
import { Map, Marker } from 'pigeon-maps';

function Pigeon() {
  const center = [51.5072, -0.1276]; // London's coordinates

  return (
    <Map center={center} zoom={14} width="100%" height="100vh">
      <Marker anchor={center}>
        <div style={{ backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '50%' }}>
          London
        </div>
      </Marker>
    </Map>
  );
}

export default Pigeon;
