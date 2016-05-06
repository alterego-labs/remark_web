import { browserHistory } from 'react-router';

export const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN';

export function receiveAccessToken (response) {
  localStorage.setItem('accessToken', response.login);
  browserHistory.push('/home');
  return {
    type: RECEIVE_ACCESS_TOKEN,
    accessToken: response.login,
    login: response.login
  }
}
