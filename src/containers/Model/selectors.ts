import { TRootReducerState } from 'reducer';
import { TActionType } from './reducer';
import { createSelector } from 'reselect';
// todo refactor

export const getModelDataSelector = (state: TRootReducerState) => {
  return state.model && state.model;
};

export const getModelSelector = createSelector(getModelDataSelector, (state: TActionType) => {
  return state.data;
});

export const getSelectedTrimSelector = createSelector(getModelDataSelector, (state: TActionType) => {
  return state.selectedTrim;
});

export const getSelectedColorSelector = createSelector(getModelDataSelector, (state: TActionType) => {
  return state.selectedColor;
});

export const getModelLoaderSelector = createSelector(getModelDataSelector, (state: TActionType) => {
  return state.loading;
});
