import { takeEvery, put, call, all } from 'redux-saga/effects';
import {LOGOUT} from '../../Redux/Authorization/Consts';
import { push } from 'connected-react-router';
import axios from 'axios';
import { baseUrl } from '../Sagas';

function* logout() {
  try {
    const response = yield call(axiosLogout);
    console.log('response logout', response);
  } catch (err) {
    console.log('err response logout', err);
  }
}

const axiosLogout = () => {
  return axios({
    method: 'delete',
    url: `${baseUrl}logout`,
    headers: {
      'Content-Type': 'application/json'
    },
  });
};

export default function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}
