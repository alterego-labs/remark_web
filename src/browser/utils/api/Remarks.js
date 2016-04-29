import API from './API';

class Remarks extends API {
  constructor() {
    super();
  }

  getList(params) {
    return this.getRequestTo('messages', params);
  }

  create(params) {
    return this.postRequestTo('messages', params);
  }
}

export default new Remarks();
