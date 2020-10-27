import { fakeAsync } from '@src/utils/fakeAsync';
import { call, put, takeLatest } from 'redux-saga/effects';

function* increment() {
  try {
    yield call(fakeAsync);
    yield put({ type: 'INCREMENT' });
  } catch (e) {
    //
  }
}

export function* saga() {
  yield takeLatest('INCREMENT_ASYNC', increment);
}
