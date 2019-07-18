import { serverUrl } from '../const/ip.js';
var login = require('./login.js');
var axios = require('axios');
axios.defaults.baseURL = serverUrl;

async function getSubItemList (ctx, status, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.get('/api/v2.0/admin/auction/item/getSubItemList', { params: { status: status, id: id } });
  return result.data;
}

async function getPendingItem (ctx, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.get('/api/v1.0/auction/item/getPendings', { params: { user: id } });
  return result.data;
}

async function EditSubItem (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.put('/api/v2.0/admin/auction/item/updateSubItem', requestParams);
  return result.data;
}

async function AddSubItem (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/auction/subItem', requestParams);
  return result.data;
}

async function getSubItem (ctx, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.get('/api/v2.0/admin/auction/item/getSubItem', { params: { id } });
  return result.data;
}

export { getSubItem, EditSubItem, getPendingItem, AddSubItem, getSubItemList };
