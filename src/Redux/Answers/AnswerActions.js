import {
  CREATE_ANSWER,
  EDIT_ANSWER,
  DELETE_ANSWER,
  MOVE_ANSWER,
} from './Consts';

/** Экшен на создание ответа.
 *
 * @param {string} text Вариант ответа.
 * @param {boolean} isRight Признак правильного варианта ответа на вопрос.
 * @param {number} questionId id вопроса.
 */
export function createAnswerAction(data) {
  return {
    type: CREATE_ANSWER,
    text: data.versionAnswer,
    isRight: data.isAnswer,
    questionId: data.questionId,
  };
}

/** Экшен на редактирование ответа.
 *
 * @param {string} text Вариант ответа.
 * @param {boolean} isRight Признак правильного варианта ответа на вопрос.
 * @param {number} questionId id вопроса.
 */
export function editAnswerAction(data) {
  return {
    type: EDIT_ANSWER,
    text: data.text,
    isRight: data.is_right,
    questionId: data.id
  };
}

/** Экшен на удаление ответа.
 *
 * @param {string} id идентификатор теста.
 */
export function deleteAnswerAction(id) {
  return {
    type: DELETE_ANSWER,
    id: id
  };
}
