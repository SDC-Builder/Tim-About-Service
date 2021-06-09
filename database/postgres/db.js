const { Pool } = require('pg');

// const client = new Client({
//   user: 'postgres',
//   host: '127.0.0.1',
//   database: 'mydb',
//   password: 'Timmy',
//   port: 5432,
// });

const client = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'mydb',
  password: 'Timmy',
  port: 5432,
});

// const client = pool.connect();

client.connect();

module.exports = { client };
