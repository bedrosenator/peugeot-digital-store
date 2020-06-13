import { TRootReducerState } from 'reducer';
import { TModelActionType } from './reducer';
import { createSelector } from 'reselect';
import { ICheckoutModel, IColor, IModelDetails, ISelectedModel, ITrim } from 'types/Model';

export const modelSelector = (state: TRootReducerState) => {
  return state.model;
};

export const selectModelData = createSelector(modelSelector, (model: TModelActionType ) => {
  return model.data;
});

export const selectCurrentModel = createSelector(selectModelData, (model): IModelDetails => {
  return model.currentModel;
});

export const selectActiveTrim = createSelector(selectModelData, (model): ITrim => {
  return model.selectedTrim;
});

export const selectActiveColor = createSelector(selectModelData, (model): IColor => {
  return model.selectedColor;
});

export const selectActiveModel = createSelector(selectCurrentModel, selectActiveTrim, selectActiveColor,
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

export const selectCheckoutModel = createSelector(selectActiveModel,
  (model): ICheckoutModel => {
    return {
      modelName: model.name,
      colorName: model.trim.color.name,
      trimName: model.trim.name,
    }
});

export const selectTotalPrice = createSelector(selectActiveModel, (model): string => {
  return model.trim.price + model.trim.color.price;
});

export const selectModelLoader = createSelector(modelSelector, (state: TModelActionType): boolean => {
  return state.loading;
});
