import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { baseUrl } from '../Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';
import { EDIT_ANSWER } from '../../Redux/Answers/Consts';

function* EditAnswer(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosEditAnswer, data);
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

/** Запрос на создание ответа. */
const axiosEditAnswer = (data) => {
  console.log(data);
  return axios({
    method: 'patch',
    url: `${baseUrl}/answers/${data.questionId}`,
    headers: {
      'scope-key': 'YWxhZGRpbjpvcGVuc2VzYW1l',
    },
    data: {
      text: data.text,
      is_right: data.isRight,
    },
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default function* watchEditAnswer() {
  yield takeEvery(EDIT_ANSWER, EditAnswer);
}
