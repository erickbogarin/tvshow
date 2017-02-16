import { ActionTypes } from '../constants/index';

const initialState = {
  currentPage: 0,
  movies: [],
  movie: {},
  totalResults: 0,
  totalPages: 0
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.SET_MOVIES:            
      return {
        ...state,
        currentPage: action.payload.page,
        movies: action.payload.results || [],
        totalPages: action.payload.total_pages,
        totalResults: action.payload.total_results
      };
    case ActionTypes.RESET_SEARCH:
      return initialState;
    default: return state;
  }
}
