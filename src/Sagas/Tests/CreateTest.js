import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { baseUrl } from '../Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';
import { CREATE_TEST } from '../../Redux/Tests/Consts';

function* CreateTest(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosCreateTest, data);
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

/** Запрос на создание теста. */
const axiosCreateTest = (data) => {
  return axios({
    method: 'post',
    url: `${baseUrl}tests`,
    headers: {
      'scope-key': 'YWxhZGRpbjpvcGVuc2VzYW1l',
    },
    data: {
      title: data.title,
    },
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default function* watchCreateTest() {
  yield takeEvery(CREATE_TEST, CreateTest);
}
