import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';
import { baseUrl } from '../Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';
import { pullTestsInStoreAction } from '../../Redux/Tests/TestsActions';
import { GET_ALL_TEST } from '../../Redux/Tests/Consts';

export function* GetAllTests(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosGetAllTests, data);
    yield put(pullTestsInStoreAction(response.data))
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

/** Запрос на получение всех тестов. */
const axiosGetAllTests = (data) => {
  return axios({
    method: 'get',
    url: `${baseUrl}tests`,
    headers: {
      'scope-key': 'YWxhZGRpbjpvcGVuc2VzYW1l',
    },
    data: {
      per: 2,
      page: 2
    }
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default function* watchGetAllTests() {
  yield takeEvery(GET_ALL_TEST, GetAllTests);
}
