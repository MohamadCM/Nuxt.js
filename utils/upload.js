import axios from 'axios';
import { serverUrl } from '../const/ip.js';
var publicToken = require('./publicToken.js');
axios.defaults.baseURL = serverUrl;

async function AddSubPic (ctx, subItem, url) {
  var bearerToken = await publicToken.getPublicToken(ctx);
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.post('api/v1.0/upload/addSubPic', {
    'sub_item': subItem,
    'url': url,
    'caption': 'cap'
  });
  return result.data;
}

async function AddPic (ctx, item, url) {
  var bearerToken = await publicToken.getPublicToken(ctx);
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.post('api/v1.0/upload/addPic', {
    'auction_item': item,
    'url': url,
    'caption': 'cap'
  });
  return result.data;
}

async function AddDoc (ctx, item, url) {
  var bearerToken = await publicToken.getPublicToken(ctx);
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.post('api/v1.0/upload/addDoc', {
    'auction_item': item,
    'url': url,
    'name': url
  });
  return result.data;
}

export { AddSubPic, AddPic, AddDoc };
