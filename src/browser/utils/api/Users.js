import API from './API';
import currentUser from '../../CurrentUser';

class Remarks extends API {
  constructor() {
    super();
  }

  getRemarks(params) {
    return this.getRequestTo('users/' + currentUser.login + '/messages', params);
  }
}

export default new Remarks();
