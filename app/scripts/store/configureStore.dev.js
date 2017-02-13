import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import reducers from '../reducers';

const logger = createLogger();

const store = createStore(
  reducers, 
  composeWithDevTools(
    applyMiddleware(logger)    
));

export default store;
