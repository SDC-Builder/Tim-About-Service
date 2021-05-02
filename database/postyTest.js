// const postgres = require('postgres');

// console.log('message');

// const sql = postgres('postgres://postgres:Timmy@host:5432/users');

// (async () => {
//   const someResult = await sql`
//   select * from users
//   `;

//   console.log('hi');
//   console.log(someResult);
// })();

const { Pool, Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'mydb',
  password: 'Timmy',
  port: 5432,
})

client.connect()

client.query('SELECT * from users', (err, res) => {
  console.log(err, res)
  console.log(res.rows)
  client.end()
})