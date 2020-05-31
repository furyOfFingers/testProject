import { all } from 'redux-saga/effects';
import authorizationRoot from './Authorization/WatcherRoot';
import watchRouter from './Router';
import testsRoot from './Tests/WatcherRoot';
import questionsRoot from './Questions/WatcherRoot';

const auth =
  'Basic ' + new Buffer('passwords' + ':' + 'passwords').toString('base64');

export const baseUrl = 'https://snp-tests.herokuapp.com/api/v1/';

export default function* rootSaga() {
  yield all([
    authorizationRoot(),
    watchRouter(),
    testsRoot(),
    questionsRoot(),
  ]);
}
