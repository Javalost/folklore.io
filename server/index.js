const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Database setup
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

// Endpoint to retrieve stories from the 'stories' table
app.get('/datatest', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM stories');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// POST endpoint to submit data
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

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
