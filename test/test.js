'use strict';

var request = require('superagent'),
    URL = 'http://localhost:8000',
    nock = require('nock'),
    test = require('tape');


test('npm-thirty', function (t) {


  t.test('GET /poll', function (t) {

    t.plan(3);

    nock(URL)
      .get('/poll')
      .reply(200, 'abc', { 'content-type': 'text/plain' });

    request
      .get(URL + '/poll')
      .end(function (err, res) {

        t.equal(res.status, 200);
        t.equal(res.text, 'abc');
        t.equal(res.headers['content-type'], 'text/plain');
        t.end();

      });

  });


  t.test('POST /poll', function (t) {

    t.plan(2);

    nock(URL)
      .post('/poll')
      .reply(200, {
        'content-type': 'application/json',
      });

    request
      .post(URL + '/poll')
      .send('some data')
      .end(function (err, res) {

        t.equal(res.status, 200);
        t.equal(res.headers['content-type'], 'application/json');
        t.end();

      });

  });


  t.test('GET /poll/:date', function (t) {

    t.plan(3);

    nock(URL)
      .get('/poll/2014-08-10')
      .reply(200, 'get poll', {
        'content-type': 'application/json',
      });

    request
      .get(URL + '/poll/2014-08-10')
      .end(function (err, res) {

        t.equal(res.status, 200);
        t.equal(res.text, 'get poll');
        t.equal(res.headers['content-type'], 'application/json');
        t.end();

      });

  });


  t.test('PUT /poll/:date', function (t) {

    t.plan(3);

    nock(URL)
      .put('/poll/2014-08-10')
      .reply(200, 'update poll', {
        'content-type': 'application/json',
      });

    request
      .put(URL + '/poll/2014-08-10')
      .send('update poll')
      .end(function (err, res) {

        t.equal(res.status, 200);
        t.equal(res.text, 'update poll');
        t.equal(res.headers['content-type'], 'application/json');
        t.end();

      });

  });


  t.test('GET /poll/:date', function (t) {

    t.plan(3);

    nock(URL)
      .delete('/poll/2014-08-10')
      .reply(200, 'delete poll', {
        'content-type': 'application/json',
      });

    request
      .delete(URL + '/poll/2014-08-10')
      .end(function (err, res) {

        t.equal(res.status, 200);
        t.equal(res.text, 'delete poll');
        t.equal(res.headers['content-type'], 'application/json');
        t.end();

      });

  });

});
