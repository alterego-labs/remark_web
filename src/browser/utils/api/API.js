// let config = require('config');
import 'whatwg-fetch';

export default class API {
  constructor() {
  }

  serialize(obj) {
    var str = [];
    for(var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    return str.join('&');
  }

  getUrl(path, params) {
    // return config.API.rootPath + path;
    let url = 'http://remark-api.alterego-labs.com/api/v1/' + path;
    return url + '?' + this.serialize(params);
  }

  getRequestHeaderFor(path, params) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    let url = this.getUrl(path, params);

    return new Request(url, {
      headers: headers, mode: 'cors'
    });
  }

  getRequestTo(path, params) {
    let header = this.getRequestHeaderFor(path, params);
    return fetch(header);
  }
}
