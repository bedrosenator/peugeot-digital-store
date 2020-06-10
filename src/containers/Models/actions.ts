import { GET_MODELS, GET_MODELS_SUCCESS, GET_MODELS_ERROR } from 'containers/Models/constants';
import { TError, IModel } from 'types/Model';
import { IGetModelsSuccess, IGetModels, IGetModelsError, ModelsActionTypes } from 'types/actions';

export function getModels(): ModelsActionTypes {
  return {
    type: GET_MODELS,
  }
}

export function getModelsSuccess(data: IModel[]): ModelsActionTypes {
  return {
    type: GET_MODELS_SUCCESS,
    data,
  }
}

export function getModelsError(error: TError): ModelsActionTypes {
  return {
    type: GET_MODELS_ERROR,
    error,
  }
}
