import { fork, spawn, all, call } from 'redux-saga/effects'
import modelsSaga from 'containers/Models/saga';
import modelSaga from 'containers/Model/saga';

export default function* rootSaga() {
  const sagas = [
    modelsSaga,
    modelSaga,
  ];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}