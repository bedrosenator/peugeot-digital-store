import config from 'config';
import axios from 'axios';
import { put } from 'redux-saga/effects';
import {TError} from '../types/Model';
import { AppActionTypes } from '../types/actions';

type TRequest = {
  uri: string,
  method?: any,
  data?: object,
  errorAction: (error: TError) => AppActionTypes
};

function* request({ uri, method = 'GET', data, errorAction }: TRequest) {
  try {
    const request = yield axios({
      method: method,
      url: config.api.url + uri,
      data,
      headers: {
        'X-API-KEY': config.api.apiKey,
        'Content-Type': 'application/json',
      },
    });
    return yield request.data;
  } catch (e) {
    console.error(e);
    return yield put(errorAction({
      status: e.response.status,
      statusText: e.response.statusText,
    }));
  }
}

export default {
  request,
}
