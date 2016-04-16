require('normalize.css/normalize.css');
require('styles/Application.less');

import 'core-js/fn/object/assign';

import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './browser/reducers'

import Layout from './browser/views/layouts/Application';
import HomePage from './browser/pages/Home';
import Show from './browser/views/remarks/Show';
import NoMatchPage from './browser/pages/NoMatch';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    reducers, routing: routerReducer
  })
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ Layout }>
        <IndexRoute component={ HomePage }/>
        <Route path="/my" component={ HomePage }/>
        <Route path="/modal" component={ Show }/>
      </Route>
      <Route path="*" component={ NoMatchPage }/>
    </Router>
  </Provider>
), document.getElementById('app'));
