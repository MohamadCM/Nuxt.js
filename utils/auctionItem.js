var axios = require('axios');
var login = require('./login.js');

async function AddAuctionItem (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/auction/item/addAuctionItem', requestParams);
  return result.data;
}

async function GetAuctionItemList (ctx, json, offset, count) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.get('/api/v1.0/auction/item/getAuctionItems', { params: { json, offset, count } });
  return result.data;
}
async function EditAuctionItem (ctx, requestParams) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`
  };
  var result = await axios.post('/api/v2.0/admin/auction/item/updateAuctionItem', requestParams);
  return result.data;
}
async function getItemDetails (ctx, id) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };

  var result = await axios.get(`/api/v1.0/auction/item/getItem?auction_item=${id}`);
  return result.data;
}

export { GetAuctionItemList, AddAuctionItem, EditAuctionItem, getItemDetails };
