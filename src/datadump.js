const fs = require('fs');
const storiesData = require('./data.js');

let sqlStatements = [];

// Loop through each story and create an INSERT statement
for (let story of storiesData) {
    let columns = Object.keys(story).join(', ');
    let values = Object.values(story).map(value => {
        // Sanitize the value - escape single quotes
        if (typeof value === 'string') {
            value = value.replace(/'/g, "''");
            return `'${value}'`;
        }
        return value;
    }).join(', ');

    let sql = `INSERT INTO stories (${columns}) VALUES (${values});`;
    sqlStatements.push(sql);
}

// Write the SQL statements to a file
fs.writeFileSync('insert_stories.sql', sqlStatements.join('\n'));



