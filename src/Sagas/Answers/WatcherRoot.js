import { all } from 'redux-saga/effects';
import watchCreateAnswer from './CreateAnswer';
import watchEditAnswer from './EditAnswer';
// import watchEditTest from './EditQuestion';
import watchDeleteAnswer from './DeleteAnswer';

export default function* answersRoot() {
  yield all([
    watchCreateAnswer(),
    watchEditAnswer(),
    watchDeleteAnswer(),
  ]);
}
