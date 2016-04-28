import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import Auth from './Auth';
import Remarks from './Remarks';

export const reducers = combineReducers({
  auth: Auth, remarks: Remarks, routing: routerReducer
});
