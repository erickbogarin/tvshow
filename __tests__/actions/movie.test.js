import * as Actions from 'actions';

test('setMovies should return an action', () => {
  expect(Actions.setMovies({})).toMatchSnapshot();
});

test('resetSearch should return an action', () => {
  expect(Actions.resetSearch()).toMatchSnapshot();
});
