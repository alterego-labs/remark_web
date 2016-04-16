require('normalize.css/normalize.css');
require('styles/Application.less');

import 'core-js/fn/object/assign';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './browser/views/layouts/Application';
// import WelcomePage from './browser/pages/Welcome';
import HomePage from './browser/pages/Home';
import NoMatchPage from './browser/pages/NoMatch';

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ HomePage }/>
    </Route>
    <Route path="*" component={ NoMatchPage }/>
  </Router>
), document.getElementById('app'))

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
