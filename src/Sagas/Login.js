import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN, ERROR_HANDLE, SUCCESS_HANDLE } from '../Redux/Authorization/Consts';
import { push } from 'connected-react-router';
import { watchLogout } from './Logout';
import { baseUrl } from './Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../Redux/Loader/LoaderActions';

function* Login(data) {

  try {
  yield put(showLoaderAction());
    const response = yield call(axiosLogin, data);
    yield put({ type: SUCCESS_HANDLE, payload: response });
    const path = '/mainpage';
    console.log('response Login', response);
    if(response.data.id) {
      yield put(push(path));
    }
    yield put(hideLoaderAction());
  } catch (err) {
    // console.log('err response Login', err);
    yield put({ type: ERROR_HANDLE, payload: err});
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
      username: data.authData.login,
      password: data.authData.password,
    },
  });
};
// function* Login() {
//   try {
//     yield put(showLoader());
//     const payload = yield call(fetchPosts);
//     // yield put({ type: FETCH_POSTS, payload });
//     console.log()
//   } catch (e) {
//   }
// }

// async function fetchPosts() {
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_limit=5'
//   );
//   return await response.json();
// }

export default function* watchLogin() {
  yield takeEvery(LOG_IN, Login);
}
