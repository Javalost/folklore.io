import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoriesContext from './StoriesContext'; // Adjusted import to default

const StoriesProvider = ({ children }) => {


    const [stories, setStories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/stories')
            .then(response => {
                setStories(response.data);
            })
            .catch(error => {
                console.error("Error fetching stories:", error);
            });
    }, []);

    return (
        <StoriesContext.Provider value={stories}>
            {children}
        </StoriesContext.Provider>
    );
};

export default StoriesProvider