import axios from 'axios';

/**
 * @module Actions/Movie
 * @desc Actions for Movie
 */

import { ActionTypes, XHR } from '../constants/index';

/**
 * setMovies
 *
 * @returns {Array}
 */
export function setMovies(movies) { 
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies
  };
}

/**
 * resetSearch
 *
 * @returns {Array}
 */
export function resetSearch() { 
  return {
    type: ActionTypes.RESET_SEARCH    
  };
}

/**
 * setMovies
 *
 * @returns {Promise}
 */
export function fetchSearchMovie(title, page = 1) {
  const url = `${XHR.ROOT_URL}/3/search/movie?api_key=${XHR.API_KEY}&query=${title}&page=${page}`;
  
   return dispatch => {
     return axios.get(url).then(res => {      
      dispatch(setMovies(res.data));
     });
   }
}
