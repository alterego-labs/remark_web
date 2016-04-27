'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  API: {
    rootUrl: 'http://remark-api.alterego-labs.com/api/v1/'
  }
};

export default Object.freeze(Object.assign({}, baseConfig, config));
