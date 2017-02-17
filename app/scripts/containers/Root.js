import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import useScroll from 'react-router-scroll/lib/useScroll';

import routes from '../routes';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router 
      history={browserHistory} 
      routes={routes}
      render={applyRouterMiddleware(useScroll())} />    
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,  
}

export default Root
