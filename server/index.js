// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('../database/model');

// console.log(process.env.ABOUT_MONGODB_URI)

const app = express();
const PORT = 3002;

app.use(cors({origin: '*'}));
app.use(bodyParser.json());

app.use(express.static('./public'));

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/api/about/:id', async (req, res) => {
  try {
    let data = await db.getOne(req.params.id);
    if (!data) { throw 'gotBadData' }
    res.send(data);
  } catch (err) {
    res.sendStatus(404);
  }
});

// possible speed up later would be to only have body-parser middleware for in post route
app.post('/api/about/:id', async (req, res) => {
  try {
    await db.editOne(req.params.id, req.body);
    res.send('Record Updated');
  } catch (err) {
    res.status(500).send(err);
  }
});

// possible speed up later would be to only have body-parser middleware for in put route
app.put('/api/about', async (req, res) => {
  try {
    await db.addOne(req.body);
    res.send('Record Added');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/api/about/:id', async (req, res) => {
  try {
    await db.deleteOne(req.params.id);
    res.send('Record Deleted');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// Allows the server to listen if it's in dev or prod, but not while testing
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

module.exports = app;
