import { CREATE_TEST, GET_TEST, EDIT_TEST, DELETE_TEST } from './Consts';

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
