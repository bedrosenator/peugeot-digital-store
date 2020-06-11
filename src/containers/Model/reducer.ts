import {
  IGetModelSuccess, ModelActionTypes,
} from 'types/actions';

import {
  CHECKOUT,
  CHECKOUT_ERROR,
  CHECKOUT_SUCCESS,
  GET_MODEL,
  GET_MODEL_ERROR,
  GET_MODEL_SUCCESS,
  SET_ACTIVE_COLOR,
  SET_ACTIVE_TRIM,
  CHECKOUT_STATUS,
} from './constants';

import {IColor, ITrim, IModelDetails, ICheckoutModel} from 'types/Model';

// export type TError = {
//   status: number,
//   statusText: string,
// };
//
// export interface IColor {
//   name: string,
//   imageUrl: string,
//   price: number,
//   iconUrl: string,
// }
//
// export interface ITrim {
//   colors: IColor[],
//   name: string,
//   price: string,
// }
//
// export type TModelDetails = {
//   code: string,
//   // imageUrl: string,
//   name: string,
//   // priceFrom: string,
//   trims: ITrim[]
// };
//
// class TModelDetails {
// }

export type TActionType = {
  // type?: string,
  // todo add model type
  data: IModelDetails,
  loading: boolean,
  error: Error | null,
  selectedTrim: ITrim,
  selectedColor: IColor,
  checkoutModel: ICheckoutModel,
  checkoutStatus: boolean | null,
};

const initialState: TActionType = {
  data: {
    code: '',
    name: '',
    trims: []
  },
  selectedTrim: {
    name: '',
    price: '',
    colors: []
  },
  selectedColor: {
    name: '',
    imageUrl: '',
    price: 0,
    iconUrl: '',
  },
  checkoutModel: {
    modelName: '',
    colorName: '',
    trimName: '',
  },
  checkoutStatus: null,
  error: null,
  loading: false,
};
// todo change IGetModel to specific interface
function modelsReducer(state = initialState, action: ModelActionTypes) {
  // @ts-ignore
  const { data, type, error } = action;
  switch (type) {
    case GET_MODEL:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
          code: data,
        },
        error: null,
      }
    case GET_MODEL_SUCCESS:
      return {
        ...state,
        loading: false,
        data,
        // data: {
        //   ...action.data,
        //   trims: sortBy<ITrim>(action.data.trims, 'price')
        // }
      }
    // todo add error handling
    case GET_MODEL_ERROR:
      debugger
      return {
        ...state,
        loading: false,
        error,
      }
    case SET_ACTIVE_TRIM:
      return {
        ...state,
        selectedTrim: data,
      }
    case SET_ACTIVE_COLOR:
      return {
        ...state,
        selectedColor: data,
      }
    case CHECKOUT:
      return {
        ...state,
        checkoutModel: data,
        checkoutStatus: null,
        loading: true,
      }
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        checkoutStatus: CHECKOUT_STATUS.SUCCESS,
        loading: false,
      }
    case CHECKOUT_ERROR:
      return {
        ...state,
        error: data,
        checkoutStatus: CHECKOUT_STATUS.FAILURE,
        loading: false,
      }
    default:
      return state;
  }
}

export default modelsReducer;
