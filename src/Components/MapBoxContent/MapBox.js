import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

function MapBox() {
    const mapContainerRef = useRef(null);
    const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN;

    useEffect(() => {
        if (!mapboxToken) {
            console.error("Error: Mapbox token not found!");
            return;
        }

        mapboxgl.accessToken = mapboxToken;
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/folkiomap/cllu40olo00xn01qrh53b9u3i',
            center: [-122.4, 37.8], 
            zoom: 14
        });

        // Cleanup on unmount
        return () => {
            map.remove();
        };
    }, [mapboxToken]); // The dependency array ensures this useEffect runs once and if the token changes.

    if (!mapboxToken) {
        return <div>Error: Mapbox token not found!</div>;
    }

    return <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />;
}

export default MapBox;
