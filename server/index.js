require('dotenv').config({ path: '../.env' });

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');


const app = express();
const port = 3001; 

const corsOptions = { 
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}


// Middleware setup
app.use(bodyParser.json());
app.use(cors(corsOptions)); 



// Database setup
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

// Endpoint to retrieve a specific story from the 'stories' table using its ID
app.get('/stories', async (req, res) => {
    try {
        // Extract 'country' query parameter from the GET request
        const country = req.query.country;

        let query;
        let values;

        // If a country is provided, filter the stories by that country
        if (country) {
            query = 'SELECT * FROM stories WHERE country = $1';
            values = [country];
        } else {
            query = 'SELECT * FROM stories';
        }

        // Execute the SQL query against the database
        const result = await pool.query(query, values);

        // Send back the results as a JSON response
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/countries', async (req, res) => {
    try {
        // Create a SQL query to fetch unique countries from the stories table
        const query = 'SELECT DISTINCT country FROM stories';

        // Execute the SQL query against the database
        const result = await pool.query(query);

        // Convert result to an array of countries
        const countries = result.rows.map(row => row.country);

        // Send back the results as a JSON response
        res.json(countries);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


app.get('/testform', async (req, res) => {
    try { 
        const result = await pool.query('SELECT * FROM testform'); 
        res.json(result.rows);
    } catch (err) { 
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/submit-data', async (req, res) => {
    const { name, content, location } = req.body;
    try {
        await pool.query('INSERT INTO testform (name, content, location) VALUES ($1, $2, $3)', [name, content, location]);
        res.send('Data inserted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Fetch all unique genres from the 'stories' table
app.get('/genres', async (req, res) => {
    try {
        const result = await pool.query('SELECT DISTINCT genre FROM stories');
        res.json(result.rows.map(row => row.genre));
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Fetch all unique regions from the 'stories' table
app.get('/regions', async (req, res) => {
    try {
        const result = await pool.query('SELECT DISTINCT region FROM stories');
        res.json(result.rows.map(row => row.region));
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Fetch stories based on filter
app.get('/filtered-stories', async (req, res) => {
    try {
        const genres = req.query.genres ? req.query.genres.split(',') : [];
        const regions = req.query.regions ? req.query.regions.split(',') : [];

        let query = 'SELECT * FROM stories WHERE 1=1';
        const params = [];

        if (genres.length) {
            query += ` AND genre = ANY($1)`;
            params.push(genres);
        }

        if (regions.length) {
            query += ` AND region = ANY($2)`;
            params.push(regions);
        }

        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
