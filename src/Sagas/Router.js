import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';
import { watchLogout } from './Authorization/Logout';
import { baseUrl } from './Sagas';
import { loginErrorHandlerAction } from '../Redux/ErrorHandler/Authorization/Actions';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../Redux/Loader/LoaderActions';
import { CHANGE_PATH } from '../Redux/Router/Consts';

function* Router(data) {
  try {
    // yield put(showLoaderAction());
    yield put(push(data.path));
    // yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

export default function* watchRouter() {
  yield takeEvery(CHANGE_PATH, Router);
}
