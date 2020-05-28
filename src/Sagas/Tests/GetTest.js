import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';
import { baseUrl } from '../Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';
import { GET_TEST } from '../../Redux/Tests/Consts';

function* GetTest(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosGetTest, data);
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

/** Запрос на получение теста. */
const axiosGetTest = (data) => {
  return axios({
    method: 'get',
    url: `${baseUrl}tests/${data.id}/`,
    headers: {
      'scope-key': 'YWxhZGRpbjpvcGVuc2VzYW1l',
    }
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default function* watchGetTest() {
  yield takeEvery(GET_TEST, GetTest);
}
