const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

router.get('/starwars-movies', movieController.getAllMovies);

router.get('/starwars-movies/:id', movieController.getMovieById);

router.post('/starwars-movies', movieController.createMovie);

router.put('/starwars-movies/:id', movieController.updateMovie);

router.delete('/starwars-movies/:id', movieController.deleteMovie);

module.exports = router;