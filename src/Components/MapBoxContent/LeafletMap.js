import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // Important: This imports the default styles
import L from 'leaflet';  // Import the leaflet library
import LocationOnIcon from '@mui/icons-material/LocationOn';  // Import the icon

// Helper function to extract SVG path from the icon
function extractSVGPath(icon) {
    if (icon && icon.props && Array.isArray(icon.props.children)) {
        for (const child of icon.props.children) {
            if (child && child.props && child.type && child.type.displayName === "MUISvgIcon") {
                return child.props.children || '';
            }
        }
    }
    return '';
}

const svgIcon = <LocationOnIcon style={{ fontSize: 40, color: 'red' }} />;
const svgPath = extractSVGPath(svgIcon);

const svgUrl = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${svgIcon.props.style.fontSize}" height="${svgIcon.props.style.fontSize}" viewBox="0 0 24 24">
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

function LeafletMap({ stories, onMarkerClick }) {
    return (
        <MapContainer center={[21.8518, -102.2877]} zoom={6} style={{ width: '100%', height: '100vh' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* This is your test marker */}
            <Marker position={[21.8518, -102.2877]}>
                <Popup>
                    Test Marker
                </Popup>
            </Marker>

            {stories.map(story => (
                <Marker 
                  key={story.country} 
                  position={[parseFloat(story.latitude), parseFloat(story.longitude)]}
                  eventHandlers={{
                    click: () => {
                      onMarkerClick(story);
                    }
                  }}
                >
                    <Popup>
                        <strong>{story.title}</strong>
                        <p>{story.description}</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}


export default LeafletMap;
