require('dotenv').config({ path: '../.env' });
console.log("Environment variables loaded");

const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const axios = require('axios'); 
const { expressjwt: expressJwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');

console.log("Modules imported");

const app = express();
const port = 3001; 

const corsOptions = { 
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

console.log("CORS options set");

// Middleware setup
app.use(bodyParser.json());
app.use(cors(corsOptions));  
app.use(express.json()); 

const checkJwt = expressJwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
});

console.log("Middleware setup complete");

// Database setup
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

console.log("Database pool created"); 



// Storing User Data
app.post('/store-user-data', checkJwt, async (req, res) => {
    const userId = req.user.sub;
    const email = req.user.email; 

    try {
        const result = await pool.query('INSERT INTO users (auth0_id, email) VALUES ($1, $2) RETURNING id', [userId, email]);

        if (result.rows.length > 0) {
            res.send('User stored successfully');
        } else {
            res.status(500).send('Unable to store user');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}); 

// Fetching User Data
app.get('/fetch-user-data', checkJwt, async (req, res) => {
    const userId = req.user.sub;

    try {
        const result = await pool.query('SELECT * FROM users WHERE auth0_id = $1', [userId]);

        if (result.rows.length > 0) {
            res.json(result.rows[0]); 
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/stories', async (req, res) => {
    console.log("/stories endpoint hit");
    try {
        const country = req.query.country;
        let query;
        let values;

        if (country) {
            query = 'SELECT * FROM stories WHERE country = $1';
            values = [country];
        } else {
            query = 'SELECT * FROM stories';
        }

        const result = await pool.query(query, values);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/countries', async (req, res) => {
    console.log("/countries endpoint hit");
    try {
        const query = 'SELECT DISTINCT country FROM stories';
        const result = await pool.query(query);
        const countries = result.rows.map(row => row.country);
        res.json(countries);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/testform', async (req, res) => {
    console.log("/testform endpoint hit");
    try { 
        const result = await pool.query('SELECT * FROM testform'); 
        res.json(result.rows);
    } catch (err) { 
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/submit-data', async (req, res) => {
    console.log("/submit-data endpoint hit");
    const { name, content, location } = req.body;
    try {
        await pool.query('INSERT INTO testform (name, content, location) VALUES ($1, $2, $3)', [name, content, location]);
        res.send('Data inserted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/genres', async (req, res) => {
    console.log("/genres endpoint hit");
    try {
        const result = await pool.query('SELECT DISTINCT genre FROM stories');
        res.json(result.rows.map(row => row.genre));
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/regions', async (req, res) => {
    console.log("/regions endpoint hit");
    try {
        const result = await pool.query('SELECT DISTINCT region FROM stories');
        res.json(result.rows.map(row => row.region));
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/filtered-stories', async (req, res) => {
    console.log("/filtered-stories endpoint hit");
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

console.log("Server setup complete");
