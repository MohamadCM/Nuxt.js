import axios from 'axios';
import { serverUrl } from '../const/ip.js';
var publicToken = require('./publicToken.js');
axios.defaults.baseURL = serverUrl;

function isLoggedIn (ctx) {
  var bearerToken = ctx.$hls.get('bearerToken');
  if (bearerToken === undefined) {
    bearerToken = null;
  }
  return {
    loggedIn: bearerToken !== null,
    token: bearerToken
  };
}

function canLogin (ctx) {
  var num = ctx.$hls.get('number');
  var pass = ctx.$hls.get('password');
  return {
    canLogin: !(num === null || pass === null),
    number: num,
    password: pass
  };
}

async function doLogin (ctx, number, password, save) {
  var bearerToken = await publicToken.getPublicToken(ctx);
  axios.defaults.headers.common = {
    Authorization: `bearer ${bearerToken}`
  };

  var result = await axios.post(
    '/api/v2.0/common/user/account/login',
    {
      number: number,
      password: password
    },
    {
      headers: {
        Authorization: `bearer ${bearerToken}`
      }
    }
  );
  if (result.data.status.code === 1) {
    ctx.$hls.set('bearerToken', result.data.result.token);
    if (save) {
      ctx.$hls.set('number', number);
      ctx.$hls.set('password', password);
    }
  }

  return {
    success: result.data.status.code === 1,
    message: result.data.status.message
  };
}

export { isLoggedIn, canLogin, doLogin };
