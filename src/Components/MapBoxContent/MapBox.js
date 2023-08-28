import { Box } from '@mui/material';
import Map from 'react-map-gl';

function MapBox() {
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
        mapStyle="mapbox://styles/folkiomap/cllu40olo00xn01qrh53b9u3i" // Your custom Mapbox style
      />
    </Box>
  );
}

export default MapBox;
