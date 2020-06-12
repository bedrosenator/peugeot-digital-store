import { TRootReducerState } from 'reducer';
import { TActionType } from './reducer';
import { createSelector } from 'reselect';
import { ICheckoutModel, IColor, IModelDetails, ISelectedModel, ITrim } from 'types/Model';

export const getModelDataSelector = (state: TRootReducerState) => {
  return state.model && state.model;
};

export const getModelSelector = createSelector(getModelDataSelector, (model: TActionType): IModelDetails => {
  return model.data;
});

export const getSelectedTrimSelector = createSelector(getModelDataSelector, (model: TActionType): ITrim => {
  return model.selectedTrim;
});

export const getSelectedColorSelector = createSelector(getModelDataSelector, (model: TActionType): IColor => {
  return model.selectedColor;
});

export const getSelectedModelSelector = createSelector(getModelSelector, getSelectedTrimSelector, getSelectedColorSelector,
  (model, selectedTrim, selectedColor): ISelectedModel => {
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

export const checkoutModelSelector = createSelector(getSelectedModelSelector,
  (model): ICheckoutModel => {
    return {
      modelName: model.name,
      colorName: model.trim.color.name,
      trimName: model.trim.name,
    }
});

export const totalPriceSelector = createSelector(getSelectedModelSelector, (model): string => {
  return model.trim.price + model.trim.color.price;
});

export const getModelLoaderSelector = createSelector(getModelDataSelector, (state: TActionType): boolean => {
  return state.loading;
});
