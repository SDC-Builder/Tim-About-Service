const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  localDataCenter: 'datacenter1',
  keyspace: 'javatpoint',
  contactPoints: ['127.0.0.1'],
});

client.connect();

module.exports = { client };
