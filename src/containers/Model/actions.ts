import {
  GET_MODEL,
  GET_MODEL_SUCCESS,
  GET_MODEL_ERROR,
  SET_ACTIVE_TRIM,
  SET_ACTIVE_COLOR,
  CHECKOUT,
  CHECKOUT_SUCCESS,
  CHECKOUT_ERROR, CHECKOUT_STATUS
} from './constants';
import { ITrim, IModelDetails, IColor, TError, ICheckoutModel } from 'types/Model';
import {
  ICheckout,
  ICheckoutError,
  ICheckoutSuccess,
  IGetModel, IGetModelError,
  IGetModelSuccess,
  ISetActiveColor,
  ISetActiveTrim,
} from 'types/actions';

export const getModel = (id: string): IGetModel => {
  return {
    type: GET_MODEL,
    data: id
  }
};

export const getModelSuccess = (data: IModelDetails): IGetModelSuccess => {
  return {
    type: GET_MODEL_SUCCESS,
    data,
  }
};

export const getModelError = (error: TError): IGetModelError => {
  return {
    type: GET_MODEL_ERROR,
    data: error,
  }
};

export const setActiveTrim = (data: ITrim): ISetActiveTrim => {
  return {
    type: SET_ACTIVE_TRIM,
    data,
  }
};

export const setActiveColor = (data: IColor): ISetActiveColor => {
  return {
    type: SET_ACTIVE_COLOR,
    data,
  }
};

export const checkout = (data: ICheckoutModel): ICheckout => {
  return {
    type: CHECKOUT,
    data,
  }
};

export const checkoutSuccess = (): ICheckoutSuccess => {
  return {
    type: CHECKOUT_SUCCESS,
    data: CHECKOUT_STATUS.SUCCESS
  }
};

export const checkoutError = (error: TError): ICheckoutError => {
  return {
    type: CHECKOUT_ERROR,
    data: error,
  }
};
