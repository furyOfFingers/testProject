import { takeEvery, put, call, all } from 'redux-saga/effects';
import { SIGN_IN, LOGOUT } from '../Redux/Authorization/Consts';
import { authSuccessAction } from '../Redux/Authorization/AuthorizationActions';
import { push } from 'connected-react-router';
import axios from 'axios';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../Redux/Loader/LoaderActions';
import { baseUrl } from './Sagas';

function* Signin(data) {
  yield put(showLoaderAction());
  const response = yield call(axiosSignin, data);
  try {
    const path = '/mainpage';
    console.log('response Signin', response);
    if(response.data.id) {
      yield put(push(path));
      authSuccessAction()
    }
  } catch (err) {
    // return { err: true, result: err }
    // console.log(err, 'error')
    // yield put(errorHandle(err));
    yield put(hideLoaderAction());
  }
  yield put(hideLoaderAction());
}
const errorHandle = (err) => {
  console.log('error', err)
}
const axiosSignin = (data) => {
  return axios({
    method: 'post',
    url: `${baseUrl}signup`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: data.authData.login,
      password: data.authData.password,
      password_confirmation: data.authData.confirmPassword,
      is_admin: data.authData.confirmPassword
    },
  });
};

export default function* watchSignin() {
  yield takeEvery(SIGN_IN, Signin);
}
