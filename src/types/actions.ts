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

export interface IGetModels {
  type: typeof GET_MODELS,
  data?: IModel[]
}

export interface IGetModelsSuccess {
  type: typeof GET_MODELS_SUCCESS,
  data: IModel[]
}

export interface IGetModelsError {
  type: typeof GET_MODELS_ERROR,
  data: TError,
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
  data: TError,
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
  data: typeof CHECKOUT_STATUS.SUCCESS,
}

export interface ICheckoutError {
  type: typeof CHECKOUT_ERROR,
  data: TError,
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
