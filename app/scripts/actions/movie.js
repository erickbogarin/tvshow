/**
 * @module Actions/Movie
 * @desc Actions for Movie
 */

import axios from 'axios';
import { ActionTypes, XHR } from '../constants/index';

/**
 * findMovie
 *
 * @returns {Array}
 */
export function findMovie(movie) { 
  return {
    type: ActionTypes.FIND_MOVIE,
    payload: movie
  };
}
