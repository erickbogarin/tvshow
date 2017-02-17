import { ActionTypes } from '../constants/index';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.FIND_MOVIE:
      return {
        ...state,
        releaseDate: action.payload.release_date,
        rated: action.payload.vote_average,
        overview: action.payload.overview,
        posterPath: action.payload.poster_path,
        popularity: action.payload.popularity,
        title: action.payload.original_title,
      };
    case ActionTypes.RESET_MOVIE:
      return initialState;
    default: return state;
  }
}
