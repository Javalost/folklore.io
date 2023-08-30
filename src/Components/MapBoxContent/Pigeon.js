import React, { useState } from 'react';
import { Map, Marker, Overlay, } from 'pigeon-maps';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'; 
import {Paper} from '@mui/material'

function Pigeon({ stories }) {

  const [hoveredStory, setHoveredStory] = useState(null);

  const tooltipStyle = {
    backgroundColor: 'rgba(51, 51, 51, 0.8)',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '3px',
    whiteSpace: 'nowrap',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    fontWeight: 'bold',
  };

  const handleMouseEnter = (story) => {
    setHoveredStory(story);
  };

  const handleMouseLeave = () => {
    setHoveredStory(null);
  };

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
    >
      {stories.map((story, index) => (
        <Marker key={index} anchor={[parseFloat(story.latitude), parseFloat(story.longitude)]}>
          <Overlay anchor={[parseFloat(story.latitude), parseFloat(story.longitude)]} offset={[0, 20]}>
            <div 
              style={tooltipStyle}
              onMouseEnter={() => handleMouseEnter(story)}
              onMouseLeave={handleMouseLeave}
            >
              {story.name}
            </div>
            {hoveredStory === story && (
              <div style={{ position: 'absolute', top: '25px', left: '50%', transform: 'translateX(-50%)' }}>
                <Card>
                  <CardContent>
                    {/* Sample content. We can customize this further based on what you want */}
                    <h2>{story.name}</h2>
                    <p>{story.story.substring(0, 100)}...</p> {/* Displaying first 100 chars as a sample */}
                  </CardContent>
                </Card>
              </div>
            )}
          </Overlay>
        </Marker>
      ))}
    </Map>
  );
}

export default Pigeon;
