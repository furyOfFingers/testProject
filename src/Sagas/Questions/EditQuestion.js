import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { baseUrl } from '../Sagas';
import { EDIT_QUESTION } from '../../Redux/Questions/Consts';
import {
  showLoaderAction,
  hideLoaderAction,
} from '../../Redux/Loader/LoaderActions';

function* EditQuestion(data) {
  try {
    yield put(showLoaderAction());
    const { response, error } = yield call(axiosEditQuestion, data);
    yield put(hideLoaderAction());
  } catch (err) {
    yield put(hideLoaderAction());
  }
}

/** Запрос на редактирование вопроса. */
const axiosEditQuestion = (data) => {
  return axios({
    method: 'patch',
    url: `${baseUrl}questions/${data.questionId}/`,
    headers: {
      'scope-key': 'YWxhZGRpbjpvcGVuc2VzYW1l',
    },
    data: {
      title: data.title,
      question_type: data.questionType,
      answer: data.answer,
    },
  })
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};

export default function* watchEditQuestion() {
  yield takeEvery(EDIT_QUESTION, EditQuestion);
}
