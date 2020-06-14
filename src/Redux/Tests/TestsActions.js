import {
  CREATE_TEST,
  GET_TEST,
  EDIT_TEST,
  DELETE_TEST,
  GET_ALL_TEST,
  PULL_TESTS_IN_STORE,
} from './Consts';

/** Экшен на создание теста.
 *
 * @param {string} title Заголовок теста.
 */
export function createTestAction(title) {
  return {
    type: CREATE_TEST,
    title: title,
  };
}

/** Экшен на получение теста.
 *
 * @param {string} id идентификатор теста.
 */
export function getTestAction(id) {
  return {
    type: GET_TEST,
    id: id,
  };
}

/** Экшен на редактирование теста.
 *
 * @param {string} id идентификатор теста.
 * @param {string} title заголовок теста.
 */
export function editTestAction(editData) {
  return {
    type: EDIT_TEST,
    id: editData.id,
    title: editData.title,
  };
}

/** Экшен на удаление теста.
 *
 * @param {string} id идентификатор теста.
 */
export function deleteTestAction(id) {
  return {
    type: DELETE_TEST,
    id: id,
  };
}

/** Экшен на получение списка тестов.
 *
 */
export function getAllTestsAction() {
  return {
    type: GET_ALL_TEST,
  };
}

/** Экшен на добавление тестов в стор.
 *
 * @param {string} id идентификатор теста.
 */
export function pullTestsInStoreAction(data) {
  return {
    type: PULL_TESTS_IN_STORE,
    tests: data.tests,
  };
}
