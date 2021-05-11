const fs = require('fs');
const { Client } = require('pg');

fs.readdirSync('./data/').forEach((file) => {
  console.log(file);
  if (file.split('.')[1] === 'json') {
    const JSONobj = JSON.parse(fs.readFileSync(`./data/${file}`, { encoding: 'utf8', flag: 'r' }));
    JSONobj.forEach((dataObj) => {
      const client = new Client({
        user: 'postgres',
        host: '127.0.0.1',
        database: 'mydb',
        password: 'Timmy',
        port: 5432,
      });

      client.connect();

      client.query('SELECT * from users', (err, res) => {
        console.log(err, res);
        console.log(res.rows);
        client.end();
      });
    });
  }
});
