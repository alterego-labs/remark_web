import Store from '../Store';
import { push } from 'react-router-redux';


export const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN';

export function receiveAccessToken (response) {
  localStorage.setItem('accessToken', response.login);
  // Store.dispatch(push('/home'));
  return {
    type: RECEIVE_ACCESS_TOKEN,
    accessToken: response.login,
    login: response.login
  }
}
