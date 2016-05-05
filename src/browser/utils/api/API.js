// let config = require('config');
import 'whatwg-fetch';

export default class API {
  constructor() {
  }

  serialize(obj) {
    var str = [];
    for(var p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }

  getUrl(path) {
    // return config.API.rootPath + path;
    return 'http://remark-api.alterego-labs.com/api/v1/' + path;
  }

  getUrlQuery(path, params) {
    let url = this.getUrl(path);
    return url + '?' + this.serialize(params);
  }

  getRequestHeaderFor(url, method, params) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });

    return new Request(url, {
      headers: headers, mode: 'cors', method: method, body: params
    });
  }

  getRequestTo(path, params) {
    let url = this.getUrlQuery(path, params);
    let header = this.getRequestHeaderFor(url, 'GET', params);
    return fetch(header).then(function (response) {
      return response.json();
    });
  }

  requestTo(type, path, params) {
    let url = this.getUrl(path, params);
    return fetch(url, {
      method: type,
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      mode: 'cors'
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    });
  }

  postRequestTo(path, params) {
    return this.requestTo('POST', path, params);
  }

  putRequestTo(path, params) {
    return this.requestTo('PUT', path, params);
  }
}
