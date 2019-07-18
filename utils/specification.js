import axios from 'axios';
var login = require('./login.js');

async function AddSpec (ctx, json) {
  var bearerToken = await login.isLoggedIn(ctx).token;
  axios.defaults.headers.common = {
    'Authorization': `bearer ${bearerToken}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.post('/api/v1.0/auction/specification/add', json);
  return result.data;
}

export { AddSpec };
