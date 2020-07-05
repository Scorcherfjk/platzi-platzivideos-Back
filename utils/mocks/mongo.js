const sinon = require('sinon');

const {
  moviesMock,
  filteredMoviesMock
} = require('./movies');

const getAllstub = sinon.stub();
getAllstub.withArgs('movies').resolves(moviesMock);

const query = { tags: { $in: ['Drama'] } };
getAllstub.withArgs('movies', query).resolves(filteredMoviesMock('Drama'));

const createStub = sinon.stub().resolves(moviesMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllstub(collection, query);
  }

  create(collection, data){
    return createStub(collection, data)
  }
}

module.exports = {
  getAllstub,
  createStub,
  MongoLibMock
}