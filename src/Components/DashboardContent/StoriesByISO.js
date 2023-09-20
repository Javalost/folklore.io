import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { Box} from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];  // You can add as many colors as you want

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
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' }}>
        <PieChart width={550} height={400}> {/* Adjusted height */}
            <Pie
                data={pieData}
                dataKey="value"
                nameKey="label"
                cx="30%"  
                cy="45%"  // Adjusted this to move the pie chart up a bit
                outerRadius={100}
                fill="#8884d8"
                label
            >
                {
                    pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
            <Tooltip />
            <Legend 
                verticalAlign="middle"
                align="right"
                layout="vertical"
            />
        </PieChart>
    </Box>
);

};

export default StoriesByISO;