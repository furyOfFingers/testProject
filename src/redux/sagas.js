import { takeEvery, put, call } from 'redux-saga/effects';
import { CHANGE_PATH } from "./types";
import { push } from 'connected-react-router'

export function* sagaworker() {
  yield put(push('/mainPage'))
}

export function* sagaWatcher() {
  yield takeEvery(CHANGE_PATH, sagaworker);
}

