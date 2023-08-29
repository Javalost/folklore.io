import Map from 'react-map-gl';

function MapBox() {
  const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

  if (!mapboxToken) {
    return <div>Error: Mapbox token not found!</div>;
  }

  return (
    <>
      <Map
        mapboxAccessToken={mapboxToken}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/folkiomap/cllu40olo00xn01qrh53b9u3i"
      />
    </>
  );
}

export default MapBox;
