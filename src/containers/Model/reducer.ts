import { GET_MODELS, GET_MODELS_SUCCESS, GET_MODELS_ERROR } from 'containers/Models/constants';
import {
  ModelActionTypes,
  AppActionTypes,
  IGetModelsSuccess,
  IGetModel,
  IGetModelError,
  IGetModelSuccess
} from 'types/actions';

import {GET_MODEL, GET_MODEL_ERROR, GET_MODEL_SUCCESS, SET_ACTIVE_TRIM} from './constants';
import {sortBy} from '../../utils/utils';
import { IColor, ITrim, IModelDetails } from 'types/Model';

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
  error: null,
  loading: false,
};
// todo change IGetModel to specific interface
function modelsReducer(state = initialState, action: IGetModelSuccess) {
  switch (action.type) {
    case GET_MODEL:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
          code: action.data,
        }
      }
    case GET_MODEL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: { ...action.data },
        // data: {
        //   ...action.data,
        //   trims: sortBy<ITrim>(action.data.trims, 'price')
        // }
      }
    // todo add error handling
    case GET_MODEL_ERROR:
      return {
        ...state,
        loading: false,
        // error: action.error,
      }
    case SET_ACTIVE_TRIM:
      return {
        ...state,
        selectedTrim: action.data
        // error: action.error,
      }
    default:
      return state;
  }
}

export default modelsReducer;