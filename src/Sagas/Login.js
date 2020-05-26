import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN } from '../Redux/Authorization/Consts';
import { push } from 'connected-react-router';
import { baseUrl } from './Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../Redux/Loader/LoaderActions';
import { showLayoutErrorAction } from '../Redux/Layout/LayoutActions';
import { authSuccessAction } from '../Redux/Authorization/AuthorizationActions';

function* Login(data) {
  try {
    yield put(showLoaderAction());
    const response = yield call(axiosLogin, data);
    const path = '/mainpage';
    console.log('response Login', response);
    if(response.data.id) {
      yield put(push(path));
    }
    if(response.data.is_admin) {
      yield put(authSuccessAction(response.data.is_admin));
    }
    if(response.error) {
      console.log('errorrrr!!?')
      /** TODO разобратсья с обработкой ошибок */
      // yield put(showLayoutErrorAction(response.error));
    }
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

const axiosLogin = (data) => {
  return axios({
    method: 'post',
    url: `${baseUrl}signin`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: 'passwords',
      password: 'passwords',
      // username: data.authData.login,
      // password: data.authData.password,
    },
  });
};

// function* Login(data) {
//   try {
//     yield put(showLoaderAction());
//     const response = yield call(fetchLogin, data);
//     console.log(response, 'response');
//     // if (response.error) {
//     yield put(showLayoutErrorAction(response.error));
//     // }
//     // yield put(push(path));
//     yield put(hideLoaderAction());
//     yield put(authSuccessAction());
//   } catch (err) {
//     yield put(hideLoaderAction());
//     console.log(err, 'err');
//   }
// }

// async function fetchLogin(data) {
//   const response = await fetch(`${baseUrl}signin`, {
//     method: 'post',
//     data: {
//       username: data.authData.login,
//       password: data.authData.password
//     },
//   });
//   return await response.json();
// }

export default function* watchLogin() {
  yield takeEvery(LOG_IN, Login);
}
