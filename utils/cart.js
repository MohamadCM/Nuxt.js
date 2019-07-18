import { serverUrl } from '../const/ip.js';
var axios = require('axios');
var login = require('./login.js');
axios.defaults.baseURL = serverUrl;

async function getPurchaseStates (ctx) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.get('/api/v2.0/admin/user/purchase/state');
  return result.data;
}

async function getPurchases (ctx, params) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.get('/api/v2.0/admin/user/purchase', { params });
  return result.data;
}

async function getPurchase (ctx, params) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.get('/api/v2.0/admin/user/purchase', { params });
  return result.data;
}

async function addItem (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/user/purchase/item', requestParams);
  return result.data;
}
async function deleteItem (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.delete('/api/v2.0/admin/user/purchase/item', { params: requestParams });
  return result.data;
}
async function changeStatus (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.default.put('/api/v2.0/admin/user/purchase', requestParams, { params: requestParams });
  return result.data;
}
export { getPurchaseStates, getPurchases, getPurchase, addItem, deleteItem, changeStatus };
