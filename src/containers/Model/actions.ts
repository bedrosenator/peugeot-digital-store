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
import { AppActionTypes } from 'types/actions';

export const getModel = (id: string = ''): AppActionTypes => {
  return {
    type: GET_MODEL,
    data: id
  }
};

export const getModelSuccess = (data: IModelDetails): AppActionTypes => {
  return {
    type: GET_MODEL_SUCCESS,
    data,
  }
};

export const getModelError = (error: TError): AppActionTypes => {
  return {
    type: GET_MODEL_ERROR,
    error,
  }
};

export const setActiveTrim = (data: ITrim): AppActionTypes => {
  return {
    type: SET_ACTIVE_TRIM,
    data,
  }
};

export const setActiveColor = (data: IColor): AppActionTypes => {
  return {
    type: SET_ACTIVE_COLOR,
    data,
  }
};

export const checkout = (data: ICheckoutModel): AppActionTypes => {
  return {
    type: CHECKOUT,
    data,
  }
};

export const checkoutSuccess = (): AppActionTypes => {
  return {
    type: CHECKOUT_SUCCESS,
  }
};

export const checkoutError = (error: TError): AppActionTypes => {
  return {
    type: CHECKOUT_ERROR,
    error
  }
};
