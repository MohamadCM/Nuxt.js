import axios from 'axios';
import { serverUrl } from '../const/ip.js';
var login = require('./login.js');
axios.defaults.baseURL = serverUrl;

async function AddAttribute (ctx, name) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/auction/attribute/addAttribute', { name: name });
  return result.data;
}

async function UpdateAttribute (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/auction/attribute/update', requestParams);
  return result.data;
}

async function GetAttributes (ctx) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.get('/api/v2.0/admin/auction/attribute/getAll');
  return result.data;
}

async function getItemValues (ctx, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    Authorization: `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };

  var result = await axios.get(`/api/v1.0/auction/attribute/get`, {
    params: { json: { id: id } }
  });

  return result.data;
}

async function GetCategoryAttributes (ctx, category) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.get('/api/v2.0/admin/auction/attribute/get', { params: { category } });
  return result.data;
}

async function AddToCategory (ctx, category, attribute) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/auction/attribute/addCategory', {
    category: category,
    attribute: attribute
  });
  return result.data;
}

async function RemoveFromCategory (ctx, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.delete('/api/v2.0/admin/auction/attribute/removeCategory', { params: { id } });
  return result.data;
}

async function GetCategories (ctx, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.get('/api/v2.0/admin/auction/attribute/GetCategories', { params: { id } });
  return result.data;
}

async function SetItemAttribute (ctx, json) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.post('/api/v1.0/auction/attribute/setForItem', json);
  return result.data;
}

async function RemoveAttribute (ctx, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.delete('/api/v2.0/admin/auction/attribute/remove', { params: { id } });
  return result.data;
}

export { GetCategories, SetItemAttribute, AddAttribute, GetAttributes, UpdateAttribute, RemoveAttribute,
  AddToCategory, RemoveFromCategory, GetCategoryAttributes, getItemValues };
