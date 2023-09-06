const pool = require('./database');

pool.query('SELECT NOW()', (error, results) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
  console.log('Connected! Database time:', results.rows[0].now);
  pool.end();  // Close the pool after testing
});


