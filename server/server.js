const express = require('express');
const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' });

const app = express();
const port = 3000;

// Check that your DATABASE_URL is being read correctly
console.log(process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/stories', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM stories');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch stories' });
  }
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
