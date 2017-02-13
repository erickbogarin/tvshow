import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="container">
      <h1>Hello World</h1>      
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,  
}

export default Root
