import { RECEIVE_ACCESS_TOKEN } from '../actions/Auth';

const Auth = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        user: {
          accessToken: action.accessToken
        }
      });
    default:
      return state;
  }
}

export default Auth;
