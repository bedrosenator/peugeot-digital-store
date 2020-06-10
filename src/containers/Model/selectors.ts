import { TRootReducerState } from 'reducer';
import { TActionType } from './reducer';
import {createSelector} from 'reselect';
// todo refactor
// todo move types to types file from reducer
// todo rename TState
export const getModelDataSelector = ( state: TRootReducerState ) => {
  return state.model && state.model;
};

export const getModelSelector = createSelector(getModelDataSelector, (state: TActionType) => {
  return state.data;
});

export const getSelectedTrimSelector = createSelector(getModelDataSelector, (state: TActionType) => {
  return state.selectedTrim;
});

// export const getTrimsSelector = createSelector(getModelDataSelector, (state: TActionType) => {
//   debugger
//   return state.data.trims;
// });

export const getColorsSelector = createSelector(getModelDataSelector, (state: TActionType) => {
  return state.selectedTrim.colors;
});

export const getSelectedColorSelector = createSelector(getModelDataSelector, (state: TActionType) => {
  return state.selectedColor;
});

export const getModelLoaderSelector = createSelector(getModelDataSelector, (state: TActionType) => {
  return state.loading;
});

// export const getModelSelector = ( getModelDataSelector: TActionType ) => {
//   debugger
//   return getModelDataSelector.model.data
// }
// export const getModelLoaderSelector = ( state: TRootReducerState ) => state.model.loading;
// export const getModelsSe
