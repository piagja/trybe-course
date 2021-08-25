import categories from "../data";
import { SELECT_MOVIE } from "../actions/actionTypes.action";

const INITIAL_STATE = {
  categories: categories,
  selectedCategory: {},
  selectedMovie: {},
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_MOVIE:
      return {
        ...state,
        selectedCategory: action.category,
        selectedMovie: action.movie,
      }

    default:
      return state;
  }
};

export default movieReducer