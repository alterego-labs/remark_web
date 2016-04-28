import { createStore } from 'redux'
import { reducers } from './reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
  reducers,
  {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;
