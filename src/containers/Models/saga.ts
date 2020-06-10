import { takeLatest, put } from 'redux-saga/effects';
import { GET_MODELS } from 'containers/Models/constants';
import { getModelsError, getModelsSuccess } from './actions';
import { api }  from 'utils';

function* makeRequest(uri: string) {
  try {
    const models = yield api.request(uri);
    return yield models.data;
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
