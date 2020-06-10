const SUCCESS = '_SUCCESS';
const ERROR = '_ERROR';

export const GET_MODEL = 'GET_MODEL';
export const GET_MODEL_SUCCESS = GET_MODEL + SUCCESS;
export const GET_MODEL_ERROR = GET_MODEL + ERROR;

export const SET_ACTIVE_TRIM = 'SET_ACTIVE_TRIM';
export const SET_ACTIVE_COLOR = 'SET_ACTIVE_COLOR';

export const CHECKOUT = 'CHECKOUT';
export const CHECKOUT_SUCCESS = CHECKOUT + SUCCESS;
export const CHECKOUT_ERROR = CHECKOUT + ERROR;

export const CHECKOUT_STATUS = {
  SUCCESS: 'success',
  FAILURE: 'failure'
};