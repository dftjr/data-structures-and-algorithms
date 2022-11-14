'use strict'

const { sortTitleHelper, sortYearHelper } = require('../helpers')

function sortYear(movies) {
  return movies.sort(sortYearHelper);
}

function sortTitle(movies) {
  return movies.sort(sortTitleHelper);
}

function inGenre(movies, genre) {
  return movies.filter(findMovie => findMovie.genres.includes(genre))
}

module.exports = {
  sortYear,
  sortTitle,
  inGenre,
};
