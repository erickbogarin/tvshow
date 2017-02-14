import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import Root from './containers/Root';

import '../styles/main.scss';

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('app')
);
