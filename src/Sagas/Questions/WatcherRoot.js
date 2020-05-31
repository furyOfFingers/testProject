import { all } from 'redux-saga/effects';
import watchCreateQuestion from './CreateQuestion';
import watchEditQuestion from './EditQuestion';
// import watchEditTest from './EditQuestion';
import watchDeleteQuestion from './DeleteQuestion';

export default function* questionsRoot() {
  yield all([
    watchCreateQuestion(),
    watchEditQuestion(),
    watchDeleteQuestion(),
  ]);
}
