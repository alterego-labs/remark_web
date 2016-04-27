import { createStore, combineReducers } from 'redux'
import reducers from './reducers/Index'
import { routerReducer } from 'react-router-redux'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    reducers, routing: routerReducer
  }),
  {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;
