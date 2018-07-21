import { fork, all } from 'redux-saga/effects';
import watchInitApp from './watchInitApp';

export default function* rootSaga() {
  yield all([
    fork(watchInitApp),
  ]);
}

