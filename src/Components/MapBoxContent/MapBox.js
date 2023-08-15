import React, { useState } from 'react';
import { Box } from '@mui/material';
import Map from 'react-map-gl';

function MapBox() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  // Ensuring the token is being read correctly
  const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

  if (!mapboxToken) {
    return <div>Error: Mapbox token not found!</div>;
  }

  return (
    <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/folkiomap/cll7fzaqx00pf01qnhh9ogal8" // Your custom Mapbox style
      />
    </Box>
  );
}

export default MapBox;
