import API from './API';

class Auth extends API {
  constructor() {
    super();
  }

  // create(params) {
  //   return this.getRequestTo('messages', params).then(function (response) {
  //     return response.json();
  //   });
  // }
}

export default new Auth();
