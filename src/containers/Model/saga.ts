import { takeLatest, put, call } from 'redux-saga/effects';
import { checkoutError, checkoutSuccess, getModelError, getModelSuccess, setActiveColor, setActiveTrim } from './actions';
import { api, utils } from 'utils';
import { ITrim, IModelDetails, IColor } from 'types/Model';
import {ICheckout, IGetModel} from 'types/actions';
import appHistory from 'appHistory';
import { CHECKOUT, CHECKOUT_STATUS, GET_MODEL } from './constants';

function* makeRequest(uri: string, method: string = 'GET', data?: object) {
  try {
    const models = yield api.request(uri, method, data);
    return yield models.data;
  } catch (e) {
    console.error(e);
    // todo rename to common error
    return yield put(getModelError({
      status: e.response.status,
      statusText: e.response.statusText,
    }));
  }
}

function* sagaWatcher() {
  yield takeLatest([GET_MODEL], getModelSaga);
  yield takeLatest([CHECKOUT], checkoutSaga);
}

function* getModelSaga({ data }: IGetModel) {
  if (data) {
    const model = yield makeRequest('cars/model/' + data);
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

function* checkoutSaga(checkoutModel: ICheckout) {
  const model = yield makeRequest('cars/lead', 'POST', {...checkoutModel.data});

  if (model && model.error) {
    appHistory.push(`/checkout/${CHECKOUT_STATUS.FAILURE}`);
    yield put(checkoutError(model.error));
  } else {
    yield call(checkoutSuccess);
    appHistory.push(`/checkout/${CHECKOUT_STATUS.SUCCESS}`);
  }
}

export default sagaWatcher;
