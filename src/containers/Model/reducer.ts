import { ModelActionTypes} from 'types/actions';

import {
  CHECKOUT,
  CHECKOUT_ERROR,
  CHECKOUT_STATUS,
  CHECKOUT_SUCCESS,
  GET_MODEL,
  GET_MODEL_ERROR,
  GET_MODEL_SUCCESS,
  SET_ACTIVE_COLOR,
  SET_ACTIVE_TRIM,
} from './constants';

import { ICheckoutModel, IColor, IModelDetails, ITrim, TError } from 'types/Model';

export type TModelActionType = {
  data: {
    currentModel: IModelDetails,
    selectedTrim: ITrim,
    selectedColor: IColor,
    checkoutModel: ICheckoutModel,
    checkoutStatus: boolean | null,
  },
  loading: boolean,
  error: TError,
};

const currentModel: IModelDetails = {
  code: '',
  name: '',
  trims: []
};

const selectedColor: IColor = {
  name: '',
  imageUrl: '',
  price: 0,
  iconUrl: '',
};

const checkoutModel: ICheckoutModel = {
  modelName: '',
  colorName: '',
  trimName: '',
}

const selectedTrim: ITrim = {
  name: '',
  price: '',
  colors: []
};

const initialState: TModelActionType = {
  data: {
    currentModel,
    selectedTrim,
    selectedColor,
    checkoutModel,
    checkoutStatus: null,
  },
  error: {
    status: 0,
    statusText: '',
  },
  loading: false,
};

function modelsReducer(state = initialState, action: ModelActionTypes) {
  const { data, type } = action;

  switch (type) {
    case GET_MODEL:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
          currentModel: {
            ...state.data.currentModel,
            code: data,
          }
        },
        error: null,
      }
    case GET_MODEL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          currentModel: data,
          // selectedTrim: typeof data !== 'string' && adaptTrim(data),
          // selectedTrim: data.trims[0],
          // selectedColor: data.trims[0].colors[0],
        },
        error: null,
      }
    case GET_MODEL_ERROR:
      return {
        ...state,
        loading: false,
        error: data,
      }
    case SET_ACTIVE_TRIM:
      return {
        ...state,
        data: {
          ...state.data,
          selectedTrim: data,
        }
      }
    case SET_ACTIVE_COLOR:
      return {
        ...state,
        data: {
          ...state.data,
          selectedColor: data,
        }
      }
    case CHECKOUT:
      return {
        ...state,
        data: {
          ...state.data,
          checkoutModel: {
            ...state.data.checkoutModel,
            modelName: data,
          },
          checkoutStatus: null,
        },
        loading: true,
      }
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          checkoutStatus: CHECKOUT_STATUS.SUCCESS,
        },
        loading: false,
      }
    case CHECKOUT_ERROR:
      return {
        ...state,
        data: {
          ...state.data,
          checkoutStatus: CHECKOUT_STATUS.FAILURE,
        },
        error: data,
        loading: false,
      }
    default:
      return state;
  }
}

export default modelsReducer;
