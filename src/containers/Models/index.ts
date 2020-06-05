import { connect } from 'react-redux';
// import { store } from '../../store';
import Models from './Models';
import { getModels } from './actions';

function mapStateToProps(state: object) {
  return {
    ...state
  }
}

// type Dispatch = (): object => {}

// function mapDispatchToProps(dispatch) {
//   return {
//     getModels: () => dispatch(getModels())
//   }
// }
// export default connect()(Models);
export default Models;