import * as Actions from 'actions';

test('findMovie should return an action', () => {
  expect(Actions.findMovie({})).toMatchSnapshot();
});

test('resetMovie should return an action', () => {
  expect(Actions.resetMovie({})).toMatchSnapshot();
});
