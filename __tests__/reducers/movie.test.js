import { ActionTypes } from 'constants/index';
import movie from 'reducers/movie';

describe('Movie', () => {
  test('returns the initial state', () => {
    expect(movie(undefined, { type: {} })).toMatchSnapshot();
  });
});
