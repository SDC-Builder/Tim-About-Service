require('dotenv').config();
const app = require('./app');

const PORT = 3002;

// Allows the server to listen if it's in dev or prod, but not while testing
if (process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line global-require
  require('newrelic');
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}
