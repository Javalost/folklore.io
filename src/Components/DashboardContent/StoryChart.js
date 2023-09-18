import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart } from '@mui/x-charts'; 
import { Box } from '@mui/material';

const StoryComponent = () => {
    const [isoCounts, setIsoCounts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/stories');
                const stories = response.data;

                const tempIsoCounts = {};

                stories.forEach(story => {
                    if(tempIsoCounts[story.iso]) {
                        tempIsoCounts[story.iso]++;
                    } else {
                        tempIsoCounts[story.iso] = 1;
                    }
                });

                setIsoCounts(tempIsoCounts);
                setLoading(false);
            } catch (err) {
                setError(err.message || "An error occurred.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const isoList = Object.keys(isoCounts).slice(0, 3); // Limiting to first 3 ISOs
    const countList = Object.values(isoCounts).slice(0, 3); // Limiting to counts of first 3 ISOs

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Box sx={{
        }}>
            <BarChart
                xAxis={[
                    {
                        id: 'isoCategories',
                        data: isoList,
                        scaleType: 'band',
                    },
                ]}
                series={[
                    {
                        data: countList,
                    },
                ]}
                width={300}
                height={300} 
               
            />
            { Object.keys(isoCounts).length > 3 && <p style={{ textAlign: 'center' }}>and more</p> }
        </Box>
    );
};

export default StoryComponent;
