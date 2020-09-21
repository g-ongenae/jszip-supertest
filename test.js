const { createWriteStream, writeFileSync } = require('fs');
const binaryParser = require('superagent-binary-parser');
const request = require('supertest');

const app = require('./index');

describe('Test', () => {
  it('with a pipe', () => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'application/zip')
      .pipe(createWriteStream('results-zip/supertest-pipe.zip'));
  });
  it('with a binary-parser', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'application/zip')
      .buffer(true)
      .parse(binaryParser)
      .end((err, res) => {
        if (err) {
          done(err);
        }

        writeFileSync('results-zip/supertest-binary-parser.zip', res.body);

        done();
      });
  });
});
