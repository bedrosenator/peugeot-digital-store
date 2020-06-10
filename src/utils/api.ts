import config from 'config';
import axios from 'axios';

// todo fix any
function* request(uri: string, method?: any, data?: object) {
  return yield axios({
    method,
    url: config.api.url + uri,
    data,
    headers: {
      'X-API-KEY': config.api.apiKey,
      'Content-Type': 'application/json',
    },
  });
}

export default {
  request,
}