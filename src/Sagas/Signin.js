import { takeEvery, put, call, all } from 'redux-saga/effects';
import { SIGN_IN } from '../Redux/Authorization/Consts';
import { authSuccessAction } from '../Redux/Authorization/AuthorizationActions';
import { push } from 'connected-react-router';
import axios from 'axios';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../Redux/Loader/LoaderActions';
import { baseUrl } from './Sagas';

function* Signin(data) {
  try {
    yield put(showLoaderAction());
    const response = yield call(axiosSignin, data);
    const path = '/mainpage';
    console.log('response Signin', response);
    // if(response.data.id) {
    //   yield put(push(path));
    //   authSuccessAction()
    // }
    yield put(hideLoaderAction());
  } catch (err) {
    // return { err: true, result: err }
    // console.log(err, 'error')
    // yield put(errorHandle(err));
    yield put(hideLoaderAction());
  }
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
      is_admin: data.authData.checkbox
    },
  });
};

// function* Signin(data) {
//   try {
//     yield put(showLoaderAction());
//     const response = yield call(fetchSignin, data);
//     console.log(response, 'response');
//     yield put(hideLoaderAction());
//     yield put(showLayoutErrorAction(response.error));
//   } catch (err) {
//     yield put(hideLoaderAction());
//     console.log(err, 'err');
//   }
// }

// async function fetchSignin(data) {
//   console.log(data, 'fetchSignin')
//   const response = await fetch(`${baseUrl}signup`, {
//     method: 'post',
//     data: {
//       username: data.authData.login,
//       password: data.authData.password,
//       password_confirmation: data.authData.confirmPassword,
//       is_admin: data.authData.checkbox
//     }
//   });
//   return await response.json();
// }

export default function* watchSignin() {
  yield takeEvery(SIGN_IN, Signin);
}
