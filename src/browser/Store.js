import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { reducers } from './reducers'

// Add the reducer to your store on the `routing` key

const middleware = routerMiddleware(browserHistory);

const store = createStore(
  reducers,
  // applyMiddleware(middleware),
  {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;
