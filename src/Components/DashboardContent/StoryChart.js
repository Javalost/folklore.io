import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart } from '@mui/x-charts'; 
import { Box } from '@mui/material';

const StoryChart = () => {
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

    const isoLengthData = {};

    stories.forEach(story => {
        const storyLength = story.story.split(' ').length;
        if (isoLengthData[story.iso]) {
            isoLengthData[story.iso].total += storyLength;
            isoLengthData[story.iso].count++;
        } else {
            isoLengthData[story.iso] = {
                total: storyLength,
                count: 1
            };
        }
    });

    const averageLengths = {};

    for (let iso in isoLengthData) {
        averageLengths[iso] = isoLengthData[iso].total / isoLengthData[iso].count;
    }

    const sortedIsos = Object.keys(averageLengths).sort((a, b) => averageLengths[b] - averageLengths[a]);
    const top3Isos = sortedIsos.slice(0, 3);

    const dataset = top3Isos.map(iso => {
        return {
            iso: iso,
            average: averageLengths[iso]
        };
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Box sx={{}}>
            <BarChart
                dataset={dataset}
                xAxis={[
                    {
                        id: 'isoCategories',
                        data: top3Isos,
                        scaleType: 'band',
                    },
                ]}
                series={[
                    {
                        dataKey: 'average',
                        label: 'Average Word Count'
                    }
                ]}
                width={250}
                height={300} 
            />
            { Object.keys(isoLengthData).length > 3 && <p style={{ textAlign: 'center' }}>and more</p> }
        </Box>
    );
};

export default StoryChart;
