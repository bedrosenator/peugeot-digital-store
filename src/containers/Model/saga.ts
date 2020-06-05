import { takeLatest, put, call, select } from 'redux-saga/effects';
import config from 'config';
import {getModelError, getModelSuccess, setActiveColor, setActiveTrim} from './actions';
import { GET_MODEL, GET_MODEL_SUCCESS } from './constants';
import {TRootReducerState} from 'reducer';
import { utils } from 'utils';
import { ITrim, IModelDetails, IColor } from 'types/Model';

// todo move into api utils
function* makeRequest(uri: string) {
  try {
    const url = config.api.url + uri;
    const modelsRequest = yield fetch(url, {
      headers: {
        'X-API-KEY': config.api.apiKey,
      }
    });
    // todo refactor
    if (modelsRequest.status !== 200) {
      yield put(getModelError({
        status: modelsRequest.status,
        statusText: modelsRequest.statusText,
      }));
    } else {
      return yield modelsRequest.json();
    }
  } catch (e) {
    console.error(e);
    put(getModelError(e));
  }
}

function* sagaWatcher() {
  yield takeLatest([GET_MODEL], getModelSaga);
}

function* getModelSaga() {
  const store = (state: TRootReducerState) => state;
  const storeData = yield select(store);
  const { model: { data } } = storeData;

  if (data) {
    const model = yield makeRequest('cars/model/' + data.code);
    const sortedByTrims = sortModelTrims(model);
    yield put(getModelSuccess(sortedByTrims));
    yield put(setActiveTrim(model.trims[0]));
    yield put(setActiveColor(model.trims[0].colors[0]));
  }
}

function sortModelTrims(model: IModelDetails): IModelDetails {
  const sortedTrims = utils.sortBy<ITrim>(model.trims, 'price');
  const sortedByPrice = sortedTrims.map((trim) => {
    return {
      ...trim,
      colors: utils.sortBy<IColor>(trim.colors, 'price'),
    }
  });

  return {
    ...model,
    trims: sortedByPrice,
  };
}

export default sagaWatcher;
