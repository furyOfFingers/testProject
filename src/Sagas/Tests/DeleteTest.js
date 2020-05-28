import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { baseUrl } from '../Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';
import { DELETE_TEST } from '../../Redux/Tests/Consts';

function* DeleteTest(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosDeleteTest, data);
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

/** Запрос на удаление теста. */
const axiosDeleteTest = (data) => {
  return axios({
    method: 'delete',
    url: `${baseUrl}tests/${data.id}/`,
    headers: {
      'scope-key': 'YWxhZGRpbjpvcGVuc2VzYW1l',
    // },
    // data: {
    //   title: `${data.title}`
    }
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default function* watchDeleteTest() {
  yield takeEvery(DELETE_TEST, DeleteTest);
}
