import { TRootReducerState } from 'reducer';
import { createSelector } from 'reselect';
import { IModelsReducer } from './reducer';

export const modelsSelector = ( state: TRootReducerState ) => {
  return state.models;
};

export const selectModels = createSelector(modelsSelector, (state: IModelsReducer) => {
  return state.data;
});

export const selectModelsLoader = createSelector(modelsSelector, (state: IModelsReducer): boolean => {
  return state.loading;
});
