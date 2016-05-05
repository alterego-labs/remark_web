import API from './API';
import currentUser from '../../CurrentUser';

class Remarks extends API {
  constructor() {
    super();
  }

  getList(params) {
    return this.getRequestTo('messages', params);
  }

  create(params) {
    return this.putRequestTo('users/' + currentUser.login + '/messages', params);
  }
}

export default new Remarks();
