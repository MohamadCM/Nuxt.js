import axios from 'axios';
import { serverUrl } from '../const/ip.js';
var publicToken = require('./publicToken.js');
var login = require('./login.js');
axios.defaults.baseURL = serverUrl;

async function getChildren (ctx, parentLevel) {
  var bearerToken = await publicToken.getPublicToken(ctx);
  axios.defaults.headers.common = {
    Authorization: `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  if (parentLevel !== 0) {
    var result = await axios.get(`/api/v1.0/auction/category/category`, {
      params: { json: { parentLevel: parentLevel } }
    });
  } else {
    result = await axios.get(`/api/v1.0/auction/category/category`, {
      params: { json: {} }
    });
  }
  return result.data;
}

async function getChain (ctx, level) {
  var bearerToken = await publicToken.getPublicToken(ctx);
  axios.defaults.headers.common = {
    Authorization: `bearer ${bearerToken}`
  };

  var result = await axios.get('/api/v1.0/auction/category/chain',
    { params: { json: { level: level } } }
  );
  return result.data;
}

async function addCategory (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = { Authorization: `bearer ${bearerToken}` };
  var result = await axios.post('/api/v1.0/auction/category/add', requestParams, {
    headers: {
      Authorization: `bearer ${bearerToken}`
    }
  });
  return result.data;
}

async function updateCategory (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = { Authorization: `bearer ${bearerToken}` };
  var result = await axios.post('/api/v1.0/auction/category/update', requestParams, {
    headers: {
      Authorization: `bearer ${bearerToken}`
    }
  });
  return result.data;
}

async function getChildren2 (ctx, items, level) {
  var res = await getChildren(ctx, level);
  for (var i = 0; i < res.result.length; i++) {
    items.push({
      name: res.result[i].name,
      id: res.result[i].category,
      is_last: res.result[i].is_last === 1
    });
  }
}

export { getChildren, addCategory, getChildren2, updateCategory, getChain };
