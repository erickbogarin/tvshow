import { ActionTypes } from '../constants/index';

const initialState = {
  page: 0,
  movies: [],
  total_results: 0,
  total_pages: 0
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ActionTypes.SET_MOVIES:            
      return {
        ...state,
        movies: action.payload.results || []
      };
    case ActionTypes.RESET_SEARCH:
      return initialState;
    default: return state;
  }
}
