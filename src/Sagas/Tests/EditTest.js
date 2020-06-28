import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { baseUrl } from '../Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';
import { EDIT_TEST } from '../../Redux/Tests/Consts';
import { GetAllTests } from './GetAllTests';

function* EditTest(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosEditTest, data);
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

/** Запрос на редактирование теста. */
const axiosEditTest = (data) => {
  return axios({
    method: 'patch',
    url: `${baseUrl}tests/${data.id}/`,
    headers: {
      'scope-key': 'YWxhZGRpbjpvcGVuc2VzYW1l',
    },
    data: {
      title: `${data.title}`
    }
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default function* watchEditTest() {
  yield takeEvery(EDIT_TEST, EditTest);
}
