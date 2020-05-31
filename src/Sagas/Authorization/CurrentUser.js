import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { GET_CURRENT_USER } from '../../Redux/Authorization/Consts';
import { baseUrl } from '../Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';
import { authSuccessAction } from '../../Redux/Authorization/AuthorizationActions';

function* GetCurrentUser(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosGetCurrentUser, data);
    if (response) {
      yield put(authSuccessAction(response.data.is_admin));
    }
    yield put(hideLoaderAction());
  } catch (err) {
    console.log('error in catch!');
    yield put(hideLoaderAction());
  }
}

/** Запрос на получение актуального пользователя. */
const axiosGetCurrentUser = (data) => {
  return axios({
    method: 'get',
    url: `${baseUrl}users/current`,
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default function* watchGetCurrentUser() {
  yield takeEvery(GET_CURRENT_USER, GetCurrentUser);
}
