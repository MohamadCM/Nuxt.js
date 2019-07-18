import axios from 'axios';
import { serverUrl } from '../const/ip.js';
var publicToken = require('./publicToken.js');
var login = require('./login.js');
axios.defaults.baseURL = serverUrl;

async function GetAll (ctx) {
  var bearerToken = await publicToken.getPublicToken(ctx);
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.get('/api/v2.0/common/auction/brand/GetAll');
  return result.data;
}

async function GetBrands (ctx, category) {
  var bearerToken = await publicToken.getPublicToken(ctx);
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.get('/api/v1.0/auction/brand/get', { params: { category } });
  return result.data;
}

async function AddBrand (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/auction/brand/addBrand', requestParams);
  return result.data;
}

async function GetCategories (ctx, brand) {
  var bearerToken = await publicToken.getPublicToken(ctx);
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.get('/api/v2.0/common/auction/brand/getCategories', { params: { brand } });
  return result.data;
}

async function AddToCategory (ctx, category, brand) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/auction/brand/addCategoryBrand', {
    category: category,
    brand: brand
  });
  return result.data;
}

async function UpdateBrand (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/auction/brand/update', requestParams);
  return result.data;
}

async function RemoveFromCategory (ctx, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.delete('/api/v2.0/admin/auction/brand/removeCategoryBrand', { params: { id } });
  return result.data;
}

async function RemoveBrand (ctx, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.delete('/api/v2.0/admin/auction/brand/removeBrand', { params: { id } });
  return result.data;
}

export { GetBrands, AddBrand, GetAll, GetCategories, AddToCategory, RemoveFromCategory, UpdateBrand, RemoveBrand };
