import { GET_MODELS, GET_MODELS_SUCCESS, GET_MODELS_ERROR } from 'containers/Models/constants';
import { TError, TModel } from 'types/Model';
import { IGetModelsSuccess, IGetModels, IGetModelsError, ModelsActionTypes } from 'types/actions';

export function getModels(): IGetModels {
  return {
    type: GET_MODELS,
  }
}

export function getModelsSuccess(data: TModel[]): IGetModelsSuccess {
  return {
    type: GET_MODELS_SUCCESS,
    data,
  }
}

export function getModelsError(error: TError): IGetModelsError {
  return {
    type: GET_MODELS_ERROR,
    error,
  }
}
