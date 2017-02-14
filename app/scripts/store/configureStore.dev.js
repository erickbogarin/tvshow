import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const logger = createLogger();

const store = createStore(
  reducers, 
  composeWithDevTools(
    applyMiddleware(thunk, logger)    
));

export default store;
