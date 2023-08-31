import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // Important: This imports the default styles
import L from 'leaflet';  // Import the leaflet library 
import { Typography, Avatar } from '@mui/material';
//import LocationOnIcon from '@mui/icons-material/LocationOn';  // Import the icon

// Set the bounds to restrict the map view
const WORLD_BOUNDS = [
    [-85, -180],  // Southwest coordinates
    [85, 180]     // Northeast coordinates
];




// Get the SVG string of the LocationOn icon and convert it to data URI format

const svgPath = `<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>`;

const svgUrl = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
    ${svgPath}
  </svg>
`);

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: `data:image/svg+xml,${svgUrl}`,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
}); 

function handleMoveEnd(event) {
    const { lat, lng } = event.target.getCenter();
    let newLng = lng;
    
    while (newLng < -180) {
        newLng += 360;
    }
    
    while (newLng > 180) {
        newLng -= 360;
    }
    
    if (lng !== newLng) {
        event.target.panTo([lat, newLng]);
    }
}


function LeafletMap({ stories, onMarkerClick }) {
    return (
        <MapContainer 
            center={[21.8518, -102.2877]} 
            zoom={8} 
            style={{ width: '100%', height: '100vh' }}
            maxBounds={WORLD_BOUNDS}
            maxZoom={5}  // this line will prevent users from zooming out further than the default zoom level
        >





            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                noWrap={true} // add this
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
                                backgroundColor: '#2979ff',
                                color: 'white',
                                border: 'solid 1px black',  
                                borderRadius: '10px', 
                                display: 'flex',
                                justifyContent: 'space-between', 
                                alignContent: 'center',
                                padding: '10px 15px', 
                                width: '260px'  // this is slightly less than 280px considering padding
                            }}
                        >
                            <Typography variant="h6" style={{ wordWrap: 'break-word', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '3px' }}>
                                {story.name}
                            </Typography> 
                            <Avatar 
                                src={`https://flagcdn.com/w640/${story.country.toLowerCase()}.png`}
                                alt={`${story.country} flag`}
                                sx={{ width: 40, height: 40 }}
                            />
                        </div>
                        <div style={{ backgroundColor: '#yourColorForStory', padding: '8px 10px', width: '260px' }}>
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
