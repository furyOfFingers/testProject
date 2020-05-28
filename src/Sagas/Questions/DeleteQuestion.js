import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { baseUrl } from '../Sagas';
import { DELETE_QUESTION } from '../../Redux/Questions/Consts';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';

function* DeleteQuestion(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosDeleteQuestion, data);
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

/** Запрос на редактирование вопроса. */
const axiosDeleteQuestion = (data) => {
  return axios({
    method: 'delete',
    url: `${baseUrl}questions/${data.id}/`,
    headers: {
      'scope-key': 'YWxhZGRpbjpvcGVuc2VzYW1l',
    },
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default function* watchDeleteQuestion() {
  yield takeEvery(DELETE_QUESTION, DeleteQuestion);
}
