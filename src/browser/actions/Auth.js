export const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN';

export function receiveAccessToken (response) {
  return {
    type: RECEIVE_ACCESS_TOKEN,
    accessToken: response.login
  }
}
