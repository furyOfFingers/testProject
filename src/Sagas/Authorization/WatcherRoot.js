import { all } from 'redux-saga/effects';
import watchGetCurrentUser from './CurrentUser';
import watchLogin from './Login';
import watchLogout from './Logout';
import watchSignin from './Signin';

/**
 * watcher на события авторизации.
 * todo додумать правильное название
 */
export default function* authorizationRoot() {
  yield all([
    watchGetCurrentUser(),
    watchLogin(),
    watchLogout(),
    watchSignin(),
  ]);
}
