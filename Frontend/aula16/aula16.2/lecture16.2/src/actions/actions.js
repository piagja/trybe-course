import { SELECT_MOVIE } from './actionTypes.action'

const actionSelectMovie = (movie, category) => ({
  type: SELECT_MOVIE,
  movie,
  category
})
