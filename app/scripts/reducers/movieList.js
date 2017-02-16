import { ActionTypes } from '../constants/index';

const initialState = {
  currentPage: 0,
  movies: [],
  title: '',
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
    case ActionTypes.SET_TITLE:
      return {
        ...state,
        title: action.payload
      }
    case ActionTypes.RESET_SEARCH:
      return initialState;
    default: return state;
  }
}
