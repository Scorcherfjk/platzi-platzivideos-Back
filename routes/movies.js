const express = require('express');
const MoviesService = require('../services/movies');

const moviesApi = (app) => {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async (req, res, next) => {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });
      res.status(200).json({
        isSuccess: true,
        data: movies,
        message: 'movies listed'
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    try {
      const movies = await moviesService.getMovie({ movieId });
      res.status(200).json({
        isSuccess: true,
        data: movies,
        message: 'movies listed'
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: movie } = req;
    try {
      const movieId = await moviesService.createMovie({ movie });
      res.status(201).json({
        isSuccess: true,
        data: movieId,
        message: 'movie inserted'
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:movieId', async (req, res, next) => {
    const { body: movie } = req;
    const { movieId } = req.params;
    try {
      const updatedMovieId = await moviesService.updateMovie({ movieId, movie });
      res.status(200).json({
        isSuccess: true,
        data: updatedMovieId,
        message: 'movie updated'
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    try {
      const deletedMovieId = await moviesService.deleteMovie({ movieId });
      res.status(200).json({
        isSuccess: true,
        data: deletedMovieId,
        message: 'movie deleted'
      });
    } catch (error) {
      next(error);
    }
  });

}

module.exports = moviesApi;
