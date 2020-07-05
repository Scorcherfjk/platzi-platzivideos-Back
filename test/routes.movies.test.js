const assert = require('assert');
const proxiquire = require('proxyquire');

const testServer = require('../utils/testServer');
const {
  moviesMock,
  MoviesServiceMock
} = require('../utils/mocks/movies');

describe('routes - movies', () => {
  const route = proxiquire('../routes/movies', {
    '../services/movies': MoviesServiceMock
  });

  const request = testServer(route);

  describe('GET movies', () => {
    it('should respond with status 200', (done) => {
      request.get('/api/movies').expect(200, done);
    });

    it('should respond with the list of movies', (done) => {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          isSuccess: true,
          data: moviesMock,
          message: 'movies listed'
        });

        done();
      });
    });

  });
});