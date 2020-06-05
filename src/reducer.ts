import { combineReducers } from 'redux';
import models from 'containers/Models/reducer';
import model from 'containers/Model/reducer';

const rootReducer = combineReducers({
  models,
  model,
});

export type TRootReducerState = ReturnType<typeof rootReducer>;

export default rootReducer;