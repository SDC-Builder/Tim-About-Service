const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('../database/model');

const app = express();
const PORT = 3002;

app.use(cors());

// routeing
app.use(express.static('./public'));

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/api/about/:id', async (req, res) => {
  console.log('New request for', req.params.id);
  try {
    let data = await db.getOne(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/api/about/:id', (req, res) => {
  res.sendStatus(405);
});

app.put('/api/about/:id', (req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete('/api/about/:id', (req, res) => {
  res.send('Got a DELETE request at /user');
});

// Allows the server to listen if it's in dev or prod, but not while testing
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

module.exports = app;
