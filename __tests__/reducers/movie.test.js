import { ActionTypes } from 'constants/index';
import movie from 'reducers/movie';

describe('Movie', () => {
  test('returns the initial state', () => {
    expect(movie(undefined, { type: {} })).toMatchSnapshot();
  });

  test('handles RESET_SEARCH action', () => {
    expect(movie(undefined, { type: ActionTypes.SET_MOVIES})).toMatchSnapshot();
  });
});
