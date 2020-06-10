import { GET_MODELS, GET_MODELS_SUCCESS, GET_MODELS_ERROR } from 'containers/Models/constants';
import {
  CHECKOUT,
  CHECKOUT_ERROR, CHECKOUT_STATUS,
  CHECKOUT_SUCCESS,
  GET_MODEL,
  GET_MODEL_ERROR,
  GET_MODEL_SUCCESS,
  SET_ACTIVE_COLOR,
  SET_ACTIVE_TRIM
} from 'containers/Model/constants';
import { ITrim, IModel, TError, IModelDetails, IColor, ICheckoutModel } from 'types/Model';

interface IBaseModel {
  data?: IModelDetails | string,
  error?: TError,
}

interface IBaseModels {
  error?: TError,
  data?: IModel[],
}

export interface IGetModels extends IBaseModels {
  type: typeof GET_MODELS,
}

export interface IGetModelsSuccess extends IBaseModels {
  type: typeof GET_MODELS_SUCCESS,
}

export interface IGetModelsError extends IBaseModels {
  type: typeof GET_MODELS_ERROR,
}

export interface IGetModel extends IBaseModel {
  type: typeof GET_MODEL,
}

export interface IGetModelSuccess extends IBaseModel {
  type: typeof GET_MODEL_SUCCESS,
}

export interface IGetModelError extends IBaseModel {
  type: typeof GET_MODEL_ERROR,
}

export interface ISetActiveTrim {
  type: typeof SET_ACTIVE_TRIM,
  data: ITrim,
}

export interface ISetActiveColor {
  type: typeof SET_ACTIVE_COLOR,
  data: IColor,
}

export interface ICheckout {
  type: typeof CHECKOUT,
  data: ICheckoutModel,
}

export interface ICheckoutSuccess {
  type: typeof CHECKOUT_SUCCESS,
  data: typeof CHECKOUT_STATUS,
}

export interface ICheckoutError {
  type: typeof CHECKOUT_ERROR,
  error: TError,
}

export type ModelsActionTypes = IGetModels | IGetModelsSuccess | IGetModelsError;

export type ModelActionTypes =
  IGetModel
  | IGetModelSuccess
  | IGetModelError
  | ISetActiveTrim
  | ISetActiveColor
  | ICheckout
  | ICheckoutSuccess
  | ICheckoutError;

export type AppActionTypes = ModelsActionTypes | ModelActionTypes;
