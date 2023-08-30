import React from 'react';
import { Map, Marker } from 'pigeon-maps';

function Pigeon({ stories }) {
    // Marker style
    const customMarkerStyle = {
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)'
    };

    return (
        <Map 
            center={[21.8518, 102.2877]} // I've changed this to your coordinates just for easier spotting
            zoom={6} 
            width={'100%'} 
            height={'100%'}
            provider={(x, y, z) => {
                const s = String.fromCharCode(97 + ((x + y + z) % 3));
                return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
            }}
        >

            {/* Custom marker */}
            <Marker anchor={[21.8518, -102.2877]}>
                <div style={customMarkerStyle}></div>
            </Marker>

        </Map>
    );
}

export default Pigeon;
