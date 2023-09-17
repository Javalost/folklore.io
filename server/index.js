require('dotenv').config({ path: '../.env' });

const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const { Clerk } = require('@clerk/clerk-sdk-node');

const app = express();
const port = 3001;

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json());

const clerk = new Clerk(process.env.CLERK_SECRET_KEY);

const verifyClerkSession = async (req, res, next) => {
    try {
        const sessionToken = req.headers.authorization.split("Bearer ")[1];
        const sessionId = await clerk.sessions.verifyToken(sessionToken);
        const session = await clerk.sessions.getSession(sessionId);
        req.user = session;
        next();
    } catch (error) {
        res.status(401).send("Unauthorized");
    }
}; 

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

app.get('/get-username', async (req, res) => {
    const sessionId = req.headers['clerk-session-id'];
    
    if (!sessionId) {
        return res.status(400).send("Clerk session ID required.");
    }

    try {
        const user = await clerk.users.getUserBySessionId(sessionId);
        if (user && user.username) {
            res.json({ username: user.username });
        } else {
            res.status(404).send("Username not found.");
        }
    } catch (error) {
        console.error("Failed to fetch user:", error);
        res.status(500).send("Internal Server Error.");
    }
});

app.post('/api/init-user-dashboard', verifyClerkSession, async (req, res) => {
    const userId = req.user.id; // Extracted from the Clerk session
    
    try {
        await pool.query(`
            INSERT INTO user_dashboard(user_id) VALUES ($1) ON CONFLICT (user_id) DO NOTHING
        `, [userId]);

        res.send('User dashboard initialized successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});




app.post('/store-user-data', verifyClerkSession, async (req, res) => {
    const userId = req.user.id;
    const email = req.user.primaryEmailAddress.emailAddress;

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

app.get('/fetch-user-data', verifyClerkSession, async (req, res) => {
    const userId = req.user.id;

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

app.get('/genres', async (req, res) => {
    try {
        const result = await pool.query('SELECT DISTINCT genre FROM stories');
        res.json(result.rows.map(row => row.genre));
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.get('/regions', async (req, res) => {
    try {
        const result = await pool.query('SELECT DISTINCT region FROM stories');
        res.json(result.rows.map(row => row.region));
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

console.log("Server setup complete");
