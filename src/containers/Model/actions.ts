import {
  GET_MODEL,
  GET_MODEL_SUCCESS,
  GET_MODEL_ERROR,
  SET_ACTIVE_TRIM,
  SET_ACTIVE_COLOR,
  CHECKOUT,
  CHECKOUT_SUCCESS, CHECKOUT_ERROR
} from './constants';
import { ITrim, IModelDetails, IColor, TError, ICheckoutModel } from 'types/Model';
import { ModelActionTypes } from 'types/actions';

export const getModel = (id: string = ''): ModelActionTypes => {
  return {
    type: GET_MODEL,
    data: id
  }
};

export const getModelSuccess = (data: IModelDetails): ModelActionTypes => {
  return {
    type: GET_MODEL_SUCCESS,
    data,
  }
};

export const getModelError = (error: TError): ModelActionTypes => {
  return {
    type: GET_MODEL_ERROR,
    error,
  }
};

export const setActiveTrim = (data: ITrim): ModelActionTypes => {
  return {
    type: SET_ACTIVE_TRIM,
    data,
  }
};

export const setActiveColor = (data: IColor): ModelActionTypes => {
  return {
    type: SET_ACTIVE_COLOR,
    data,
  }
};

export const checkout = (data: ICheckoutModel): ModelActionTypes => {
  return {
    type: CHECKOUT,
    data,
  }
};

export const checkoutSuccess = (): ModelActionTypes => {
  return {
    type: CHECKOUT_SUCCESS,
  }
};

export const checkoutError = (error: TError): ModelActionTypes => {
  return {
    type: CHECKOUT_ERROR,
    error
  }
};
