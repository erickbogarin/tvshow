import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import MoviePage from './containers/MoviePage';
import SearchPage from './containers/SearchPage';

export default <Route path="/" component={App}>
  <IndexRoute component={SearchPage} />
  <Route path="movie/:id" component={MoviePage} />
</Route>
