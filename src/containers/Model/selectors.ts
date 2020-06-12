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

export const getSelectedModelSelector = createSelector(getModelSelector, getSelectedTrimSelector, getSelectedColorSelector,
  (model, selectedTrim, selectedColor) => {
  const color = selectedTrim.colors.find((color) => selectedColor.name === color.name) || selectedColor;
  const trim = {
    name: selectedTrim.name,
    price: selectedTrim.price,
    color,
  }
  return {
    name: model.name,
    code: model.code,
    trim,
  };
});

export const totalPriceSelector = createSelector(getSelectedModelSelector, (model) => {
  return model.trim.price + model.trim.color.price;
});

export const getModelLoaderSelector = createSelector(getModelDataSelector, (state: TActionType) => {
  return state.loading;
});
