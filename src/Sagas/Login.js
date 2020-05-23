import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN, SUCCESS_HANDLE } from '../Redux/Authorization/Consts';
import { ERROR_HANDLER_LOGIN } from '../Redux/ErrorHandler/Authorization/Consts';
import { push } from 'connected-react-router';
import { watchLogout } from './Logout';
import { baseUrl } from './Sagas';
import { loginErrorHandlerAction } from '../Redux/ErrorHandler/Authorization/Actions';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../Redux/Loader/LoaderActions';

// function* Login(data) {
//   try {
//   yield put(showLoaderAction());
//     const response = yield call(axiosLogin, data);
//     yield put({ type: SUCCESS_HANDLE, payload: response });
//     const path = '/mainpage';
//     console.log('response Login', response);
//     if(response.data.id) {
//       yield put(push(path));
//     }
//     yield put(hideLoaderAction());
//   } catch (err) {
//     // console.log('err response Login', err);
//     yield put({ type: ERROR_HANDLE, payload: err});
//     yield put(hideLoaderAction());
//   }
// }

// const axiosLogin = (data) => {
//   return axios({
//     method: 'post',
//     url: `${baseUrl}signin`,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: {
//       username: data.authData.login,
//       password: data.authData.password,
//     },
//   });
// };


function* Login(data) {
  try {
    yield put(showLoaderAction());
    const response = yield call(fetchLogin, data);
    console.log(response, 'response');
    if (response.error) {
      console.log('dem')
      // yield put(push(path));
      // yield put({ type: ERROR_HANDLER_LOGIN, err });
    }
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
    console.log(err, 'err');
  }
}

async function fetchLogin(data) {
  const response = await fetch(`${baseUrl}signin`, {
    method: 'post',
    data: {
      username: data.authData.login,
      password: data.authData.password,
    },
  });
  return await response.json();
}

export default function* watchLogin() {
  yield takeEvery(LOG_IN, Login);
}
