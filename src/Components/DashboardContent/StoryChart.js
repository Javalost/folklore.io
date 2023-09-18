import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart } from '@mui/x-charts'; 
import { Box, Typography } from '@mui/material';


const StoryChart = () => {
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
    const countList = isoList.map(iso => ({ month: iso, seoul: isoCounts[iso] })); // Creating a dataset as expected by the BarChart

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <Box sx={{padding:0, margin:0, display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:'20px'}}>
            <BarChart
                dataset={countList}
                yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[{ dataKey: 'seoul', label: 'Stories per Country' }]} // 'label' changed to something more relevant
                layout="horizontal" 
                width={400}
                height={200}
            />
            { Object.keys(isoCounts).length > 3 && 
            <Typography style={{ textAlign: 'center' }}>and more</Typography> }
        </Box>
    );
};


export default StoryChart;
