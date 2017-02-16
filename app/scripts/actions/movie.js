/**
 * @module Actions/Movie
 * @desc Actions for Movie
 */

import axios from 'axios';
import { ActionTypes, XHR } from '../constants/index';

/**
 * findMovie
 *
 * @returns {Object}
 */
export function findMovie(movie) { 
  return {
    type: ActionTypes.FIND_MOVIE,
    payload: movie
  };
}

/**
 * fetchFindMovie
 *
 * @returns {Promise}
 */
export function fetchFindMovie(movieID) { 
  const url = `${XHR.ROOT_URL}/3/movie/${movieID}?api_key=${XHR.API_KEY}`;
  
   return dispatch => {
     return axios.get(url).then(res => {      
      dispatch(findMovie(res.data));
     });
   }
}
