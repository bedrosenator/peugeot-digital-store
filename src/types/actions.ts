import { GET_MODELS, GET_MODELS_SUCCESS, GET_MODELS_ERROR } from 'containers/Models/constants';
import { TError, TModel } from 'containers/Models/reducer';
import {
  GET_MODEL,
  GET_MODEL_ERROR,
  GET_MODEL_SUCCESS,
  SET_ACTIVE_COLOR,
  SET_ACTIVE_TRIM
} from 'containers/Model/constants';
import {ITrim, IModelDetails, IColor} from 'types/Model';

export interface IGetModels {
  type: typeof GET_MODELS,
  // data?: TModel[],
  // error?: TError,
}

export interface IGetModelsSuccess {
  type: typeof GET_MODELS_SUCCESS,
  data: TModel[],
  // error?: TError | null,
}

export interface IGetModelsError {
  type: typeof GET_MODELS_ERROR,
  error: TError,
  // data?: TModel[]
}

export interface IGetModel {
  type: typeof GET_MODEL,
  data: string,
}

export interface IGetModelSuccess {
  type: typeof GET_MODEL_SUCCESS,
  data: IModelDetails,
}

export interface IGetModelError {
  type: typeof GET_MODEL_ERROR,
  error: TError,
}

export interface ISetActiveTrim {
  type: typeof SET_ACTIVE_TRIM,
  data: ITrim,
}

export interface ISetActiveColor {
  type: typeof SET_ACTIVE_COLOR,
  data: IColor,
}

export type ModelsActionTypes = IGetModels | IGetModelsError | IGetModelsSuccess;

export type ModelActionTypes = IGetModel | IGetModelSuccess | IGetModelError | ISetActiveTrim | ISetActiveColor;

export type AppActionTypes = ModelsActionTypes | ModelActionTypes;