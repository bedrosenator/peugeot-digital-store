import { GET_MODELS, GET_MODELS_SUCCESS, GET_MODELS_ERROR } from 'containers/Models/constants';
import { TError, IModel } from 'types/Model';
import {IGetModelsSuccess, IGetModels, IGetModelsError } from 'types/actions';

export function getModels(): IGetModels {
  return {
    type: GET_MODELS,
  }
}

export function getModelsSuccess(data: IModel[]): IGetModelsSuccess {
  return {
    type: GET_MODELS_SUCCESS,
    data,
  }
}

export function getModelsError(error: TError): IGetModelsError {
  return {
    type: GET_MODELS_ERROR,
    data: error,
  }
}
