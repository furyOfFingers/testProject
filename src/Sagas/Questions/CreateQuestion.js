import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { baseUrl } from '../Sagas';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';
import { CREATE_QUESTION } from '../../Redux/Questions/Consts';

function* CreateQuestion(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosCreateQuestion, data);
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

/** Запрос на создание вопроса. */
const axiosCreateQuestion = (data) => {
  console.log(data)
  return axios({
    method: 'post',
    url: `${baseUrl}tests/${data.testId}/questions`,
    headers: {
      'scope-key': 'YWxhZGRpbjpvcGVuc2VzYW1l',
    },
    data: {
      title: data.title,
      question_type: data.questionType,
      /** можно потом передать вместе с вариантами ответов */
      // answer: data.answer
    },
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default function* watchCreateQuestion() {
  yield takeEvery(CREATE_QUESTION, CreateQuestion);
}
