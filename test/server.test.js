/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../server/index');
const { db } = require('../database/db');
const putInfo = require('./mockPutRequest.js');

describe('Server Configuration', () => {
  let server;
  beforeAll(async () => {
    server = await request(app);
  });

  describe('/api/about/:id route', () => {
    test('Should respond with a record from the database', (done) => {
      server
        .get('/api/about/12')
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body.what_you_will_learn).toBeTruthy();
        })
        .expect(200)
        .end(done);
    });
    test('Should respond with a 404 when the ID passed is not a number', (done) => {
      server
        .get('/api/about/not-a-number')
        .expect(404)
        .end(done);
    });
    test('Should respond appropriately when a non-existent record is requested', (done) => {
      server
        .get('/api/about/10000003')
        .expect(404)
        .end(done);
    });
    test('Should fail gracefully by serving index.html when an invalid route is requested', (done) => {
      server
        .get('/this/route/does/not/exist')
        .expect(200)
        .end(done);
    });
    test('Should respond with 200 when requesting route /', (done) => {
      server
        .get('/')
        .expect(200)
        .end(done);
    });
    test('Should respond with 200 when POSTing data', (done) => {
      server
        .post('/api/about/1')
        .send({
          recent_views: 5,
        })
        .expect(200)
        .end(done);
    });
    test('Should respond wtih 200 when PUTing data', (done) => {
      server
        .put('/api/about')
        .send(putInfo)
        .expect(200)
        .end(done);
    });
    test('Should respond with 200 when DELETEing data', (done) => {
      server
        .delete('/api/about/10000001')
        .expect(200)
        .end(done);
    });
  });

  afterAll(async () => {
    await db.close();
  });
});
