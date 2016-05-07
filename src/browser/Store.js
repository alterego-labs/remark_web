import { createStore, applyMiddleware } from 'redux'
// import { routerMiddleware } from 'react-router-redux'
// import { browserHistory } from 'react-router'
import thunk from 'redux-thunk';
import { reducers } from './reducers'

// Add the reducer to your store on the `routing` key

// const middleware = routerMiddleware(browserHistory);

const store = createStore(
  reducers,
  // applyMiddleware(middleware),
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;
