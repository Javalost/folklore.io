import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Typography, Avatar } from '@mui/material';

const WORLD_BOUNDS = [
    [-85, -180],
    [85, 180]
];

const svgPath = `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>`;

const svgUrl = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
    ${svgPath}
  </svg>
`);

const customIcon = new L.Icon({
  iconUrl: `data:image/svg+xml,${svgUrl}`,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
}); 

function LeafletMap({ stories, onMarkerClick, mapCenter }) { 
    console.log('LeafletMap received mapCenter:', mapCenter);

    const handleMoveEnd = (event) => {
        const { lat, lng } = event.target.getCenter();

        // Ensure that longitude stays within bounds
        let newLng = lng;
        if (newLng < -180) {
            newLng += 360;
        } else if (newLng > 180) {
            newLng -= 360;
        }
        console.log('Map move end - Current center (Leaflet):', lat, lng);
        console.log('Map move end - Received mapCenter(Leaflet):', mapCenter);
        if (lat !== mapCenter[0] || lng !== mapCenter[1]) {
            event.target.panTo([mapCenter[0], newLng]);
        }
    };

    return (
        <MapContainer 
            center={mapCenter} 
            zoom={6} 
            style={{ width: '100%', height: '100vh' }}
            maxBounds={WORLD_BOUNDS}
            minZoom={3}
            whenReady={handleMoveEnd}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                noWrap={true}
            />

            {stories.map(story => (
                <Marker 
                  key={story.country} 
                  position={[parseFloat(story.latitude), parseFloat(story.longitude)]}
                  icon={customIcon}
                >
                    <Popup>
                        <div 
                            onClick={() => onMarkerClick(story)}
                            style={{ 
                                cursor: 'pointer', 
                                backgroundColor: ' #2979ff',
                                color: 'white',
                                border: 'solid 1px black',  
                                borderRadius: '10px', 
                                display: 'flex',
                                justifyContent: 'space-between', 
                                alignItems: 'center',  // changed from alignContent
                                padding: '10px 15px', 
                                width: '260px'
                            }}
                        >
                            <Typography variant="h6" style={{ wordWrap: 'break-word', marginTop: '3px' }}>
                                {story.name} 
                            </Typography> 
                            <Avatar 
                                src={`https://flagcdn.com/w640/${story.country.toLowerCase()}.png`}
                                alt={`${story.country} flag`}
                                sx={{ width: 40, height: 40 }} 
                            />
                        </div>
                        <div style={{ backgroundColor: '#f5f5f5', padding: '8px 10px', width: '260px' }}>
                            <Typography 
                                variant="body2" 
                                color="text.secondary"
                                style={{
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 4,  
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    width: '100%',
                                    wordWrap: 'break-word'
                                }}
                            >
                                {story.story}
                            </Typography>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default LeafletMap;