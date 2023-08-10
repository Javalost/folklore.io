require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: 'folklore',
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

module.exports = pool; 

console.log({pool})


{/* 

I need a way to test the connection between the database backend/server sent over to the front end
It needs to be handled internally given that I can't pass any data to the front end without fear of injection



Bandito de Tunnel Aguascalientes
Bolam Deela (Czech Story) 
Orang Minyak (Malay) 
Kelpie (Scottish) 
Babi Ngepet (South-Asia?)
ID, NAME, CONTENT, REGION, LANGUAGE 

folklore=# INSERT INTO stories (id, storyname, content, location)
folklore-# VALUES
folklore-# ('Bolam Deela', 'Unknown', '', 'Czech Republic'),
folklore-# ('Orang Minyak', 'Unknown', '', 'Malaysia'),
folklore-# ('Kelpie', 'Unknown', '', 'Scotland'),
folklore-# ('Babi Ngepet', 'Unknown', '', 'South Asia');
INSERT 0 4
folklore=#

*/}

