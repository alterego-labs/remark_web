import API from './API';

class Auth extends API {
  constructor() {
    super();
  }

  login(params) {
    return this.postRequestTo('login', params);
  }
}

export default new Auth();
