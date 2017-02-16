import { combineReducers } from 'redux';

import movie from './movie'
import movieList from './movieList'

const reducers = combineReducers({
  movie,
  movieList
});

export default reducers;
