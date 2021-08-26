import { SELECT_MOVIE } from './actionTypes.action'

export const actionSelectMovie = (movie, category) => ({
  type: SELECT_MOVIE,
  movie,
  category
})
