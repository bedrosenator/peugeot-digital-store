import { GET_MODELS, GET_MODELS_SUCCESS, GET_MODELS_ERROR } from 'containers/Models/constants';
import { ModelsActionTypes} from 'types/actions';
import { IModel } from 'types/Model';

interface IModelsReducer {
  data: IModel[]
  loading: boolean,
  error: Error | null,
}

const initialState: IModelsReducer = {
  data: [],
  error: null,
  loading: false,
};

function modelsReducer(state = initialState, { type, data }: ModelsActionTypes) {
  switch (type) {
    case GET_MODELS:
      return {
        ...state,
        loading: true,
      }
    case GET_MODELS_SUCCESS:
      return {
        ...state,
        data: data,
        loading: false
      }
    case GET_MODELS_ERROR:
      return {
        ...state,
        loading: false,
        error: data,
      }
    default:
      return state;
  }
}

export default modelsReducer;
