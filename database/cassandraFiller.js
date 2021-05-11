const fs = require('fs');
const es = require('event-stream');
const cassandra = require('cassandra-driver');

const start = Date.now();

const client = new cassandra.Client({
  localDataCenter: 'datacenter1',
  keyspace: 'javatpoint',
  contactPoints: ['127.0.0.1'],
});

let lineNr = 0;

(async () => {
  const s = fs.createReadStream('./data/csvTest.csv')
    .pipe(es.split())
    .pipe(es.mapSync(async (line) => {
      if (lineNr !== 0) {
        s.pause();
        const stringArray = line.split(',');
        const id = Number(stringArray[0]);
        try {
          await client.execute(`INSERT INTO about (id, about, recent_views, subtitle, willLearn, willGain, directionPerc, benefitPerc, promotionPerc) values (${id}, '${stringArray[1]}', '${stringArray[3]}', '${stringArray[2]}', '${stringArray[4]}', '${stringArray[5]}', '${stringArray[6]}', '${stringArray[7]}', '${stringArray[8]}')`);
        } finally {
          // client.release();
        }
        s.resume();
      }
      lineNr += 1;
      if (lineNr % 100000 === 0) {
        const now = Date.now();
        const minutesElapsed = (((now - start) / 1000) / 60);
        console.log(`on record ${lineNr}, minutes elapsed: ${minutesElapsed}`);
      }
    })
      .on('error', (err) => {
        console.log('Error while reading file.', err);
      })
      .on('end', () => {
        console.log('Read entire file.');
      }));
  client.shutdown();
})().catch((err) => console.log(err.stack));
