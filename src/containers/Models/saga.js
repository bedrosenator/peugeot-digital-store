import { takeLatest, put, call, select } from 'redux-saga/effects';
import { GET_MODELS } from 'containers/Models/constants';
import config from 'config';
import {getModelsError, getModelsSuccess} from './actions';

// todo move to utils
function* makeRequest(uri) {
  try {
    const url = config.api.url + uri;
    const modelsRequest = yield fetch(url, {
      headers: {
        'X-API-KEY': config.api.apiKey,
      }
    });
    // todo refactor
    if (modelsRequest.status !== 200) {
      yield put(getModelsError({
        status: modelsRequest.status,
        statusText: modelsRequest.statusText,
      }));
    } else {
      return yield modelsRequest.json();
    }
  } catch (e) {
    console.error(e);
    put(getModelsError(e));
  }
}

function* sagaWatcher() {
  yield takeLatest([GET_MODELS], getModelsSaga);
}

function* getModelsSaga() {
  const models = yield makeRequest('cars/models');
  yield put(getModelsSuccess(models));
}

export default sagaWatcher;
