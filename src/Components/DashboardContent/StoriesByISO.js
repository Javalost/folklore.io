import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/material';

const StoriesByISO = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/stories');
                setStories(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message || "An error occurred.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const isoData = {};

    stories.forEach(story => {
        if (isoData[story.iso]) {
            isoData[story.iso]++;
        } else {
            isoData[story.iso] = 1;
        }
    });

    const pieData = Object.keys(isoData).map((iso, index) => ({
        id: index,
        value: isoData[iso],
        label: iso
    }));

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', border: 'solid', width: '100%' }}>
            <PieChart
                series={[{ data: pieData }]}
                width={400}
                height={200}
            />

        </Box>
    );
};

export default StoriesByISO;
