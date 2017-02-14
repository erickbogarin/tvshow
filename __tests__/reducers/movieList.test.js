import { ActionTypes } from 'constants/index';
import movies from 'reducers/movieList';

test('should return initial state', () => {
  expect(movies(undefined, { type: {} })).toMatchSnapshot();
});

test('should handle SET_MOVIES with payload', () => {
  const currentState = movies(undefined, { type: {}}),
    payload = { results: [{ title: 'a' }] };

  const nextState = movies(undefined, { type: ActionTypes.SET_MOVIES, payload});
  
  expect(currentState).not.toEqual(nextState);
  expect(nextState).toMatchSnapshot();
});

test('should handle RESET_SEARCH', () => {
  const payload = { movies: [{ title: 'a' }] },
    currentState = movies(undefined, { type: ActionTypes.SET_MOVIES, payload}); 
  
  const nextState = movies(undefined, { type: ActionTypes.RESET_SEARCH});
    
  expect(nextState).toMatchSnapshot();
});

