import axios from 'axios';
import { serverUrl } from '../const/ip.js';
axios.defaults.baseURL = serverUrl;
axios.defaults.headers.common = {
  'Content-Type': 'text/plain'
};

async function getPublicToken (ctx) {
  var publicToken = ctx.$hls.get('publicToken');
  if (publicToken === null) {
    var token = await axios.get('/api/v1.0/public/guestAuth');
    ctx.$hls.set('publicToken', token.data);
    publicToken = token.data;
  }
  return publicToken;
}

export { getPublicToken };
