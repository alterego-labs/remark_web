const accessToken = localStorage.getItem('accessToken');

function currentUser () {
  var login = accessToken;
  return {
    loggedIn: login && login.length > 0,
    login: login,
    accessToken: login
  }
}

export default currentUser();
