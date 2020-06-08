import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { baseUrl } from '../Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';
import { DELETE_ANSWER } from '../../Redux/Answers/Consts';

function* DeleteAnswer(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosDeleteAnswer, data);
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

/** Запрос на удаление ответа. */
const axiosDeleteAnswer = (data) => {
  console.log(data);
  return axios({
    method: 'delete',
    url: `${baseUrl}answers/${data.id}`,
    headers: {
      'scope-key': 'YWxhZGRpbjpvcGVuc2VzYW1l',
    }
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default function* watchDeleteAnswer() {
  yield takeEvery(DELETE_ANSWER, DeleteAnswer);
}
