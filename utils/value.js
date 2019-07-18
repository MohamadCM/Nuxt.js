import axios from 'axios';
import { serverUrl } from '../const/ip.js';
var login = require('./login.js');
axios.defaults.baseURL = serverUrl;

async function GetValues (ctx, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.get('/api/v2.0/admin/auction/attribute/getValues', { params: { id } });
  return result.data;
}

async function UpdateValue (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/auction/attribute/updateValue', requestParams);
  return result.data;
}

async function AddValues (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/auction/attribute/addAttrValue', requestParams);
  return result.data;
}

/* async function GetCategoryAttribute (ctx, category) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.get('/api/v1.0/auction/attribute/getByCategory', { params: { category } });
  return result.data;
} */

async function SetItemAttribute (ctx, json) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.post('/api/v1.0/auction/attribute/setForItem', json);
  return result.data;
}

async function RemoveValue (ctx, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.delete('/api/v2.0/admin/auction/attribute/removeValue', { params: { id } });
  return result.data;
}

export { GetValues, SetItemAttribute, AddValues, UpdateValue, RemoveValue };
