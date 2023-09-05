const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' });

// Debug: To ensure that the password is being read correctly
console.log({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD
}); 
console.log(__dirname);  // This will log the directory name of the current module - i.e., where your `database.js` file is.


const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  ssl: {
    rejectUnauthorized: true, // Allow connection to databases without valid certificates
  }
});

module.exports = pool;
