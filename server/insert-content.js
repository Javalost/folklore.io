const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

const targetStory = 'Babi Ngepet'; // The name of the story you want to update
const newContent = `According to local myth, the creature is believed to be the manifestation of a person practising pesugihan babi black magic. Pesugihan is derived from the Javanese word sugih meaning "rich". 
It is a kind of magic to help people become rich instantly, but in exchange they must sacrifice something. In this case they must sacrifice their humanity; allowing themselves to be transformed into a boar for a period of time, or allowing themselves to be possessed by a boar demon. 
The human-animal transformation is similar to shapeshifting or the werewolf concept in the West.`

async function updateContent() {
  const query = `
    UPDATE stories
    SET content = $1
    WHERE storyname = $2
  `;
  const values = [newContent, targetStory];

  try {
    await pool.query(query, values);
    console.log(`Content updated for ${targetStory}`);
  } catch (error) {
    console.error(`Error updating content for ${targetStory}:`, error);
  }

  pool.end();
}

updateContent();
