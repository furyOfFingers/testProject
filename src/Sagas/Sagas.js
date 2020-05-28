import { all } from 'redux-saga/effects';
import watchLogout from './Logout';
import watchLogin from './Login';
import watchSignin from './Signin';
import watchRouter from './Router';
import testsRoot from './Tests/RootSaga';
import questionsRoot from './Questions/RootSaga';

const auth =
  'Basic ' + new Buffer('passwords' + ':' + 'passwords').toString('base64');

export const baseUrl = 'https://snp-tests.herokuapp.com/api/v1/';

export default function* rootSaga() {
  yield all([
    watchSignin(),
    watchLogin(),
    watchLogout(),
    watchRouter(),
    testsRoot(),
    questionsRoot(),
  ]);
}
