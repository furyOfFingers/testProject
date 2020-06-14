import { all } from 'redux-saga/effects';
import watchCreateTest from './CreateTest';
import watchGetTest from './GetTest';
import watchGetAllTests from './GetAllTests';
import watchEditTest from './EditTest';
import watchDeleteTest from './DeleteTest';

export default function* testsRoot() {
  yield all([
    watchCreateTest(),
    watchGetTest(),
    watchEditTest(),
    watchDeleteTest(),
    watchGetAllTests(),
  ]);
}
