import { takeEvery, put, call, all } from 'redux-saga/effects';
import {SIGN_IN} from '../Redux/Authorization/Consts';
import {CHANGE_PATH} from '../Redux/Router/Consts';
import { push } from 'connected-react-router';
import watchLogout from './Logout';
import watchLogin from './Login';
import watchSignin from './Signin';
import axios from 'axios';

export const baseUrl = 'https://snp-tests.herokuapp.com/api/v1/';

export default function* rootSaga() {
  yield all([watchSignin(), watchLogin(), watchLogout()]);
}
