import axios from 'axios';
var login = require('./login.js');

async function getUser (ctx, obj, offset, limit) {
  axios.defaults.headers.common = {
    'Authorization': `bearer ${1234}`,
    'Content-Type': 'text/plain'
  };
  var result = await axios.get('http://localhost:8080/api/v2.0/admin/user/account/get', { params: { limit, offset, json: obj } });
  return result.data;
}

export { getUser };
