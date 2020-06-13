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

// todo change IGetModel to specific interface
function modelsReducer(state = initialState, { type, data = [] }: ModelsActionTypes): IModelsReducer {
  switch (type) {
    case GET_MODELS:
      return {
        ...state,
        loading: true,
      }
    case GET_MODELS_SUCCESS:
      return {
        ...state,
        //@ts-ignore
        data: data,
        loading: false,
      }
    case GET_MODELS_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}

export default modelsReducer;
