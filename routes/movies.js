const express = require('express');
const moviesMock = require('../utils/mocks/movies');

const moviesApi = (app) => {
  const router = express.Router();

  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        isSuccess: true,
        data: movies,
        message: 'movies listed'
      });
    } catch (error) {
      next(error);
    }
  });

  app.use('/api/movies', router);
}

module.exports = moviesApi;
