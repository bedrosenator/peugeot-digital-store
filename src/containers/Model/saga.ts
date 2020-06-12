import { takeLatest, put, call } from 'redux-saga/effects';
import { checkoutError, checkoutSuccess, getModelError, getModelSuccess } from './actions';
import { api, utils } from 'utils';
import {ITrim, IModelDetails, IColor } from 'types/Model';
import { ICheckout, IGetModel } from 'types/actions';
import appHistory from 'appHistory';
import { CHECKOUT, CHECKOUT_STATUS, GET_MODEL } from './constants';

function* sagaWatcher() {
  yield takeLatest([GET_MODEL], getModelSaga);
  yield takeLatest([CHECKOUT], checkoutSaga);
}

function* getModelSaga({ data }: IGetModel) {
  if (data) {
    const model = yield api.request({ uri: `cars/model/${data}`, errorAction: getModelError });
    const sortedByTrims = sortModelTrims(model);
    yield put(getModelSuccess(sortedByTrims));
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
  const model = yield api.request({
    uri: 'cars/lead',
    method: 'POST',
    data: {...checkoutModel.data},
    errorAction: checkoutError
  });

  if (model && model.error) {
    appHistory.push(`/checkout/${CHECKOUT_STATUS.FAILURE}`);
    yield put(checkoutError(model.error));
  } else {
    yield call(checkoutSuccess);
    appHistory.push(`/checkout/${CHECKOUT_STATUS.SUCCESS}`);
  }
}

export default sagaWatcher;
