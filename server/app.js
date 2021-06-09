const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { requestAssembler } = require('./requestBuilder');

// db switcher, for comparing performance of multiple db's in development
if (process.env.db === 'Cassandra') {
  // eslint-disable-next-line vars-on-top, no-var, global-require, no-redeclare, block-scoped-var
  var db = require('../database/cassandra/model');
} else if (process.env.db === 'Postgres') {
  // eslint-disable-next-line vars-on-top, no-var, global-require, no-redeclare, block-scoped-var
  var db = require('../database/postgres/model');
} else if (process.env.db === 'Mongo') {
  // eslint-disable-next-line vars-on-top, no-var, global-require, no-redeclare, block-scoped-var
  var db = require('../database/model');
}

const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// Mongo
// app.get('/api/about/:id', async (req, res) => {
//   try {
//     let data = await db.getOne(req.params.id);
//     if (!data) { throw 'gotBadData' }
//     res.send(data);
//   } catch (err) {
//     res.sendStatus(404);
//   }
// });

app.get('/api/about/:id', async (req, res) => {
  try {
    const data = await db.getOne(req.params.id);
    const assembledData = requestAssembler(data);
    // I think the line below can be deleted
    if (!assembledData) { throw 'gotBadData'; }
    res.send(assembledData);
  } catch (err) {
    res.sendStatus(404);
  }
});

app.put('/api/about/:id', async (req, res) => {
  try {
    await db.editOne(req.params.id, req.body);
    res.send('Record Updated');
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/api/about', async (req, res) => {
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

module.exports = app;
