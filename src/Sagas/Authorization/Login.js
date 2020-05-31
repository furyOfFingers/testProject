import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
axios.defaults.withCredentials = true
import { LOG_IN } from '../../Redux/Authorization/Consts';
import { push } from 'connected-react-router';
import { baseUrl } from '../Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';
import { showLayoutErrorAction } from '../../Redux/Layout/LayoutActions';
import { authSuccessAction } from '../../Redux/Authorization/AuthorizationActions';
import API from '../API'

function* Login(data) {
  try {
    yield put(showLoaderAction());
    const {response, error} = yield call(axiosLogin, data);
    console.log()
    if(response) {
      // const {responseTest, errorTest} = yield call(axiosGetTest, response.data.id)
      const path = '/mainpage';
      yield put(push(path));
      yield put(authSuccessAction(response.data.is_admin));
    }
      /** TODO разобратсья с обработкой ошибок */
      // yield put(showLayoutErrorAction(response.error))
    yield put(hideLoaderAction());
  } catch (err) {
    console.log('error in catch!')
    yield put(hideLoaderAction());
  }
}

/** Запрос на авториацию */
const axiosLogin = (data) => {
  return axios({
    method: 'post',
    url: `${baseUrl}signin`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      // username: 'passwords',
      // password: 'passwords',
      username: data.authData.login,
      password: data.authData.password,
    },
  })
  .then(response => ({response}))
    .catch(error => ({error}));
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
