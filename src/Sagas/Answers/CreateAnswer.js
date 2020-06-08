import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { baseUrl } from '../Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';
import { CREATE_ANSWER } from '../../Redux/Answers/Consts';

function* CreateAnswer(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosCreateAnswer, data);
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

/** Запрос на создание ответа. */
const axiosCreateAnswer = (data) => {
  console.log(data);
  return axios({
    method: 'post',
    url: `${baseUrl}/questions/${data.questionId}/answers`,
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

export default function* watchCreateAnswer() {
  yield takeEvery(CREATE_ANSWER, CreateAnswer);
}
