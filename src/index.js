require('normalize.css/normalize.css');
require('styles/Application.less');

import 'core-js/fn/object/assign';

import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, transition } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Store from './browser/Store';

import Layout from './browser/views/layouts/Application';

// Pages
import HomePage from './browser/pages/Home';
import WelcomePage from './browser/pages/Welcome';
import Show from './browser/views/remarks/Show';
import NoMatchPage from './browser/pages/NoMatch';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, Store);

function requireAuth(nextState, replace) {
  let auth = Store.getState().auth;
  if (auth.user.loggedIn) {
    replace({
      pathname: '/home',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

render((
  <Provider store={ Store }>
    <Router history={ history }>
      <Route path="/" component={ Layout }>
        <IndexRoute component={ WelcomePage } onEnter={ requireAuth } />
        <Route path="/home" component={ HomePage }/>
        <Route path="/modal" component={ Show }/>
      </Route>
      <Route path="*" component={ NoMatchPage }/>
    </Router>
  </Provider>
), document.getElementById('app'));
