const path = require('path');
const fs = require('fs');

let popularMovieQuotes = require('popular-movie-quotes');

let frase = popularMovieQuotes.getAll();

module.exports = frase