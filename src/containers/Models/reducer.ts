import { GET_MODELS, GET_MODELS_SUCCESS, GET_MODELS_ERROR } from 'containers/Models/constants';
import {ModelsActionTypes, AppActionTypes, IGetModelsSuccess, IGetModels, IGetModelsError} from 'types/actions';

export type TError = {
  status: number,
  statusText: string,
};

export type TModel = {
  code: string,
  imageUrl: string,
  name: string,
  priceFrom: string,
};

export type TModelsList = {
  data: TModel[]
}

type TActionType = {
  // type?: string,
  // todo add model type
  data: TModel[]
  loading: boolean,
  error: Error | null,
};

const initialState: TActionType = {
  data: [],
  error: null,
  loading: false,
};
// todo change IGetModel to specific interface
function modelsReducer(state = initialState, action: IGetModelsSuccess) {
  switch (action.type) {
    case GET_MODELS:
      return {
        ...state,
        loading: true,
      }
    case GET_MODELS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case GET_MODELS_ERROR:
      return {
        ...state,
        loading: false,
        // error: action.error,
      }
    default:
      return state;
  }
}

export default modelsReducer;