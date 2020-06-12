import { takeLatest, put } from 'redux-saga/effects';
import { GET_MODELS } from 'containers/Models/constants';
import { getModelsError, getModelsSuccess } from './actions';
import { api }  from 'utils';

function* sagaWatcher() {
  yield takeLatest([GET_MODELS], getModelsSaga);
}

function* getModelsSaga() {
  const models = yield api.request({ uri: 'cars/models', errorAction: getModelsError });
  yield put(getModelsSuccess(models));
}

export default sagaWatcher;
