import { RECEIVE_ACCESS_TOKEN } from '../actions/Auth';

const accessToken = localStorage.getItem('accessToken');

function wrap (login) {
  return {
    loggedIn: login.length > 0,
    login: login,
    accessToken: login
  }
}

const defaultState = { user: wrap(accessToken) };

const Auth = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ACCESS_TOKEN:
      return Object.assign({}, state, { user: wrap(action.accessToken) });
    default:
      return state;
  }
}

export default Auth;
