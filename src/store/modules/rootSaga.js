import { all } from 'redux-saga/effects';

import veiculo from './veiculo/sagas';

export default function* rootSaga() {
  return yield all([veiculo]);
}
