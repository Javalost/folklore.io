import React from 'react';
import { Map } from 'pigeon-maps';

function Pigeon() { 

  return (
    <Map 
      center={[51.5072, -0.1276]} 
      zoom={6} 
      width={'100%'} 
      height={'100%'}
      provider={(x, y, z) => {
        const s = String.fromCharCode(97 + ((x + y + z) % 3));
        return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
      }}
    />
  );
}

export default Pigeon;
