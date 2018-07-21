import { takeLatest, put, call } from 'redux-saga/effects';

import { initAppSuccess, initAppFailed, types } from '../actions/app';
import { fetchDashboard } from '../api/api';

function* appInit() {
  try {
    // try executing the saga
    const apps = yield call(fetchDashboard);
    yield put(initAppSuccess(apps.data));
  } catch (error) {
    // handle the error
    yield put(initAppFailed(error));
  }
}

export default function* watchInitApp() {
  yield takeLatest(types.APP_INIT, appInit);
}

