import API from './API';

class Remarks extends API {
  constructor() {
    super();
  }

  getList(params) {
    return this.getRequestTo('messages', params);
  }

  // create(params) {
  //   return this.getRequestTo('messages', params).then(function (response) {
  //     return response.json();
  //   });
  // }
}

export default new Remarks();
