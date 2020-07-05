const assert = require('assert');
const proxiquire = require('proxyquire');

const { moviesMock } = require('../utils/mocks/movies');
const {
  getAllstub,
  MongoLibMock
} = require('../utils/mocks/mongo');

describe('services - movies', () => {

  const MoviesServices = proxiquire('../services/movies', {
    '../lib/mongo': MongoLibMock
  })

  const moviesService = new MoviesServices();

  describe('when getMovies is called', async () => {
    it('should call the getall MongoLib method', async () => {
      await moviesService.getMovies({});
      assert.strictEqual(getAllstub.called, true);
    });

    it('should return an array of movies', async () => {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;
      assert.deepEqual(result, expected);
    });
  })
});